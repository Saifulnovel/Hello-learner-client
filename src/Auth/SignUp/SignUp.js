import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle } from "react-icons/fa";

import { useContext } from 'react';
import { AuthContext } from '../../Context/auth-context';
import {  FacebookAuthProvider, getAuth, GoogleAuthProvider } from 'firebase/auth';
import app from '../../Config/firebase.config';
import { toast } from 'react-toastify';

const auth = getAuth(app)

const SignUp = () => {

const { providerLogin, fbLoginProvider, register, userProfileInfo } =
  useContext(AuthContext);
  
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

 const [error, setError] = useState({ email: "", password: "" });
    const [userInfo, SetUserInfo] = useState({ email: "", password: "" });
    
  const handleFacebookSignin = () => {
    fbLoginProvider(facebookProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  }  
  
  const handleGoogleSignin = () => {
      providerLogin(googleProvider)
        .then((result) => {
          const user = result.user;
          console.log(user);
        })
        .catch((error) => console.error(error));
    };
  
  
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const mail = userInfo.email;
      const pass = userInfo.password;
      const name = event.target.name.value;
      const photo = event.target.photo.value;
      
        // console.log(email, password)
        
      register( mail, pass)
        .then((result) => {
          const user = result.user;
          console.log(user);
          event.target.reset();
          handleProfilePhoto(name, photo);
          toast.success("Sign up Success");
        })
        .catch((error) => {
          console.error(error);
        });
  }
  const handleProfilePhoto = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    }
    userProfileInfo(profile)
      .then(() => { })
    .catch((e)=>console.log(e))
  }

  const handleEmail = (event) => {
      const email = event.target.value;
      console.log(email)

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError({
        ...error, email:  "please enter a valid mail"
      })
      SetUserInfo({
        ...userInfo, email:""
      })
    }
    else {
      setError({ ...error, email: "" })
      SetUserInfo({...userInfo, email: event.target.value})
    }
  }

    const handlePassword = (event) => {
        const password = event.target.value;

        if (password.length < 6) {
            setError({ ...error, password: "password must be at 6 character" });
            SetUserInfo({ ...userInfo, password: "" });
        }
        else {
            setError({ ...error, password: "" });
            SetUserInfo({ ...userInfo, password: event.target.value });
        }
    };
    
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className=" hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl text-center font-bold">Sign Up now!</h1>
              <p className="py-6">
                by signing up with email and password you can be a member of our
                journey . Thank you. Enjoy your Journey with us
              </p>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Full Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      name="name"
                    
                      className="input input-bordered"
                    />
                   
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Select Your photo"
                      name="photo"
                     
                      className="input input-bordered"
                    />
                    
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="email"
                      name="email"
                      onChange={handleEmail}
                      className="input input-bordered"
                    />
                    {error.email && (
                      <p className="text-red-500">{error.email}</p>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="password"
                      name="email"
                      onChange={handlePassword}
                      className="input input-bordered"
                    />
                    {error.password && (
                      <p className="text-red-500"> {error.password}</p>
                    )}
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                  </div>
                  <p>
                    Already have an account?{" "}
                    <Link className="text-orange-500" to="/login">
                      Login Here
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
          <h2 className="text-center font-bold text-2xl">OR</h2>
          <div className=" bg-base-100 p-8 shadow-gray-700 shadow-2xl hover:shadow-lg rounded-lg">
            <div className="mt-5">
              <button
                onClick={handleFacebookSignin}
                className="btn btn-outline btn-info mb-4 "
              >
                <FaFacebook className="mr-5 text-2xl" /> Sign in With Facebook
              </button>
            </div>

            <div>
              <button
                onClick={handleGoogleSignin}
                className="btn btn-outline btn-warning w-full"
              >
                <FaGoogle className="mr-5 text-2xl " /> Sign in With Google{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;