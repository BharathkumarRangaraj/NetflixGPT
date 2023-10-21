import React, { useRef, useState } from "react";
import Header from "./Header";
import { Loginvalidation } from "../utils/Loginvalidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addusers } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [issignin, setissignin] = useState(false);
  const [errorstore, seterrorstore] = useState(null);
  const Email = useRef(null);
  const Name = useRef(null);
  const password = useRef(null);

  const Signuphandle = () => {
    setissignin(!issignin);
  };

  const handlebuttonchange = () => {
    const message = Loginvalidation(
      Email.current.value,
      password.current.value
    );
    seterrorstore(message);
    if (message) return;
    if (issignin) {
      //signup
      createUserWithEmailAndPassword(
        auth,
        Email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: Name.current.value,
            photoURL:
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          })
            .then(() => {
              // Profile updated!
              const { uid, displayName, email, photoURL } = user;
              dispatch(
                addusers({
                  uid: uid,
                  displayname: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              seterrorstore(error.message);
            });
          // Signed up

          navigate("/browserpage");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorstore(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      //signin

      signInWithEmailAndPassword(
        auth,
        Email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorstore(errorCode + "" + errorMessage);
        });
    }
  };

  return (
    <div>
      <div className="absolute">
        <Header />
      </div>

      <div className="absolute placeholder-opacity-75  text-white">
        <img
          alt="logn-bg-mg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 bg-opacity-90 bg-black p-8 m-8 my-20 mx-auto right-0 left-0 text-white bg-blend-lighten"
      >
        <h1 className="text-white font-bold text-2xl py-4 px-2">
          {issignin ? "Sign Up" : "Log In"}
        </h1>
        {issignin && (
          <input
            type="text"
            ref={Name}
            placeholder="Name"
            className="p-2 m-2 w-11/12 bg-gray-700 rounded-md"
          />
        )}
        <input
          type="text"
          ref={Email}
          placeholder="Email"
          className="p-2 m-2 w-11/12 bg-gray-700 rounded-md"
        />
        <input
          type="password"
          ref={password}
          placeholder="password"
          className="p-2 m-2 w-11/12 rounded-md  bg-gray-700"
        />
        <br></br>
        <p className="text-red-500 font-bold">{errorstore}</p>
        <button
          onClick={() => handlebuttonchange()}
          className="bg-red-700 p-2 m-2 w-11/12 rounded-md"
        >
          {issignin ? "Sign Up" : "Log In"}
        </button>
        <p
          onClick={() => Signuphandle()}
          className="p-2 underline cursor-pointer"
        >
          {issignin ? "Aready registered? Login" : "New to Netflx ? SignUp"}
        </p>
      </form>
    </div>
  );
};

export default Login;
