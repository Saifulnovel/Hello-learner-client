import { getAuth } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import app from '../../Config/firebase.config';
import { AuthContext } from '../../Context/auth-context';

const auth = getAuth(app)


const Login = () => {
  const {logIn} = useContext(AuthContext)
  const [error, setError] = useState({ email: "", password: "" });
  const [userInfo, SetUserInfo] = useState({ email: "", password: "" });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(userInfo);
    logIn(auth, userInfo.email, userInfo.password)
      // signInWithEmailAndPassword(auth, userInfo.password, userInfo.email)
      .then((result) => {
        toast.success("Login Success");
        // navigate(location?.state?.from?.pathname);
      })
      .catch((error) => {});
  };
  const handleEmailChange = (event) => {
    const email = event.target.value;

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError({
        ...error,
        email: "please enter a valid mail",
      });
      SetUserInfo({
        ...userInfo,
        email: "",
      });
    } else {
      setError({ ...error, email: "" });
      SetUserInfo({ ...userInfo, email: event.target.value });
    }
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;

    if (password.length < 6) {
      setError({ ...error, password: "password must be at 6 character" });
      SetUserInfo({ ...userInfo, password: "" });
    } else {
      setError({ ...error, password: "" });
      SetUserInfo({ ...userInfo, password: event.target.value });
    }
  };



    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              By Login You can access our courses. Thank you. Enjoy your Journey
              with us
            </p>
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="email"
                    name="email"
                    onChange={handleEmailChange}
                    className="input input-bordered"
                  />
                  {error.email && <p className="text-red-500">{error.email}</p>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="password"
                    name="password"
                    onChange={handlePasswordChange}
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
                  <button className="btn btn-primary">Login</button>
                </div>
                <p>
                  Do not have an account?{" "}
                  <Link className="text-orange-500" to="/register">
                    Sign Up Here
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Login;