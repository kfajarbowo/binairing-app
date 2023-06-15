import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import background from "../assets/background.png";
import { Link } from "react-router-dom";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";

const Login = () => {
  //Fungsi untuk input email dan password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Fungsi untuk show password
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // properti CSS untuk Heading
  const headingStyle = {
    fontSize: "var(--heading-font-24)",
    fontWeight: "var(--font-bold)",
  };

  // properti CSS untuk Label input
  const labelStyle = {
    fontSize: "var(--body-font-12)",
  };

  // properti CSS untuk lupa password
  const forgotPassStyle = {
    fontSize: "var(--body-font-12)",
    color: "var(--darkblue-04)",
    textDecoration: "none",
  };

  // properti CSS untuk placeholder
  const placeholderStyle = {
    fontSize: "var(--body-font-14)",
    color: "var(--Neutral--03)",
  };

  // properti CSS untuk button
  const buttonStyle = {
    borderRadius: "16px",
    backgroundColor: "var(--darkblue-04)",
    border: "none",
    fontSize: "var(--body-font-14)",
  };

  return (
    <Container fluid>
      <Row>
        {/* Kolom login bagian kiri */}
        <Col md={6} className="px-0 d-none d-sm-block">
          <div className="loginLeft">
            <img
              src={background}
              alt="Login Background"
              className="img-fluid vh-100 w-100 object-fit-cover"
            />
          </div>
        </Col>

        {/* Kolom login bagian kanan */}
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center vh-100"
        >
          <div className="loginForm w-75">
            <h3 className="mb-3" style={headingStyle}>
              Masuk
            </h3>
            <Form>
              {/* Input Email */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={labelStyle}>Email/No Telepon</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Contoh: johndoe@gmail.com"
                  style={placeholderStyle}
                />
              </Form.Group>

              {/* Input Password */}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <div className="passwordLabel d-flex justify-content-between">
                  <Form.Label style={labelStyle}>Password</Form.Label>
                  <Form.Label>
                    <Link to="/resetpassword" style={forgotPassStyle}>
                      Lupa kata sandi?
                    </Link>
                  </Form.Label>
                </div>
                <InputGroup className="mb-3">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan password"
                    style={placeholderStyle}
                  />
                  <InputGroup.Text onClick={togglePasswordVisibility}>
                    {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Button type="submit" className="w-100" style={buttonStyle}>
                Masuk
              </Button>

              <p className="text-center mt-4" style={labelStyle}>
                Belum punya akun?
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <span
                    className="fw-bold"
                    style={{ color: "var(--darkblue-04)" }}
                  >
                    {" "}
                    Daftar di sini
                  </span>
                </Link>
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
