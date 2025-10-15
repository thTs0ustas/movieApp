import { delay, http, HttpResponse } from 'msw';

import { API_BASE_URL } from '@/config';
import { notFoundError, unauthorizedError } from '@/tools/mocking/data/errors';

import {
  moviesSuccessResponse,
  moviesAuthResponse,
  movieResponse,
  movieAuthResponse,
  addToFavoritesResponse,
} from '../data/moviesResponse';
import { userSuccessResponse } from '../data/useResponse';

let authResponse = moviesAuthResponse;
let mAuthResponse = movieAuthResponse;

export const handlers = [
  http.get(`${API_BASE_URL}/movies`, async ({ request }) => {
    const auth = request.headers.get('Authorization');
    await delay(1000);

    if (!auth) {
      return HttpResponse.json(moviesSuccessResponse, {
        status: 200,
      });
    }

    return HttpResponse.json(authResponse, {
      status: 200,
    });
  }),
  http.get(`${API_BASE_URL}/movies/:id`, async ({ request }) => {
    const auth = request.headers.get('authorization');
    await delay(1000);

    if (!auth) {
      return HttpResponse.json(movieResponse, {
        status: 200,
      });
    }

    return HttpResponse.json(mAuthResponse, {
      status: 200,
    });
  }),
  http.post(`${API_BASE_URL}/api/login`, async ({ request }) => {
    const { username, password } = (await request.clone().json()) as {
      username: string;
      password: string;
    };

    await delay(500);

    if (username === 'asdf' || password === 'asdf') {
      return HttpResponse.json(notFoundError, {
        status: 401,
      });
    }
    return HttpResponse.json(userSuccessResponse, {
      status: 200,
    });
  }),
  http.post(
    `${API_BASE_URL}/movies/:id/favorite`,
    async ({ params, request }) => {
      const { id } = params;
      const auth = request.headers.get('authorization');
      await delay(200);

      if (!auth) {
        return HttpResponse.json(unauthorizedError, {
          status: 401,
        });
      }
      authResponse = {
        ...moviesAuthResponse,
        movies: moviesAuthResponse.movies.map((movie) =>
          movie.id === Number(id) ? { ...movie, favorite: true } : movie,
        ),
      };
      mAuthResponse = { ...movieAuthResponse, favorite: true };

      return HttpResponse.json(addToFavoritesResponse(id as string), {
        status: 200,
      });
    },
  ),
  http.delete(`${API_BASE_URL}/movies/:id/favorite`, async ({ params }) => {
    const { id } = params;
    await delay(200);

    authResponse = {
      ...moviesAuthResponse,
      movies: moviesAuthResponse.movies.map((movie) =>
        movie.id === Number(id) ? { ...movie, favorite: false } : movie,
      ),
    };
    mAuthResponse = { ...movieAuthResponse, favorite: false };

    return HttpResponse.json({
      status: 200,
    });
  }),
];
