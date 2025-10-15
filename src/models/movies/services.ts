import { api } from '@/api';

import { Movie, MovieListResponse } from './types';

export const moviesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMovies: build.query<MovieListResponse, number>({
      query: (pageIndex) => `get-movies/${pageIndex}`,
      providesTags: ['Movies'],
    }),
    getMovieById: build.query<Movie, string>({
      query: (id) => `get-movie/${id}`,
      providesTags: ['Movie'],
    }),
    addFavorite: build.mutation<void, string>({
      query: (id) => ({
        url: `add-favorites/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['Movies', 'Movie'],
    }),
    removeFavorite: build.mutation<void, string>({
      query: (id) => ({
        url: `remove-favorites/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Movies', 'Movie'],
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieByIdQuery,
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
} = moviesApi;
