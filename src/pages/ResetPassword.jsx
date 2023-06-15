import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import background from "../assets/background.png";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";

const ResetPassword = () => {
  //Fungsi untuk show new password
  const [showNewPassword, setShowNewPassword] = useState(false);
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
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
    borderRadius: "16px",
    backgroundColor: "var(--darkblue-04)",
    border: "none",
    fontSize: "var(--body-font-14)",
  };

  return (
    <Container fluid>
      <Row>
        {/* Kolom reset password bagian kiri */}
        <Col md={6} className="px-0 d-none d-sm-block">
          <div className="loginLeft">
            <img
              src={background}
              alt="Login Background"
              className="img-fluid vh-100 w-100 object-fit-cover"
            />
          </div>
        </Col>

        {/* Kolom reset password bagian kanan */}
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center vh-100"
        >
          <div className="loginForm w-75">
            <h3 className="fw-bold mb-3" style={headingStyle}>
              Reset Password
            </h3>
            <Form>
              {/* Input Password Baru */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={labelStyle}>
                  Masukkan password baru
                </Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    type={showNewPassword ? "text" : "password"}
                    placeholder="masukkan password baru"
                    style={placeholderStyle}
                  />
                  <InputGroup.Text onClick={toggleNewPasswordVisibility}>
                    {showNewPassword ? (
                      <BsFillEyeSlashFill />
                    ) : (
                      <BsFillEyeFill />
                    )}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              {/* Input Ulang Password Baru */}
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label style={labelStyle}>Ulangi password baru</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="ulangi password baru"
                    style={placeholderStyle}
                  />
                  <InputGroup.Text onClick={togglePasswordVisibility}>
                    {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Button type="submit" className="w-100" style={buttonStyle}>
                Simpan
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;
