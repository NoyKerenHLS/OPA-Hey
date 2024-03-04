import { Router as expressRouter } from 'express';
import { Strategy as GoogleStrategy } from 'passport-google-oidc';
import passport from 'passport';
import { eq } from 'drizzle-orm';
import { db } from '../db';
import { users } from '../db/schema';

const router = expressRouter();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.VITE_API_URL}/auth/google/callback`,
    },
    async function verify(_issuer, profile, done) {
      const email: string = profile.emails[0].value;

      if (!email) {
        console.error('no email provided from google auth');

        return done('no email', null);
      }

      const isMoveoUser = email.includes('@moveo');

      if (!isMoveoUser) {
        console.error('non-moveo user tried to login');

        return done('not moveo user', null);
      }

      const [existingUser] = await db
        .select()
        .from(users)
        .where(eq(users.email, email));

      if (existingUser) {
        return done(null, existingUser);
      } else {
        const [newUser] = await db
          .insert(users)
          .values({ email, fullName: profile.displayName })
          .returning();

        return done(null, newUser);
      }
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

router.get('/logout', (req, res) => {
  req.logout();

  return res.redirect(process.env.VITE_CLIENT_URL);
});

router.get('/login/failed', (req, res) => {
  return res.status(401).send();
});

router.get(
  '/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: process.env.VITE_CLIENT_URL,
    failureRedirect: `${process.env.VITE_API_URL}/login/failed`,
  })
);

export default router;
