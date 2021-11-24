export default interface AuthUser{
    _id: string,
  email: string,
  firstName: string,
  lastName: string,
  createdAt: string,
  updatedAt: string,
  __v: number,
  session: string,
  iat: number,
  exp: number
}
