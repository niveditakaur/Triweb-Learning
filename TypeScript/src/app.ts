import express from 'express';
import userRoute from './routes/user';
import { Request,Response } from 'express';

const app = express();

app.use('/user', userRoute);

app.listen(process.env.PORT);