export const badRequestError = {
  error: 'Invalid movie ID',
  message: 'Movie ID must be a number',
};

export const unauthorizedError = {
  error: 'Authentication required',
  message: 'Please include Authorization header with Bearer token',
};

export const notFoundError = {
  error: 'Movie not found',
  message: 'No movie found with ID 999',
};

export const tooManyRequestsError = {
  error: 'Too many requests',
  message: 'Too many requests from this IP, please try again later.',
  retryAfter: '1 minute',
};
