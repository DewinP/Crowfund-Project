import jwt from 'jsonwebtoken';

const private_key = process.env.JWT_PRIVATE_KEY!
const public_key = process.env.JWT_PUBLIC_KEY!
const privateKey = Buffer.from(
 private_key ,
  "base64"
).toString("ascii").replace(/\n\s+/g, "\n")
const publicKey = Buffer.from(
  public_key!,
  "base64"
).toString("ascii").replace(/\n\s+/g, "\n")


export function signJWT(object: Object, options?: jwt.SignOptions | undefined) {
    return jwt.sign(object, privateKey, {
      ...(options && options),
      algorithm: "RS256",
    });
  }

export function verifyJWT(token: string) {
    try {
      const decoded = jwt.verify(token, publicKey);
      return {
        valid: true,
        expired: false,
        decoded,
      };
    } catch (e: any) {
      return {
        valid: false,
        expired: e.message === "jwt expired",
        decoded: null,
      };
    }
  }