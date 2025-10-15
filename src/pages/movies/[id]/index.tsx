import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { Layout } from '@/components/Layout';
import { Movie } from '@/components/movie';
import type { MovieListResponse } from '@/models/movies/types';
import type { NextPageWithLayout } from '@/pages/_app';
import { API_BASE_URL } from '@/config';
import { makeRequest } from '@/utils/make-request';
import { wrapper } from '@/store/store';
import { moviesApi } from '@/models/movies/services';

const MoviePage: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Movie Details</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Movie />
  </>
);

MoviePage.getLayout = (page) => <Layout backButton>{page}</Layout>;

const getStaticPaths: GetStaticPaths = async () => {
  try {
    const data = (await makeRequest(
      `${API_BASE_URL}/movies`,
    )) as MovieListResponse | null;

    if (!data?.movies) {
      return {
        paths: [],
        fallback: 'blocking',
      };
    }

    const paths = data?.movies.map((movie) => ({
      params: { id: movie.id.toString() },
    }));

    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    console.error('Error fetching movie paths:', error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
};

const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    try {
      const { id } = context.params!;

      store.dispatch(moviesApi.endpoints.getMovieById.initiate(id as string));
      await Promise.all(
        store.dispatch(moviesApi.util.getRunningQueriesThunk()),
      );

      return {
        props: {},
      };
    } catch (error) {
      console.error('Error fetching movie data:', error);
      return {
        notFound: true,
      };
    }
  },
);

export { getStaticPaths, getStaticProps };

export default MoviePage;
