import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoLogoFacebook, IoLogoGoogle } from "react-icons/io5";
import PANDA from "../assets/panda.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const btnRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <form
              className="form-container card p-3 mb-5"
              onSubmit={handleSubmit}
            >
              <div className="card-body p-5 text-center">
                <img className="panda" src={PANDA} width={80} height={60} alt="panda" />
                <h3 className="sign-in mb-5">Sign in</h3>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    data-testid="email-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    minLength={4}
                    className="form-control form-control-lg"
                    ref={btnRef}
                  />
                  <label className="inp form-label" htmlFor="email">
                    Email
                  </label>
                  {email && !(/\S+@\S+\.\S+/).test(email) && <span className="error" data-testid="error-msg">Please enter a valid email.</span>}
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                    className="form-control form-control-lg"
                  />
                  <label className="inp form-label" htmlFor="password">
                    Password
                  </label>
                </div>
                <div className="form-check d-flex justify-content-start mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox"
                  />
                  <label
                    className="checkbox form-check-label mx-1"
                    htmlFor="checkbox"
                  >
                    {" "}
                    Remember password{" "}
                  </label>
                </div>
                <button
                  className="login btn btn-lg"
                  type="submit"
                  onClick={() => btnRef.current.focus()}
                >
                  Login
                </button>
                <button
                  className="signup btn btn-lg"
                  type="button"
                  onClick={() => navigate("/signup")}
                >
                  Signup
                </button>
                <hr className="my-4" />{" "}
                {/* This creates a line divider between the buttons */}
                <button
                  className="google btn btn-lg btn-block mb-2 m-1"
                  type="submit"
                >
                  <IoLogoGoogle className="goo-logo" size={25} />
                </button>
                <button
                  className="facebook btn btn-lg btn-block mb-2 m-1"
                  type="submit"
                >
                  <IoLogoFacebook className="fa-logo" size={25} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
