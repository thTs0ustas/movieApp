export const userSuccessResponse = {
  token: 'mock-jwt-token-123456',
  user: {
    id: 1,
    username: 'mockuser',
  },
  message: 'Login successful',
};

export const userErrorResponse = {
  message: 'Invalid username or password',
};
