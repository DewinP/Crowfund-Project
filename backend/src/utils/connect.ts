import mongoose from 'mongoose';
import logger from './logger';
import config from 'config';

const connect = async () => {
    const dbUri = config.get<string>('dbUri');
    try {
        await mongoose.connect(dbUri);
        logger.info(`Connected to database`);
    } catch (err) {
        logger.error(err);
        process.exit(1);
    }
}

export default connect;