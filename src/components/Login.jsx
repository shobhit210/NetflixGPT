import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    // Logic to handle sign-in or sign-up
    console.log(name.current.value);
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(
      name.current.value,
      email.current.value,
      password.current.value
    );
    console.log("MESSAGE", message);

    if (message) {
      setErrorMessage(message);
    } else {
      setErrorMessage("");
      // Proceed with sign-in or sign-up
    }
  };

  // Logic to toggle sign-in form visibility
  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="Login Background"
          className="w-full h-[100vh] object-cover"
        />
      </div>
      <form className="p-12 bg-black bg-opacity-50 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col opacity-80 rounded-md">
        <h1 className="text-3xl font-bold mb-6 mx-2">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!signInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 border border-gray-500 w-full rounded-sm"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="p-4 m-2 border border-gray-500 w-full rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 m-2 border border-gray-500 w-full rounded-sm"
        />
        {errorMessage && (
          <p className="text-red-500 m-2 font-bold">{errorMessage}</p>
        )}
        <button
          type="submit"
          className="p-3 mx-2 my-4 bg-red-500 hover:bg-red-700 cursor-pointer w-full rounded-sm"
          onClick={handleButtonClick}
        >
          {signInForm ? "Sign In" : "Sign Up"}
        </button>
        {signInForm ? (
          <p className="text-sm text-gray-400 mx-2">
            New to Netflix?{" "}
            <span
              className="text-white cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign up now
            </span>
          </p>
        ) : (
          <p className="text-sm text-gray-400 mx-2">
            Already have an account?{" "}
            <span
              className="text-white cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign in
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
