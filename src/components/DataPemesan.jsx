import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";

const DataPemesan = () => {
  // function untuk toggle => ketika toggle di klik maka input field nama keluarga akan muncul
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="dataPemesan">
      <h5 className="fw-bold mb-4">Isi Data Pemesan</h5>
      <Card className="border-0">
        <Card.Header className="bg-dark text-light">
          Data Diri Pemesan
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control type="text" />
              <div className="d-flex justify-content-between align-items-center mt-2">
                <Form.Text>Punya Nama Keluarga?</Form.Text>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  onClick={toggleInput}
                />
              </div>
            </Form.Group>

            {showInput && (
              <Form.Group className="mb-3">
                <Form.Label>Nama Keluarga</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            )}

            <Form.Group className="mb-3">
              <Form.Label>Nomor Telepon</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Contoh: johndoe@gmail.com"
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DataPemesan;
