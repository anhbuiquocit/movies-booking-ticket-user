import React from "react";
import "./style.css";
const SignIn = () => {
  return (
    <section className="account-section bg_img">
      <div className="container">
        <div className="padding-top padding-bottom">
          <div className="account-area">
            <div className="section-header-3">
              <span className="cate">Hello</span>
              <h2 className="title">WELCOME BACK </h2>
            </div>
            <form className="account-form">
              <div className="form-group">
                <label htmlFor="email1">
                  Email<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  id="email1"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="pass1">
                  Password<span>*</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  id="pass1"
                  required
                />
              </div>
              <div
                className="form-group checkgroup"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div style={{ display: "flex" }}>
                  <input type="checkbox" id="bal" required checked />
                  <label htmlFor="bal">Remember Password</label>
                </div>
                <div>
                  <label>Forget Password</label>
                </div>
              </div>
              <div
                className="form-group text-center"
                style={{ display: "flex" }}
              >
                <input type="submit" value="Sign Up" />
              </div>
            </form>
            <div className="option">
              Don't have an account? <a href="sign-in.html">Sign up now</a>
            </div>
            <div className="or">
              <span>Or</span>
            </div>
            <ul className="social-icons">
              <li>
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#0" className="active">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="fab fa-google"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
