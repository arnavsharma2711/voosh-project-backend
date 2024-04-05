# Enhanced Authentication API

This is a project submission for Voosh. It's an API built with Node.js and Express, providing enhanced authentication features.

## Project Structure

The project is structured as follows:

- [`src/`](src/): Contains the source code of the application.
    - `app.ts`: The main application file.
    - `controllers/`: Contains the controllers for handling API requests.
    - `lib/`: Contains utility functions and middleware.
    - `models/`: Contains the data models.
    - `routes/`: Contains the route definitions.
- [`test/`](test/): Contains the test files.
- [`migrations/`](migrations/): Contains database migration files.
- [`public/`](public/): Contains static files served by the application.
- [`api/`](api/): Contains the API index file.
- [`uploads/`](uploads/): Contains uploaded files.
## Setup

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Copy [`.env.sample`](.env.sample) to [`.env`](.env) and fill in your environment variables.
4. Start the database with `npm run database`.
5. Build the project with `npm run build`.
6. Start the server with `npm run start`.

## Linting

Lint the project with `npm run lint`.

## Database Migrations

Generate a new migration with `npm run migration:generate` and push migrations with `npm run migration:push`.
