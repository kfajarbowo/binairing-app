import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";

const DataPemesan = () => {
  // function untuk toggle => ketika toggle di klik maka input field nama keluarga akan muncul
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  // properti CSS untuk Heading
  const headingStyle = {
    fontSize: "var(--heading-font-20)",
    fontWeight: "var(--font-bold)",
  };

  // properti CSS untuk paragraph
  const paragraphStyle = {
    fontSize: "var(--body-font-14)",
    fontWeight: "var(--font-bold)",
    color: "var(--darkblue-04)",
  };

  // properti CSS untuk placeholder
  const placeholderStyle = {
    fontSize: "var(--body-font-14)",
    color: "var(--Neutral--03)",
    borderRadius: "0.5rem",
  };

  return (
    <div className="dataPemesan">
      <h5 className="mb-4" style={headingStyle}>
        Isi Data Pemesan
      </h5>
      <Card className="border-0">
        <Card.Header className="bg-dark text-light">
          Data Diri Pemesan
        </Card.Header>
        <Card.Body>
          <Form>
            {/* input nama lengkap */}
            <Form.Group className="mb-3">
              <Form.Label style={paragraphStyle}>Nama Lengkap</Form.Label>
              <Form.Control
                type="text"
                placeholder="masukkan nama lengkap"
                style={placeholderStyle}
              />

              {/* switch punya nama keluarga atau tidak */}
              <div className="d-flex justify-content-between align-items-center mt-2">
                <Form.Text>Punya Nama Keluarga?</Form.Text>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  onClick={toggleInput}
                />
              </div>
            </Form.Group>

            {/* input nama keluarga */}
            {showInput && (
              <Form.Group className="mb-3">
                <Form.Label style={paragraphStyle}>Nama Keluarga</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="masukkan nama keluarga"
                  style={placeholderStyle}
                />
              </Form.Group>
            )}

            {/* input nomor telepon */}
            <Form.Group className="mb-3">
              <Form.Label style={paragraphStyle}>Nomor Telepon</Form.Label>
              <Form.Control
                type="text"
                placeholder="masukkan nomor telepon"
                style={placeholderStyle}
              />
            </Form.Group>

            {/* input email */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={paragraphStyle}>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Contoh: johndoe@gmail.com"
                style={placeholderStyle}
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DataPemesan;
