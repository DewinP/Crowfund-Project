import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import deserializeUser from './middleware/deserializeUser';
import routes from './routes';
import connect from './utils/connect';
import logger from './utils/logger';
import config from 'config'

const port = config.get<number>('port');

const app = express();
app.set("trust proxy", 1);
app.use(cors(
    {
        origin: config.get<string>('origin'),
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