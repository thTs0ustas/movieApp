import Image from 'next/image';
import { useRouter } from 'next/router';

import { useGetMovieByIdQuery } from '@/models/movies/services';
import { MovieSkeleton } from '@/components/skeletons';

export const Movie = () => {
  const { query } = useRouter();
  const { id } = query as { id: string };

  const { data, isFetching } = useGetMovieByIdQuery(id);

  if (!data && !isFetching) {
    return <div className="text-center text-gray-500">Movie not found</div>;
  }

  return !isFetching && data ? (
    <div className="flex w-full max-w-4xl flex-col overflow-hidden rounded-lg bg-white shadow-md sm:flex-row">
      <div className="relative overflow-hidden rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none">
        <Image
          priority={true}
          src={data.poster}
          alt={data.title}
          width={640}
          height={840}
        />
      </div>
      <div className="flex w-full flex-col justify-between">
        <div className="flex grow flex-col p-6">
          <h1 className="mb-2 text-xl font-bold text-gray-700 md:text-2xl">
            {data.title}
          </h1>
          <p className="md:text-md mb-1 text-sm text-gray-600 italic">
            {data.year}
          </p>
          <p className="md:text-md mb-1 text-sm text-gray-800">{data.genre}</p>
          <p className="md:text-md mb-4 text-sm text-gray-800">
            Directed by: {data.director}
          </p>
          <p className="mb-4 flex-1 text-sm text-gray-700">
            {data.description}
          </p>
          <p className="md:text-md text-sm font-semibold text-yellow-600">
            Rating: {data.rating}/10
          </p>
        </div>
      </div>
    </div>
  ) : (
    <MovieSkeleton />
  );
};
