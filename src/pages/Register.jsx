import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import background from "../assets/background.png";
import { Link, useNavigate } from "react-router-dom";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { register } from "../redux/action/auth";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNum, setPhonenum] = useState("");
  const [fullName, setFullName] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const data = { username, email, password, phoneNum, fullName };

    dispatch(register(data, navigate));
  };

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

  // properti CSS untuk placeholder
  const placeholderStyle = {
    fontSize: "var(--body-font-14)",
    color: "var(--Neutral--03)",
  };

  // properti CSS untuk button
  const buttonStyle = {
    borderRadius: "1rem",
    backgroundColor: "var(--darkblue-04)",
    border: "none",
    fontSize: "var(--body-font-14)",
  };

  return (
    <Container fluid>
      <Row>
        {/* Kolom register bagian kiri */}
        <Col md={6} className="px-0 d-none d-sm-block">
          <div className="loginLeft">
            <img
              src={background}
              alt="Login Background"
              className="img-fluid vh-100 w-100 object-fit-cover"
            />
          </div>
        </Col>

        {/* Kolom register bagian kanan */}
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center vh-100"
        >
          <div className="loginForm w-75">
            <h3 className="mb-3" style={headingStyle}>
              Register
            </h3>
            <Form onSubmit={handleRegister}>
              {/* Input Nama Lengkap */}
              <Form.Group className="mb-3">
                <Form.Label style={labelStyle}>Nama Lengkap</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan nama lengkap Anda"
                  style={placeholderStyle}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Form.Group>

              {/* Input Username */}
              <Form.Group className="mb-3">
                <Form.Label style={labelStyle}>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan username Anda"
                  style={placeholderStyle}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              {/* Input Email */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={labelStyle}>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Contoh: johndoe@gmail.com"
                  style={placeholderStyle}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              {/* Input Nomor Telepon */}
              <Form.Group className="mb-3">
                <Form.Label style={labelStyle}>Nomor Telepon</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="+62"
                  style={placeholderStyle}
                  value={phoneNum}
                  onChange={(e) => setPhonenum(e.target.value)}
                />
              </Form.Group>

              {/* Input Password */}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={labelStyle}>Buat password</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Buat password"
                    style={placeholderStyle}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputGroup.Text onClick={togglePasswordVisibility}>
                    {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Button type="submit" className="w-100" style={buttonStyle}>
                Daftar
              </Button>

              <p className="text-center mt-4" style={labelStyle}>
                Sudah punya akun?
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <span className="fw-bold txt-primary"> Masuk di sini</span>
                </Link>
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
