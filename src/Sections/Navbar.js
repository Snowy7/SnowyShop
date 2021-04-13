import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import ProfilePic from "../Images/profile.jpg";

const TopBar = (props) => {
  const { isInMain, setIsInMain, setHasAccount, handleLogOut, user } = props;

  const toggleSite = () => {
    setIsInMain(!isInMain);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <code
          style={{ color: "lightblue", fontSize: 35 + "px", fontWeight: 900 }}
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
          <Nav.Link href="#tutorials">Shop</Nav.Link>
          <Nav.Link href="#tutorials">Tutorials</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#freeSources" onClick={toggleSite}>
            Free-Sources
          </Nav.Link>
        </Nav>
        {user ? (
          <Nav>
            <Nav right eventKey={0} className="ProfileBtn">
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <img className="ProfileButton" id="profilePic" src={user.photoURL} />;
                <a>{user.displayName}</a>;{console.log(user.displayName)}
                <NavDropdown.Item
                  onClick={(setHasAccount(true), toggleSite)}
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
            <Button
              className="mr-2 navBarLogOutBtn"
              onClick={handleLogOut}
              href="#signin"
            >
              Log Out
            </Button>
            {!isInMain ? (
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
                  href="#signin"
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
