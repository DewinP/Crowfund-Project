import mongoose from 'mongoose';
import logger from './logger';

const connect = async () => {
    const dbUri = process.env.DB_URI!;
    try {
        await mongoose.connect(dbUri);
        logger.info(`Connected to database`);
    } catch (err) {
        logger.error(err);
        process.exit(1);
    }
}

export default connect;