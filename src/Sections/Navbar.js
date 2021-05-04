import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import ProfilePic from "../Images/profile.jpg";

const TopBar = (props) => {
  const {
    isInShop,
    setInShop,
    isInMain,
    setIsInMain,
    setHasAccount,
    handleLogOut,
    user,
  } = props;

  const setIsInShop = (state = true) => {
    setInShop(state);
  };

  const toggleSite = () => {
    setIsInShop(false);
    setIsInMain(!isInMain);
  };

  const openMain = () => {
    setIsInShop(false);
    setIsInMain(true);
  };

  const openEdit = () => {
    setIsInShop(false);
    setIsInMain(false);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <code
          onClick={openMain}
          style={{
            color: "lightblue",
            fontSize: 35 + "px",
            fontWeight: 900,
            cursor: "pointer",
          }}
        >
          <span>&#60;</span>/Snowy<span>&#62;</span>
        </code>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-center"
      >
        <Nav className="mr-auto">
          <Nav.Link href="#shop" onClick={setIsInShop}>
            Shop
          </Nav.Link>
          <Nav.Link href="#tutorials">Tutorials</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#freeSources" onClick={openMain}>
            Free-Sources
          </Nav.Link>
        </Nav>
        {user ? (
          <Nav>
            {isInShop ? (<>
              <Button
                  className="mr-2 navBarButton"
                  onClick={toggleSite}
                  href="#signin"
                >
                  Upload Project
                </Button>
            </>) : (<></>)}
            <Nav right eventKey={0} className="ProfileBtn">
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <img
                  className="ProfileButton"
                  id="profilePic"
                  src={user.photoURL}
                />
                ;<a>{user.displayName}</a>;{console.log(user.displayName)}
                <NavDropdown.Item
                  onClick={(setHasAccount(true), openEdit)}
                  href="#editProfile"
                >
                  Edit Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogOut}>
                  LogOut
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {!isInMain || isInShop ? (
              <>
                <Button
                  className="mr-2 navBarButton"
                  onClick={toggleSite}
                  href="#signin"
                >
                  Main
                </Button>
              </>
            ) : (
              <></>
            )}
          </Nav>
        ) : (
          <Nav>
            {!isInMain ? (
              <>
                <Button
                  className="mr-2 navBarButton"
                  onClick={toggleSite}
                  href="#"
                >
                  Main
                </Button>
              </>
            ) : (
              <>
                <Button
                  className="mr-2 navBarButton"
                  onClick={(setHasAccount(true), toggleSite)}
                  href="#signin"
                >
                  Sign in
                </Button>
              </>
            )}
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopBar;
