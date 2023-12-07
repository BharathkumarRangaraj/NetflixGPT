import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addusers, removeusers } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { netflx_logo, supported_languages } from "../utils/const";
import { gptsearchview } from "../utils/Gptslice";
import { changelanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showgptsearch = useSelector((store) => store.gpt.showgptview);

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
  const handlelanguagechange = (e) => {
    dispatch(changelanguage(e.target.value));
  };

  return (
    <div className=" w-screen absolute  bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-center md:justify-between ">
      <div className="w-44 mx-auto md:mx-0 ">
        <img
          className="py-2 md:mx-10"
          alt="logo-of-netflx"
          src={netflx_logo}
        ></img>
      </div>
      {user && (
        <div className="flex p-2 mb-10 md:mb-4 text-xs md:text-[16px] justify-center  ">
          <div>
            {showgptsearch && (
              <select className="m-2" onChange={handlelanguagechange}>
                {supported_languages.map((lang) => (
                  <option id={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              onClick={() => togglegptchangeview()}
              className="mb-2 px-4 py-2 text-white rounded-lg bg-purple-800 font-bold "
            >
              {showgptsearch ? "homepage" : " GPT Search"}
            </button>
          </div>
          <div className="flex md:pl-2 pl-[50%]">
            <img
              className="h-10 w-8 m-2 pb-4 "
              alt="profile"
              src={user?.photoURL}
            />
            <h5
              onClick={handlesgnout}
              className="text-white  cursor-pointer md:pr-10 mt-2 "
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
