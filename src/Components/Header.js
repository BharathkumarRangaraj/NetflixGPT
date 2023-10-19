import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addusers, removeusers } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  function handlesgnout() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
  }, []);

  return (
    <div className=" w-screen absolute  bg-gradient-to-b from-black z-10 flex justify-between">
      <div className="w-44 ">
        <img
          className="py-2 mx-10"
          alt="logo-of-netflx"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        ></img>
      </div>
      {user && (
        <div className="flex p-2">
          <img className="h-8 w-8 " alt="profile" src={user?.photoURL} />
          <h5 onClick={handlesgnout} className="text-white px-2 cursor-pointer">
            signout
          </h5>
        </div>
      )}
    </div>
  );
};

export default Header;
