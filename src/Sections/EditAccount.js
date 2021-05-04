import React from "react";
import snowy from "../Snowy.svg";

const EditProfile = (props) => {
  let {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    usernameError,
    user,
    handleProfileUpdate,
    changeImage,
    chooseFile,
    inputFile,
  } = props;

  username=user.displayName;

  return (
    <section className="editProfile">
      <img
        src={snowy}
        className="login-logo snowy-logo"
        style={{ position: "relative" }}
        alt="logo"
      />
      <div className="container">
        <div className="btnContainer">
          <>
            <code style={{ fontSize: 35 + "px", fontWeight: 600 }}>
              EDIT PROFILE
            </code>{" "}
            <>
              <input style={{display:"none"}} ref={inputFile} type="file" onChange={chooseFile}/>
              <img id="editProfilePic" className="ProfilePic" src={user.photoURL} onClick={changeImage}/>
              <label>Change Username:?</label>
              <input
                type="text"
                autoFocus
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <p className="errorMsg">{usernameError}</p>

              <button className="loginBtn" onClick={handleProfileUpdate}>
                Save Changes
              </button>
            </>
          </>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
