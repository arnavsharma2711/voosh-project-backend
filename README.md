# Enhanced Authentication API

This is a project submission for Voosh. It's an API built with Node.js and Express, providing enhanced authentication features.

## API Contract (Postman)

[API Contract](https://api.postman.com/collections/18687727-16b0c636-121b-4cdf-a86e-4ec38e61d24f?access_key=PMAT-01HTRZ91GBM3SYHHH0PETWNDXH)
The project employs JWT authentication to authenticate users. This authentication process is facilitated through middleware, which is invoked for all APIs within the user namespace. Upon user login and registration, JWT tokens are generated and stored in the user's cookies for verification purposes. 
JWT token is also user for admin authentication.

Admin Crediacials
```
{
  "identifier": "arnavsharma27111@gmail.com",
  "password": "Arnav@27"
}
```

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
