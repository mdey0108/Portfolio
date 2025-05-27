import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiFillGithub,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import logo from "../Assets/logo.png";

function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", text: "Home", icon: AiOutlineHome },
    { path: "/about", text: "About", icon: AiOutlineUser },
    { path: "/project", text: "Projects", icon: AiOutlineFundProjectionScreen },
    { path: "/resume", text: "Resume", icon: CgFileDocument },
  ];

  return (
    <Navbar
      expanded={isExpanded}
      fixed="top"
      expand="md"
      className={isScrolled ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <img src={logo} className="logo" alt="brand" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item) => (
              <Nav.Item key={item.path}>
                <Nav.Link
                  as={Link}
                  to={item.path}
                  onClick={() => setIsExpanded(false)}
                >
                  <item.icon style={{ marginBottom: "2px" }} /> {item.text}
                </Nav.Link>
              </Nav.Item>
            ))}

            <Nav.Item>
              <Nav.Link
                href="https://www.instagram.com/dev_loafer/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://github.com/mdey0108/"
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                <AiFillGithub style={{ fontSize: "1.2em" }} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
