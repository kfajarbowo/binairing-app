import React from "react";
import "./style.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import {
  ArrowRightSquare,
  ArrowRightSquareFill,
  Search,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import logo from "../../assets/tiketku.png";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="nav"
    >
      <Container>
        <img
          src={logo}
          className="me-2"
          height="50"
          alt="Logo"
          loading="lazy"
        />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <div className="input-group rounded" style={{ width: "400px" }}>
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span className="input-group-text border-0" id="search-addon">
                <Search />
              </span>
            </div>
          </Nav>
          <Nav>
            <Link to="/login" type="submit" className="btns-link m-1">
              <ArrowRightSquareFill /> Masuk
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
