import { React, useState, useRef, useEffect } from "react";
import fire from "./fire";
import TopBar from "./Sections/Navbar.js";
import OpenSources from "./Sections/openSources.js";
import snowy from "./Snowy.svg";
import "./App.css";
import "./loginStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Sections/Login";
import EditProfile from "./Sections/EditAccount";
import Shop from "./Sections/Shop";

let forceSignIn = true;
let forceSignUp = false;

const App = () => {
  const [isInMain, setIsInMain] = useState(true);
  const [isInShop, setInShop] = useState(false);
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const updateProps = {
    image: "",
    newImage: "",
    newImageFile: "",
    username: "",
    newUsername: "",
    email: "",
    newEmail: "",
    newPassword: "",
    password: "",
  };

  const clearInputs = () => {
    setEmail("");
    setUsername("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setUsernameError("");
    setPasswordError("");
  };

  const handleSignIn = () => {
    clearErrors();
    if (email == "") {
      setEmailError("Please enter a valid email");
      return;
    }
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;

          case "auth/worng-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    if (email == "") {
      setEmailError("Please enter a valid email");
    }
    if (username == "") {
      setUsernameError("Please enter a username");
      return;
    }
    if (username.length <= 3) {
      setUsernameError("Username must me more than 3 characters");
      return;
    }
    if (
      username.includes(
        "/" ||
          "*" ||
          "+" ||
          "`" ||
          "~" ||
          "#" ||
          "$" ||
          "%" ||
          "^" ||
          ">" ||
          "!" ||
          "&" ||
          "=" ||
          "\\" ||
          "|" ||
          "-" ||
          "," ||
          ";" ||
          ":" ||
          "[" ||
          "]" ||
          "{" ||
          "}" ||
          "(" ||
          ")"
      )
    ) {
      setUsernameError(
        "Username must contains only characters, numbers and (. or _)"
      );
      return;
    }
    if (emailError != "") return;
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;

        // ...
        user
          .updateProfile({
            displayName: username,
            photoURL: "https://www.jardindemeriem.com/images/temoin/1.jpg",
          })
          .then(function () {
            // Update successful.
          })
          .catch(function (error) {
            // An error happened.
          });
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/email-already-in-use":
            setEmailError(err.message);
            break;

          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogOut = () => {
    fire.auth().signOut();
  };

  const handleProfileUpdate = (e = null, auto = false) => {
    if (!user || auto) {
      console.log(user);
      console.log(auto);
      console.log("returned!!!!!!");
      return;
    }
    console.log("uploading.........!");
    let updatedImage = user.photoURL;
    if (updateProps.newImageFile != "") {
      fire
        .storage()
        .ref("users/" + fire.auth().currentUser.uid + "/profilePic.jpg")
        .put(updateProps.newImageFile)
        .then(() => {
          console.log("Uploaded Image successfully!");
          fire
            .storage()
            .ref("users/" + fire.auth().currentUser.uid + "/profilePic.jpg")
            .getDownloadURL()
            .then((url) => {
              console.log("got image url");
              var img = document.getElementById("editProfilePic");
              var img2 = document.getElementById("profilePic");
              img.setAttribute("src", url);
              img2.setAttribute("src", url);
              updatedImage = url;
              user
                .updateProfile({
                  photoURL: url,
                })
                .then(function () {
                  console.log(updatedImage);
                  console.log(user.photoURL);
                  console.log("Updated Profile");
                })
                .catch(function (error) {
                  console.log(error.message);
                });
            })
            .catch((error) => {
              // Handle any errors
            });
        })
        .catch((error) => {
          console.log(error.message);
        });

      console.log("uploaded!!!");
      if (updateProps.newImage != "") {
        updateProps.image = updateProps.newImage;
        updateProps.newImage = "";
        updateProps.newImageFile = "";
      }
    }
  };

  const chooseFile = (e) => {
    let file = e.target.files[0];
    updateProps.newImageFile = file;
    updateProps.newImage = URL.createObjectURL(file);
    var img = document.getElementById("editProfilePic");
    img.setAttribute("src", updateProps.newImage);

    console.log(file);
  };

  const changeImage = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  const inputFile = useRef(null);

  const updateUpdateProps = () => {
    updateProps.image = user.photoURL;
    updateProps.username = user.displayName;
    updateProps.email = user.email;
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setIsInMain(true);
        updateUpdateProps();
        handleProfileUpdate(null, true);
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="App">
      <TopBar
        isInMain={isInMain}
        setIsInMain={setIsInMain}
        setHasAccount={setHasAccount}
        handleLogOut={handleLogOut}
        user={user}
      />
      <Shop />
      {!isInMain ? (
        <>
          {user ? (
            <>
              <EditProfile
                username={username}
                setUsername={setUsername}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
                usernameError={usernameError}
                user={user}
                handleProfileUpdate={handleProfileUpdate}
                changeImage={changeImage}
                chooseFile={chooseFile}
                inputFile={inputFile}
              />
            </>
          ) : (
            <>
              <Login
                username={username}
                setUsername={setUsername}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSignIn={handleSignIn}
                handleSignUp={handleSignUp}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
                usernameError={usernameError}
              />
            </>
          )}
        </>
      ) : (
        <>
          <div className="App-header">
            <img src={snowy} className="App-logo" alt="logo" />
            <p>
              By{" "}
              <code style={{ fontSize: 35 + "px", fontWeight: 900 }}>
                Snowy
              </code>{" "}
              Tutorials, Free-Sources, and more...
            </p>
            <a
              className="App-link"
              href="https://github.com/Snowy7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow me on Github
            </a>
          </div>
          <OpenSources />
        </>
      )}
    </div>
  );
};

export default App;
