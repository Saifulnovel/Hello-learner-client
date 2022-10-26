import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SignUp = () => {

 const [error, setError] = useState({ email: "", password: "" });
    const [userInfo, SetUserInfo] = useState({ email: "", password: "" });
    
  
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(userInfo)
        // logIn(auth, userInfo.email, userInfo.password)
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
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              by signing up with email and password you can be a member of our
              journey . Thank you. Enjoy your Journey with us
            </p>
          </div>
          <form onSubmit={handleFormSubmit} action="">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    onChange={handleEmail}
                    className="input input-bordered"
                  />
                  {error.email && <p className="text-red-500">{error.email}</p>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
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

               
                <button className="btn btn-outline btn-info"><FaFacebook className='mr-5 text-2xl'/>  Sign in With Facebook</button>
                <button className="btn btn-outline btn-success"><FaGoogle className='mr-5 text-2xl '/>  Sign in With Google </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default SignUp;