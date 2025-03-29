import { Request, Response } from "express";
import axios from "axios";
import { DecodeJwt, generateToken } from "../Utils/JwtFn";
import User from "../Models/User";
interface RequestInterface extends Request {
  body: {
    code: string;
  };
}
interface responseData {
  access_token: string;
  id_token: string;
}

interface GoogleProfile {
  name: string;
  email: string;
  picture: string;
}

const authGoogleLogin = async (
  req: RequestInterface,
  res: Response
): Promise<void> => {
  try {
    const { code } = req.body;
    const client_id = process.env.CLIENT_ID;
    const client_secret = process.env.CLIENT_SECRET;
    const redirect_url = process.env.REDIRECT_URL;
    const { data } = await axios.post<responseData>(
      "https://oauth2.googleapis.com/token",
      {
        code,
        client_id,
        client_secret,
        redirect_uri: redirect_url,
        grant_type: "authorization_code",
      }
    );
    const profile = DecodeJwt(data?.id_token);
    const { name, email, picture } = profile as GoogleProfile;
    const newUser = await User.create({ name, email, picture });
    const token = generateToken(newUser._id.toString());
    res.cookie("userToken", token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 din baad expire,
      httpOnly: true,
      secure:true
    });
    res.status(201).send({
      message: "Logged In Successfully!",
      userData: { access_token: data.access_token, profile: newUser },
    });
  } catch (err) {
    console.log(err);
    res.status(401).send({ message: "Error while logging in!" });
  }
};

export { authGoogleLogin };
