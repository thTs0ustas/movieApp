import { useRouter } from 'next/router';
import { toast } from 'sonner';

import { selectIsLoggedIn, selectUser } from '@/models/auth/selectors';
import { useAppModelProps } from '@/store/hooks';
import { clearUser } from '@/models/auth/slice';
import { moviesApi } from '@/models/movies/services';
import { useLogoutMutation } from '@/models/auth/services';

export const Header = () => {
  const { isLoggedIn, user, resetUser, resetMovies } = useAppModelProps({
    user: selectUser,
    isLoggedIn: selectIsLoggedIn,
    resetUser: clearUser,
    resetMovies: moviesApi.util.resetApiState,
  });
  const router = useRouter();
  const [logout] = useLogoutMutation();

  return (
    <header className="mb-8 flex w-full justify-between border-b border-gray-300 py-4">
      <h1
        className="cursor-pointer text-center text-3xl font-bold"
        aria-label="Movie App Home"
        onClick={() => router.push('/')}>
        Movie App
      </h1>

      <div className="flex items-center gap-4">
        {!isLoggedIn ? (
          <button
            aria-label="Sign In"
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={() => router.push('/sign-in')}>
            Sign In
          </button>
        ) : (
          <div>
            <span className="font-medium text-gray-700">{user?.username}</span>
            <button
              aria-label="Sign Out"
              className="ml-4 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              onClick={() => {
                logout({});
                resetUser();
                resetMovies();
                toast.info("You've been signed out");
              }}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
