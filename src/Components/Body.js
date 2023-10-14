import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Browserpage from './Browserpage';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addusers } from '../utils/userSlice';

const Body = () => {
    const dispatch=useDispatch();
    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browserpage',
            element:<Browserpage/>
        }
    ])
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,displayName,email,photoURL} = auth.currentUser;
              dispatch(addusers({uid:uid,displayname:displayName,email:email,photoURL:photoURL}))
              console.log(uid,displayName,email)

              // ...
            } else {
              // User is signed out
              // ...
            }
          });

    },[])
  return (
    <div>
        <RouterProvider router={appRouter}/>


    </div>
  )
}

export default Body;