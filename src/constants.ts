import dotenv from 'dotenv';
dotenv.config();

// Messages constants
export const NOT_FOUND_MESSAGE = 'The requested resource cannot be found.';
export const GENERIC_ERROR_MESSAGE = 'Something went wrong, please try again later. If the problem persists, contact support.';

// Application settings
export const APPLICATION_ENVIRONMENT = process.env.NODE_ENV || 'development';
export const PORT = process.env.PORT || 5000;

// Database Connection
export const DATABASE_URL = process.env.DATABASE_URL || '';

// System settings
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'access_token_secret_key';
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'refresh_token_secret_key';
export const COOKIE_SETTINGS = { httpOnly: true, secure: true };

// Authentication providers
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
export const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID || '';
export const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET || '';
