import React from "react";
import './SignIn.css'
import glogo from '../Assets/Google__G__Logo.svg.png'


const SignIn = () => {
  return (
    <>
      <div className="col-md-6 px-md-5 offset-md-6 my-md-5 py-md-5 my-5 signin text-center">
        <h3 className="text-white"> Sign In </h3>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button className="mb-2 light_Btn"> Login </button>
        <p className="text-white">OR</p>
        <button className="mb-2 light_Btn"> Sign Up </button>
        <div className="sign-btn px-5">
            <div className="w-100 w-md-75">
                <img src={glogo} alt="" srcset="" width={'25px'} />
                Continue With Google
            </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
