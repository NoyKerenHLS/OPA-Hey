import express from 'express';
import cors from 'cors';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import passport from 'passport';
import connectPgSimple from 'connect-pg-simple';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import userRoutes from './routes/users';
import orderRoutes from './routes/order';
import { isAuthenticated } from './middleware/isAuthenticated';
import { dbPool } from './db';

dotenv.config();

const app = express();

const pgSession = connectPgSimple(session);

app.use(bodyParser.json());
app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1); // trust first proxy
}

app.use(
  session({
    store: new pgSession({ pool: dbPool, createTableIfMissing: true }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    ...(process.env.NODE_ENV === 'production' && {
      cookie: {
        secure: true,
        sameSite: 'none',
        maxAge: 365 * 24 * 60 * 60 * 1000,
      },
    }),
  })
);

app.use(
  cors({
    origin: process.env.VITE_CLIENT_URL,
    methods: 'GET, POST, PUT, DELETE',
    credentials: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/user', isAuthenticated, userRoutes);
app.use('/order', isAuthenticated, orderRoutes);

app.get('/health', (req, res) => res.status(200).send({ status: 'OK' }));

const port = Number(process.env.PORT) || 3333;

const server = app.listen(port, '0.0.0.0', () => {
  console.log('⚡️ server is up');
});

server.on('error', console.error);
