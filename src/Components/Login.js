import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [issignin,setissignin]=useState(false)

  const Signuphandle=()=>{
    setissignin(!issignin)

  }
  return (
    <div>
      <div className='absolute'>
        
      <Header/>
      </div>

      <div className='absolute placeholder-opacity-75  text-white'>
        <img alt='logn-bg-mg' src='https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_medium.jpg'/>
      </div>
      <form className='absolute w-3/12 bg-opacity-90 bg-black p-8 m-8 my-20 mx-auto right-0 left-0 text-white bg-blend-lighten'>
      <h1 className='text-white font-bold text-2xl py-4 px-2'>{issignin?'Signup':'Login'}</h1>
      {issignin && <input type='text' placeholder='Name' className='p-2 m-2 w-11/12 bg-gray-700 rounded-md'/>}
        <input type='text' placeholder='Email' className='p-2 m-2 w-11/12 bg-gray-700 rounded-md'/>
        <input type='password' placeholder='password' className='p-2 m-2 w-11/12 rounded-md  bg-gray-700'/>
        <br></br>
        <button className='bg-red-700 p-2 m-2 w-11/12 rounded-md'>Submit</button>
        <p onClick={()=>Signuphandle()} className='p-2 underline cursor-pointer'>{issignin?'Aready registered? Login' :'New to Netflx ? SignUp' }</p>
      </form>

    </div>
  )
}

export default Login