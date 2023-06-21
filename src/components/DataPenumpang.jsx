import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";

const DataPenumpang = () => {
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
    <div className="dataPenumpang">
      <h5 className="mb-4" style={headingStyle}>
        Isi Data Penumpang
      </h5>
      <Card className="border-0">
        <Card.Header className="bg-dark text-light">
          Data Diri Penumpang 1 - Adult
        </Card.Header>
        <Card.Body>
          <Form>
            {/* input title */}
            <Form.Group className="mb-3">
              <Form.Label style={paragraphStyle}>Title</Form.Label>
              <Form.Select style={placeholderStyle}>
                <option>Mr.</option>
                <option>Mrs.</option>
              </Form.Select>
            </Form.Group>

            {/* input nama lengkap */}
            <Form.Group className="mb-3">
              <Form.Label style={paragraphStyle}>Nama Lengkap</Form.Label>
              <Form.Control type="text" style={placeholderStyle} />

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
                <Form.Control type="text" style={placeholderStyle} />
              </Form.Group>
            )}

            {/* input tanggal lahir */}
            <Form.Group className="mb-3">
              <Form.Label style={paragraphStyle}>Tanggal Lahir</Form.Label>
              <Form.Control type="date" style={placeholderStyle} />
            </Form.Group>

            {/* input nama kewarganegaraan */}
            <Form.Group className="mb-3">
              <Form.Label style={paragraphStyle}>Kewarganegaraan</Form.Label>
              <Form.Control type="text" style={placeholderStyle} />
            </Form.Group>

            {/* input KTP/PASPOR */}
            <Form.Group className="mb-3">
              <Form.Label style={paragraphStyle}>KTP/Paspor</Form.Label>
              <Form.Control type="text" style={placeholderStyle} />
            </Form.Group>

            {/* input negara penerbit */}
            <Form.Group className="mb-3">
              <Form.Label style={paragraphStyle}>Negara Penerbit</Form.Label>
              <Form.Control type="text" style={placeholderStyle} />
            </Form.Group>

            {/* input berlaku sampai */}
            <Form.Group className="mb-3">
              <Form.Label style={paragraphStyle}>Berlaku Sampai</Form.Label>
              <Form.Control type="date" style={placeholderStyle} />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DataPenumpang;
