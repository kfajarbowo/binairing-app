import React, { useEffect } from "react";
import "./style.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { ArrowRightSquareFill, Search } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/tiketku.png";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, logout } from "../../redux/action/auth";
import { FiBell, FiUser } from "react-icons/fi";
import { AiOutlineHistory } from "react-icons/ai";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, token, user } = useSelector((state) => state.authTable);

  useEffect(() => {
    if (isLoggedIn && token) {
      dispatch(getProfile());
    }
  }, [dispatch, isLoggedIn, token]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="nav"
    >
      <Container>
        <Link to="/">
          <img
            src={logo}
            className="me-2"
            height="50"
            alt="Logo"
            loading="lazy"
          />
        </Link>
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
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to={"/riwayat-pemesanan"}>
                  <AiOutlineHistory />
                </Nav.Link>

                <Nav.Link as={Link} to={"/notification"}>
                  <FiBell />
                </Nav.Link>

                <Nav.Link as={Link} to={"/profile"} className="fw-bold">
                  <FiUser /> {user?.username}
                </Nav.Link>

                <Nav.Link onClick={() => dispatch(logout(navigate))}>
                  logout
                </Nav.Link>
              </>
            ) : (
              <Link to="/login" type="submit" className="btns-link m-1">
                <ArrowRightSquareFill /> Masuk
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
