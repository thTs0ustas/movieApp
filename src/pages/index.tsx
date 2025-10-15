import { Layout } from '@/components/Layout';
import { MovieList } from '@/components/movie-list/MovieList';
import type { NextPageWithLayout } from '@/pages/_app';
import { MovieListResponse } from '@/models/movies/types';
import { wrapper } from '@/store/store';
import { moviesApi } from '@/models/movies/services';
import { setUser } from '@/models/auth/actions';

interface MovieListProps {
  movies: MovieListResponse;
}
const HomePage: NextPageWithLayout<MovieListProps> = () => (
  <>
    <h1 className="pb-10 text-center text-5xl font-bold">
      Welcome to <span className="text-[hsl(280,100%,70%)]">Movie App</span>
    </h1>
    <MovieList />
  </>
);

HomePage.getLayout = (page) => <Layout>{page}</Layout>;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const authToken = ctx.req.cookies['auth_token'];

    // assume that the token holds valid JWT token, in real app we need to verify it
    // and extract user info from the token claims

    const username = authToken?.split('-').at(-1);

    if (authToken && username) {
      store.dispatch(
        setUser({ token: authToken, user: { username }, isLoggedIn: true }),
      );
    }

    store.dispatch(moviesApi.endpoints.getMovies.initiate(1));

    return {
      props: {},
    };
  },
);

export default HomePage;
