import React, { useRef, useState } from "react";
import { checkEmail } from "../utils/ValidateEmail";
import { checkPass } from "../utils/ValidatePass";
import { backgroundImageUrl } from "../utils/constants.js";
import Header from "./Header";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [emailMessage, setEmailMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [passMessage, setPassMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const handleClick = () => {
    const emailMessage = checkEmail(email.current.value);
    const passwordMessage = checkPass(password.current.value);
    setEmailMessage(emailMessage);
    setPassMessage(passwordMessage);
  };

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div
      className="bg-cover  bg-center min-h-screen overflow-x-hidden"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      <div className="relative min-h-screen ">
        <div className="relative mt-40 w-full">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-black bg-opacity-50 p-8 mb-10 sm:p-12 lg:p-20 max-w-sm mx-auto flex flex-col"
          >
            <h1 className="text-white text-3xl font-bold mb-6 ">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignIn && (
              <input
                type="text"
                placeholder="Full Name"
                className="border border-white/75 bg-transparent  rounded-sm text-white p-3 mb-4 "
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email address"
              className="border border-white/75 bg-transparent  rounded-sm text-white p-3  "
            />
            <p className="text-red-500 text-md mb-4">{emailMessage}</p>
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="border border-white/75 bg-transparent text-white p-3 "
            />
            <p className="text-red-500 text-md mb-3">{passMessage}</p>
            <p className="text-red-500 text-md mt-2 mb-3">{errorMessage}</p>
            <button
              onClick={handleClick}
              className="bg-red-700 hover:bg-red-800 text-white p-3 rounded-md font-bold"
              type="submit"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <p
              className="text-white hover:text-gray-400 text-md mt-4 cursor-pointer"
              onClick={handleSignIn}
            >
              {isSignIn
                ? "New? Sign Up Now!"
                : "Already Registered ? Sign In Now!"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
