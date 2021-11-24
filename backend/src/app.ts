import express from 'express';
import config from 'config'
import connect from './utils/connect';
import logger from './utils/logger'
import routes from './routes';
import deserializeUser from './middleware/deserializeUser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

const port = config.get<number>('port')

const app = express();
app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true
    }
));
app.use(morgan('dev'))
app.use(cookieParser())
app.use(express.json());

app.use(deserializeUser);


app.listen(port, async ()=>{
    await connect();
    logger.info(`Server is listening on port http://localhost:${port}`)
    routes(app)
});