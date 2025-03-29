import  { useState } from "react";
import Container from "../Global/Container";
// import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { FcGoogle } from "react-icons/fc";
import Divider from "../Global/Divider";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex border border-gray-200 rounded justify-between gap-8"
      >
        <FormComponent />
        <img
          className="w-1/2 rounded-r"
          src="https://images.pexels.com/photos/5439148/pexels-photo-5439148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Login"
        />
      </motion.div>
    </Container>
  );
};

const FormComponent = () => {
  interface user {
    email: string;
  }
  const [formData, setFormData] = useState<user | null>(null);
  const [openGoogle, setOpenGoogle] = useState<Boolean>(false);

  return (
    <>
      <motion.div className="w-1/2 justify-center flex p-4 flex-col gap-1.5 text-md">
        <h1 className="text-xl w-fit text-white rounded px-1  font-extrabold bg-primary-color">
          h
        </h1>
        <p className="text-lg font-semibold">Welcome Back</p>
        <p className="text-gray-500 text-sm">
          New To{" "}
          <span className="font-semibold text-gray-800">HireMeNow ?</span>
          <span className="text-primary-color mx-1 text-sm cursor-pointer hover:underline transition-all duration-1000 ">
            Sign Up
          </span>
        </p>
        <CustomLoginButton />
        <div className="flex items-center gap-2">
          <Divider className="h-0.5 rounded-full bg-gray-200 w-full" />
          <p className="text-center text-sm text-gray-800">Or</p>
          <Divider className="h-0.5 rounded-full bg-gray-200 w-full" />
        </div>
        <div className="py-1 gap-2 flex flex-col">
          <label className="text-sm text-gray-800 font-semibold">Email</label>
          <input
            className="border border-gray-300 p-1 rounded text-sm"
            type="email"
            name="email"
            placeholder="Enter Your Email..."
            id=""
          />
          <button className="bg-primary-color text-accent-color py-1 text-sm rounded hover:bg-blue-400 transition-all cursor-pointer">
            Login
          </button>
        </div>
      </motion.div>
    </>
  );
};
const CustomLoginButton = () => {
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/google`,
        { code: tokenResponse?.code },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert(data?.message);
    },
    flow: "auth-code",
  });
  return (
    <>
      <button
        onClick={() => googleLogin()}
        className="flex w-full border border-gray-300 py-1 text-sm rounded justify-center items-center gap-2"
      >
        <FcGoogle /> Sign With Google
      </button>
    </>
  );
};

export default Login;
