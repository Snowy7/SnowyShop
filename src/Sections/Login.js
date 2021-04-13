import React from "react";
import snowy from "../Snowy.svg";

const Login = (props) => {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    handleSignIn,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    usernameError,
  } = props;

  return (
    <section className="login">
      <img
        src={snowy}
        className="login-logo"
        style={{ position: "relative" }}
        alt="logo"
      />

      <div className="loginContainer">
        <div className="btnContainer">
          <>
            {hasAccount ? (
              <>
                <code style={{ fontSize: 35 + "px", fontWeight: 600 }}>
                  SIGN IN
                </code>{" "}
                <label>Email</label>
                <input
                  type="text"
                  autoFocus
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <p className="errorMsg">{passwordError}</p>
                <button className="loginBtn" onClick={handleSignIn}>
                  Sign In
                </button>
                <p>
                  Don't have an account ?{" "}
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    Sign up
                  </span>
                </p>
              </>
            ) : (
              <>
                <code style={{ fontSize: 35 + "px", fontWeight: 600 }}>
                  SIGN UP
                </code>{" "}
                <label>Username</label>
                <input
                  type="text"
                  autoFocus
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
                <p className="errorMsg">{usernameError}</p>
                <label>Email</label>
                <input
                  type="text"
                  autoFocus
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <p className="errorMsg">{passwordError}</p>
                <button className="loginBtn" onClick={handleSignUp}>
                  Sign Up
                </button>
                <p>
                  Have an account ?{" "}
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    Sign in
                  </span>
                </p>
              </>
            )}
          </>
        </div>
      </div>
    </section>
  );
};

export default Login;
