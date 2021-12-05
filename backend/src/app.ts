import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import deserializeUser from './middleware/deserializeUser';
import routes from './routes';
import connect from './utils/connect';
import logger from './utils/logger';

const port = process.env.PORT;

const app = express();
app.use(cors(
    {
        origin: process.env.ORIGIN_HOST,
        credentials: true,
    }
));
app.use(morgan('dev'))
app.use(cookieParser())
app.use(express.json());

app.use(deserializeUser);


app.listen(port, async ()=>{
    await connect();
    logger.info(`Server is listening on port http://localhost:${port}`)
    routes(app);
});