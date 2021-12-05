import dotenv from 'dotenv';

dotenv.config();


export default {
    port: 1337,
    dbUri: process.env.DB_URI,
    saltWorkFactor: 10,
    accessTokenTTL: "2h",
    refreshTokenTTL: "1y",
    origin:"http://localhost:3000",
    cookieDomain: 'localhost',
    stripeKey: process.env.STRIPE_SECRET_KEY,
    publicKey: process.env.JWT_PUBLIC_KEY,
    privateKey: process.env.JWT_PRIVATE_KEY,
}