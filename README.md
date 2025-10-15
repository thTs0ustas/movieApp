# Movie Discovery App

## Overview
We need to build a movie discovery web application that allows users to browse movies and view details for each movie. Users can also log in and add movies as favorites.

## Movie API
For the needs of this app, we have already deployed a basic API that you can use.
You can find details on how to use the API in the [API docs](API_DOCS.md). For authentication, you can use the credentials provided to you by email.

## Requirements

### Core Features

#### 1. Movie Browsing
* A movies list page that displays all 16 movies as cards
* The list page must have pagination (8 movies per page)
* Each card should have movie poster, title, year, director, genre, rating, and description
* For authenticated users, an "Add to favorites" button should also be included
* Each card should link to a dedicated movie page with details
* Users should be able to easily navigate back to the list page

#### 2. Authentication System
* A login page with a username/password form
* When users are logged in, their username should appear in the application header
* Users should be able to log out

#### 3. Favorites Management
* Users are able to add/remove a movie to/from their favorites from the list page and the movie detail page
* Favorited movies should have a visual distinction from non-favorited movies

### Technical Requirements
You can implement the above using any modern JavaScript framework, styling solution, and third-party library you choose to use. However, there are some technical requirements that should be addressed:

* Basic browsing functionality should work with JavaScript disabled in the browser
* Login state should persist across browser sessions
* Since the API is rate limited, we need to gracefully handle errors

### Bonus Features
* The API is a little slow as each request takes at least 500ms to get a response. Can you think of ways to make the perceived user experience faster?
* Movie detail pages should be optimized for search engines and for sharing. It would be nice to have proper meta tags and SEO-friendly URLs.

## Submission Guidelines
Once your implementation is ready, please share it with us as a GitHub public repo link. Be sure to include a README.md with instructions on how to run the app, a brief summary of your approach, plus any notes or known limitations.

Good luck! We're excited to see your implementation.
