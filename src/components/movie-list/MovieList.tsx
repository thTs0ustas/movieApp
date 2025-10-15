import { useState } from 'react';
import { toast } from 'sonner';

import { useGetMoviesQuery } from '@/models/movies/services';
import { MovieCardsSkeleton } from '@/components/skeletons/movie-card-skeleton/MovieCardSkeleton';

import { Pagination } from './components/pagination';
import { MovieCard } from './components/movie-card';

export const MovieList = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const { isFetching, data, error } = useGetMoviesQuery(pageIndex);

  if (error) toast.error('Error fetching movies');

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6">
        {isFetching && !data ? (
          <MovieCardsSkeleton length={8} />
        ) : (
          data?.movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>

      <Pagination
        hasPrev={data?.pagination.hasPrev}
        hasNext={data?.pagination.hasNext}
        setPageIndex={setPageIndex}
      />
    </>
  );
};
