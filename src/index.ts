import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser';
import { todoRouter } from './routes/todo';

const MONGODB_URI = '';

const app = express();

app.use(json());
app.use(todoRouter);


mongoose
    .connect(
        MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(
        result => {
            app.listen(3000);
            console.log('connected');
        }
    )
    .catch(
        error => {
            console.log(error);
        }
    )