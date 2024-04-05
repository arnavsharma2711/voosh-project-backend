import dotenv from 'dotenv';
dotenv.config();

export const NOT_FOUND_MESSAGE = 'The requested resource cannot be found.';
export const GENERIC_ERROR_MESSAGE = 'Something went wrong, please try again later. If the problem persists, contact support.';
export const APPLICATION_ENVIRONMENT = process.env.NODE_ENV || 'development';
