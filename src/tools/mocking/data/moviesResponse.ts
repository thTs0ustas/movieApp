export const moviesSuccessResponse = {
  movies: [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      year: 1994,
      genre: 'Drama',
      director: 'Frank Darabont',
      rating: 9.3,
      poster: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      description:
        'Two imprisoned men bond over years, finding solace and redemption through acts of common',
    },
    {
      id: 2,
      title: 'The Godfather',
      year: 1972,
      genre: 'Crime, Drama',
      director: 'Francis Ford Coppola',
      rating: 9.2,
      poster: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      description:
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    },

    {
      id: 3,
      title: 'The Dark Knight',
      year: 2008,
      genre: 'Action, Crime, Drama',
      director: 'Christopher Nolan',
      rating: 9.0,
      poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      description:
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    },
    {
      id: 4,
      title: 'Pulp Fiction',
      year: 1994,
      genre: 'Crime, Drama',
      director: 'Quentin Tarantino',
      rating: 8.9,
      poster: 'https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg',
      description:
        'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    },
    {
      id: 5,
      title: 'Forrest Gump',
      year: 1994,
      genre: 'Drama, Romance',
      director: 'Robert Zemeckis',
      rating: 8.8,
      poster: 'https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg',
      description:
        'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
    },
    {
      id: 6,
      title: 'Inception',
      year: 2010,
      genre: 'Action, Adventure, Sci-Fi',
      director: 'Christopher Nolan',
      rating: 8.8,
      poster: 'https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg',
      description:
        'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
    },
    {
      id: 7,
      title: 'The Matrix',
      year: 1999,
      genre: 'Action, Sci-Fi',
      director: 'Lana Wachowski, Lilly Wachowski',
      rating: 8.7,
      poster: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      description:
        'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    },
    {
      id: 8,
      title: 'Fight Club',
      year: 1999,
      genre: 'Drama',
      director: 'David Fincher',
      rating: 8.8,
      poster: 'https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg',
      description:
        'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.',
    },
  ],
  pagination: {
    page: 1,
    limit: 8,
    total: 16,
    totalPages: 2,
    hasNext: true,
    hasPrev: false,
  },
  authenticated: false,
};

export const moviesAuthResponse = {
  movies: [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      year: 1994,
      genre: 'Drama',
      director: 'Frank Darabont',
      rating: 9.3,
      poster: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      favorite: true,
      description:
        'Two imprisoned men bond over years, finding solace and redemption through acts of common',
    },
    {
      id: 2,
      title: 'The Godfather',
      year: 1972,
      genre: 'Crime, Drama',
      director: 'Francis Ford Coppola',
      rating: 9.2,
      favorite: false,
      poster: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      description:
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    },
    {
      id: 3,
      title: 'The Dark Knight',
      year: 2008,
      genre: 'Action, Crime, Drama',
      director: 'Christopher Nolan',
      rating: 9.0,
      favorite: false,
      poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      description:
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    },
    {
      id: 4,
      title: 'Pulp Fiction',
      year: 1994,
      genre: 'Crime, Drama',
      director: 'Quentin Tarantino',
      rating: 8.9,
      favorite: false,
      poster: 'https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg',
      description:
        'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    },
    {
      id: 5,
      title: 'Forrest Gump',
      year: 1994,
      genre: 'Drama, Romance',
      director: 'Robert Zemeckis',
      rating: 8.8,
      favorite: false,
      poster: 'https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg',
      description:
        'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
    },
    {
      id: 6,
      title: 'Inception',
      year: 2010,
      genre: 'Action, Adventure, Sci-Fi',
      director: 'Christopher Nolan',
      rating: 8.8,
      favorite: true,
      poster: 'https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg',
      description:
        'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
    },
    {
      id: 7,
      title: 'The Matrix',
      year: 1999,
      genre: 'Action, Sci-Fi',
      director: 'Lana Wachowski, Lilly Wachowski',
      rating: 8.7,
      favorite: true,
      poster: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      description:
        'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    },
    {
      id: 8,
      title: 'Fight Club',
      year: 1999,
      genre: 'Drama',
      director: 'David Fincher',
      favorite: false,
      rating: 8.8,
      poster: 'https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg',
      description:
        'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.',
    },
  ],
  pagination: {
    page: 1,
    limit: 8,
    total: 16,
    totalPages: 2,
    hasNext: true,
    hasPrev: false,
  },
  authenticated: true,
};

export const movieResponse = {
  id: 1,
  title: 'The Shawshank Redemption',
  year: 1994,
  genre: 'Drama',
  director: 'Frank Darabont',
  rating: 9.3,
  poster: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
  description:
    'Two imprisoned men bond over years, finding solace and redemption through acts of common',
};

export const movieAuthResponse = {
  id: 1,
  title: 'The Shawshank Redemption',
  year: 1994,
  genre: 'Drama',
  director: 'Frank Darabont',
  rating: 9.3,
  favorite: true,
  poster: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
  description:
    'Two imprisoned men bond over years, finding solace and redemption through acts of common',
};

export const moviesErrorResponse = {
  message: 'Failed to fetch movies. Please try again later.',
};

export const addToFavoritesResponse = (id: string) => ({
  message: 'Movie added to favorites',
  movieId: id,
  movieTitle: 'The Shawshank Redemption',
  totalFavorites: 3,
});
