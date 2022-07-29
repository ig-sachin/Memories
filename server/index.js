import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// routes import
import postRoutes from './routes/posts.js';

/* we have to add type in package.json
so that we can use
import name from moduleName
like this in index.js */

/* also remove the test in package.json
and add "start": "nodemon index.js" */

const app = express();
dotenv.config();
// using express middleware
// this says thet every routes that is in posts.js routes will start from /posts/

// initialing bodyParser, urlEncoded and cors
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/posts', postRoutes);

const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTIONURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
    .catch((e) => console.log(e.message));




