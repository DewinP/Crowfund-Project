import dotenv from 'dotenv';

dotenv.config();


export default {
    port: process.env.PORT,
    dbUri: process.env.DB_URI,
    saltRounds: 10,
    accessTokenTTL: "2h",
    refreshTokenTTL: "1y",
    origin: process.env.ORIGIN_HOST,
    stripeKey: process.env.STRIPE_SECRET_KEY,
    publicKey: process.env.JWT_PUBLIC_KEY,
    privateKey: process.env.JWT_PRIVATE_KEY
}