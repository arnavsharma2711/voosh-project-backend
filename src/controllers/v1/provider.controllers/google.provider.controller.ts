import { controllerWrapper } from '../../../lib/controllerWrapper';
import { Request } from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import { generateUserToken } from '../../../models/user.model';
import { userInfoSchema } from '../../../lib/zod/common.schema';
import { COOKIE_SETTINGS, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '../../../constants';
import build_response from '../../../lib/response/MessageResponse';
import { findUserProvider } from '../../../services/user.service';

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/v1/auth/login/via/google/callback',
      passReqToCallback: true,
    },
    async (_req: Request, _accessToken: string, _refreshToken: string, profile: any, done: any) => {
      try {
        const user = await findUserProvider(profile);
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    },
  ),
);

//GET /api/v1/auth/login/via/google
export const loginUserViaGoogle = controllerWrapper(async (req, res, next) => {
  passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
});

// GET /api/v1/auth/login/via/google/callback
export const googleAuthCallback = controllerWrapper(async (req, res, next) => {
  passport.authenticate('google', { failureRedirect: '/api/v1/auth/login-failure' }, async (err: any, user: any) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect('/api/v1/auth/login-failure');
    }
    const { access_token, refresh_token } = await generateUserToken(user);
    const userInfo = userInfoSchema.parse(user);
    res
      .status(200)
      .cookie('accessToken', access_token, COOKIE_SETTINGS)
      .cookie('refreshToken', refresh_token, COOKIE_SETTINGS)
      .json(build_response(true, 'User logged in successfully!', null, userInfo));
  })(req, res, next);
});
