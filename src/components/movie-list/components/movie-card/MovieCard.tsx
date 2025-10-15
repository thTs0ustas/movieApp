import { useRouter } from 'next/router';
import Image from 'next/image';

import { useAppModelProps } from '@/store/hooks';
import { selectToken } from '@/models/auth/selectors';
import { Movie } from '@/models/movies/types';

import { LikeButton } from './components/LikeButton';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const router = useRouter();
  const { token } = useAppModelProps({ token: selectToken });

  return (
    <div
      onClick={() => router.push(`/movies/${movie.id}`)}
      aria-label={`View details for ${movie.title}`}
      className="relative my-6 flex w-full cursor-pointer rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl lg:w-96">
      <div className="relative flex-shrink-0 overflow-hidden rounded-l-lg">
        <Image
          priority={true}
          src={movie.poster}
          alt={movie.title}
          height={256}
          width={176}
          className="h-auto w-auto"
        />
      </div>
      <div className="flex grow flex-col">
        <div className="border-b border-slate-200 p-2">
          <span className="text-md font-semibold text-slate-800">
            {movie.title}
          </span>
        </div>

        <div className="grow p-2">
          <p className="pb-2 text-xs font-medium text-slate-600">
            {movie.genre}
          </p>
          <p className="text-[10px] leading-normal font-light text-slate-600">
            {movie.description}
          </p>
        </div>
        <div className="flex items-center justify-between border-t border-slate-200 p-2">
          <span className="text-xs font-medium text-slate-600">
            Rating: {movie.rating} / 10
          </span>
          {token && (
            <LikeButton id={movie.id.toString()} isFavorite={movie.favorite!} />
          )}
        </div>
      </div>
    </div>
  );
};
