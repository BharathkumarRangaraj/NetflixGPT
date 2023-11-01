import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addusers, removeusers } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { netflx_logo } from "../utils/const";
import { gptsearchview } from "../utils/Gptslice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  function handlesgnout() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = auth.currentUser;
        dispatch(
          addusers({
            uid: uid,
            displayname: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        //userlogedn -based on auth change
        navigate("/browserpage");

        // ...
      } else {
        dispatch(removeusers());
        //userlogged out
        navigate("/");
      }
    });
    //unsubscribing while components unmounts
    return () => unsubscribe();
  }, []);
  function togglegptchangeview() {
    dispatch(gptsearchview());
  }

  return (
    <div className=" w-screen absolute  bg-gradient-to-b from-black z-10 flex justify-between">
      <div className="w-44 ">
        <img
          className="py-2 mx-10"
          alt="logo-of-netflx"
          src={netflx_logo}
        ></img>
      </div>
      {user && (
        <div className="flex p-2">
          <div>
            <button
              onClick={() => togglegptchangeview()}
              className="mb-2 px-4 py-2 text-white rounded-lg bg-purple-800 font-bold "
            >
              GPT Search
            </button>
          </div>
          <div className="flex pl-2 ">
            <img
              className="h-10 w-8 m-2 pb-4 "
              alt="profile"
              src={user?.photoURL}
            />
            <h5
              onClick={handlesgnout}
              className="text-white  cursor-pointer pr-10 mt-2"
            >
              signout
            </h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
