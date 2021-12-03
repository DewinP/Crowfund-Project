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
    publicKey: process.env.PUBLIC_JWT_KEY!.replace(/\n\s+/g, "\n"),
    privateKey: process.env.PRIVATE_JWT_KEY!.replace(/\n\s+/g, "\n")
}