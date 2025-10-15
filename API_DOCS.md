# Movie API Documentation

A REST API for browsing movies, managing favorites, and user authentication.

**Base URL:** `https://movie-api-decs.onrender.com/api`  

## Quick Start

1. **Browse movies publicly** (no authentication required)
2. **Login** to access favorites and personalized features
3. **Manage favorites** by adding/removing movies from your list

## Authentication

### Login
Get an access token to use authenticated endpoints.

**Endpoint:** `POST /api/auth/login`

**Request:**
```json
{
  "username": "[username]",
  "password": "[password]"
}
```

**Response:**
```json
{
  "token": "mock-jwt-token-[username]",
  "user": {
    "id": 1,
    "username": "[username]"
  },
  "message": "Login successful"
}
```

**Test User:**
You can use the username and password provided to you by email.

**Using Your Token:**
Include the token in the Authorization header for authenticated requests:
```
Authorization: Bearer mock-jwt-token-[username]
```

## Movies

### Get All Movies
Browse the movie collection with pagination.

**Endpoint:** `GET /api/movies`

**Query Parameters:**
- `page` - Page number (default: 1)
- `limit` - Movies per page (default: 8)

**Response:**
```json
{
  "movies": [
    {
      "id": 1,
      "title": "The Shawshank Redemption",
      "year": 1994,
      "genre": "Drama",
      "director": "Frank Darabont",
      "rating": 9.3,
      "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      "description": "Two imprisoned men bond over years, finding solace and redemption through acts of common"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 8,
    "total": 16,
    "totalPages": 2,
    "hasNext": true,
    "hasPrev": false
  },
  "authenticated": false
}
```

If we send an authenticated request to the same endpoint we also get the favorite status for each movie.

**Response:**
```json
{
  "movies": [
    {
      "id": 1,
      "title": "The Shawshank Redemption",
      "year": 1994,
      "genre": "Drama",
      "director": "Frank Darabont",
      "rating": 9.3,
      "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      "description": "Two imprisoned men bond over years, finding solace and redemption through acts of common",
      "favorite": true
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 8,
    "total": 16,
    "totalPages": 2,
    "hasNext": true,
    "hasPrev": false
  },
  "authenticated": true
}
```

### Get Single Movie
Get detailed information about a specific movie.

**Endpoint:** `GET /api/movies/:id`

**Response:**
```json
{
    "id": 1,
    "title": "The Shawshank Redemption",
    "year": 1994,
    "genre": "Drama",
    "director": "Frank Darabont",
    "rating": 9.3,
    "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    "description": "Two imprisoned men bond over years, finding solace and redemption through acts of common decency."
}
```

## Favorites (Authentication Required)

### Add to Favorites
Add a movie to your personal favorites list.

**Endpoint:** `POST /api/movies/:id/favorite`


**Response:**
```json
{
  "message": "Movie added to favorites",
  "movieId": 1,
  "movieTitle": "The Shawshank Redemption",
  "totalFavorites": 3
}
```

### Remove from Favorites
Remove a movie from your favorites list.

**Endpoint:** `DELETE /api/movies/:id/favorite`

## Available Movies

The API includes 16 popular movies:

1. The Shawshank Redemption (1994) - Drama
2. The Godfather (1972) - Crime
3. The Dark Knight (2008) - Action
4. Pulp Fiction (1994) - Crime
5. Forrest Gump (1994) - Drama
6. Inception (2010) - Sci-Fi
7. The Matrix (1999) - Sci-Fi
8. Goodfellas (1990) - Crime
9. Fight Club (1999) - Drama
10. The Lord of the Rings: The Return of the King (2003) - Fantasy
11. Interstellar (2014) - Sci-Fi
12. Parasite (2019) - Thriller
13. The Departed (2006) - Crime
14. Gladiator (2000) - Action
15. The Silence of the Lambs (1991) - Thriller
16. Saving Private Ryan (1998) - War

## Rate Limits

To prevent abuse, the API has the following limits:

- **General API calls:** 100 requests per minute
- **Login attempts:** 10 attempts per minute
- **Reset time:** Limits reset every minute

When you hit a limit, you'll receive an HTTP 429 error:
```json
{
  "error": "Too many requests",
  "message": "Too many requests from this IP, please try again later.",
  "retryAfter": "1 minute"
}
```

Rate limit information is included in response headers:
```
RateLimit-Limit: 100
RateLimit-Remaining: 95
RateLimit-Reset: 45
```

## Error Responses

The API returns consistent error responses:

**400 Bad Request:**
```json
{
  "error": "Invalid movie ID",
  "message": "Movie ID must be a number"
}
```

**401 Unauthorized:**
```json
{
  "error": "Authentication required",
  "message": "Please include Authorization header with Bearer token"
}
```

**404 Not Found:**
```json
{
  "error": "Movie not found",
  "message": "No movie found with ID 999"
}
```

**429 Too Many Requests:**
```json
{
  "error": "Too many requests",
  "message": "Too many requests from this IP, please try again later.",
  "retryAfter": "1 minute"
}
```
