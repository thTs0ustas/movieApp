# Movie Discovery App

## Overview
We need to build a movie discovery web application that allows users to browse movies 
and view details for each movie. Users can also log in and add movies as favorites.


## Features
1. **Movie Listing**: Display a list of movies with their titles and posters.
2. **Movie Details**: Show detailed information about a selected movie, including title,
   description, release date, and rating.
3. **User Authentication**: Allow users to sign up, log in, and log out.
4. **Favorite Movies**: Enable logged-in users to add or remove movies from their list
   of favorites.

## Technologies
- Frontend: React.js
- Framework: Next.js
- State Management: ReduxToolkit
- Tailwind CSS for styling with Shadcn UI components
- Zod for schema validation
- TypeScript for type safety

## App Structure
- `pages/`: Contains the main pages of the application
- `components/`: Reusable UI components
- `store/`: Redux store
- `styles/`: Tailwind CSS configuration and custom styles
- `utils/`: Utility functions and helpers
- `types/`: TypeScript type definitions
- `models/`: Slice models for Redux and service interactions
- `hooks/`: Custom React hooks

## Approach

### Layered Architecture
The application is structured using a layered architecture to separate concerns and improve maintainability:
1. **Presentation Layer**: This layer includes React components and pages that handle the UI and user interactions.
2. **Business Logic Layer**: This layer contains Redux slices and services that manage application state and business logic.
3. **Data Access Layer**: This layer is responsible for interacting with external APIs and data sources.

### Next.js for SSR and CSR
- The application leverages Next.js to provide both server-side rendering (SSR) and static site generation (SSG) for improved performance and SEO.
- Dynamic routing is used to handle movie detail pages.
- API routes in Next.js are utilized for handling authentication and other server-side logic as an extra layer of security.

### State Management with Redux Toolkit and RTK Query
- Use RTK Query for efficient data fetching and caching.
  - All API interactions are handled through RTK Query endpoints.
  - This simplifies data fetching logic and reduces boilerplate code.
  - RTK Query handles state management for server data, including loading and error states.
  - A global mechanism for error handling is implemented using RTK Query's and middleware capabilities.
- Create Redux slices for managing local state.
  - A redux slice is created for managing user authentication state.
  - I made redux accessible during SSR and CSR using `next-redux-wrapper`.

### Ui Styling with Tailwind CSS and Shadcn UI
- Tailwind CSS is used for utility-first styling, allowing for rapid UI development.
- Shadcn UI components are integrated for pre-built, accessible UI components that can be easily customized.
- A consistent design system is maintained using Tailwind's configuration.

### Rendering
- The home page displays a list of movies fetched from an external API using RTK Query.
- The data are fetched on the server side for the initial load to improve performance and SEO.
- Although the home page is public, I added SSR here to also authenticate the user if a valid token is present in the cookies.
- The movie detail page is statically generated at build time for better performance and SEO.
- The movie detail page uses dynamic routing to display information based on the movie ID.

### Authentication
- The api provided for authentication returns a mocked JWT token upon successful login.
- I assumed for this implementation that the token contains the username in its claims.
- The login passes through an API route in Next.js to securely handle authentication.
- The token is stored in an HTTP-only cookie to enhance security against XSS attacks.
- Every API request that requires authentication includes the token in the headers.
- I didn't implement an extra validation for the token assuming the end API handles that, so the token is considered valid if present.
- The home page checks for the presence of a valid token to determine if the user is logged in.
- This updates the UI accordingly, showing user-specific features like favorite movies (fetching data for the user).
- The logout functionality clears the token from the cookies and updates the application state (fetching new data).

### SEO Optimization and Accessibility
- Each page includes meta tags for titles and descriptions to improve search engine visibility.
- Next.js's built-in SEO features are utilized to enhance the application's search engine ranking.
- Add ARIA attributes and ensure keyboard navigability to enhance accessibility.

### Type Safety with TypeScript and Zod
- TypeScript is used throughout the application to ensure type safety and reduce runtime errors.
- Zod is employed for schema validation, for the form inputs.

### Mock Data
- I created mocked data and intercepted API calls using MSW (Mock Service Worker) for development and testing purposes.
- This was only for testing purposes, during the development phase.
- Tests are not implemented in this version.
- In case of a real-world application, I would use a honeycomb structure for the tests, including unit tests, integration tests for API interactions and UI flows.