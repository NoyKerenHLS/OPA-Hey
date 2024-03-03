import express from 'express';
import cors from 'cors';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import passport from 'passport';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import userRoutes from './routes/users';
import orderRoutes from './routes/order';
import { isAuthenticated } from './middleware/isAuthenticated';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
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

const port = process.env.PORT || 3333;

const server = app.listen(port, () => {
  console.log(`⚡️ Server is listening on ${process.env.VITE_API_URL}`);
});

server.on('error', console.error);