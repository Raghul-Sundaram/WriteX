import React, { useState, useEffect } from 'react'
import Button from './Button'
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';
import UserDetails from './UserDetails';

//319477554787-hij4rl88q46gt4tuj3umbcmf5g1veqoo.apps.googleusercontent.com
//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

const SignIn = () => {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const handleClick = (event) => {
    event.preventDefault();
    setUsername(document.querySelector('#username').value)
    setPassword(document.querySelector('#password').value)
    validateUser();
  }
  const validateUser = () => {
    (username === "raghul550" && password === "123456") ?
      console.log("login successflly") :
      console.log("incorredct username")
  }

  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  
  useEffect(
    () => {
      if (user) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          })
          .then((res) => {
            setProfile(res.data);
            console.log(res.data);
          })
          .catch((err) => console.log(err));
      }
    },
    [user]
  );

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };


  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-10 items-center justify-center lg:mt-[10%] w-[90%] sm:mt-[20%]'>
      <form id='form' className='flex flex-col gap-5 items-center justify-center'>
        <input id='user_name' className='w-[500px] h-[50px] rounded-lg text-black pl-5 ' type='text' placeholder='username' name="username" />
        <input id="pass_word" className='w-[500px] h-[50px] rounded-lg text-black pl-5' type='password' placeholder='password' name="password" />
        <Button text="SignIn" onclick={(event) => (handleClick)} /> 
        <div className='flex flex-col items-center justify-center gap-6'>
          <h1>or</h1>
          
          {profile ? (
            <div>
              <UserDetails profile={profile} logOut={logOut}/>
            </div>
        ) : (
          <GoogleLogin onSuccess={login}  onError={login}/>
        )}
        </div>

      </form>
      <p>Don't have an Account?</p>
      <Button text="SignUp" />
    </div>
  )
}

export default SignIn