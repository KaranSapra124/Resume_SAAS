import Jwt from "jsonwebtoken";

const DecodeJwt = (token: string) => {
  return Jwt.decode(token);
};
const generateToken = (data: string) => {
  const secretKey: string = process.env.SECRET_KEY as string;
  return Jwt.sign(data, secretKey);
};

export { DecodeJwt, generateToken };
