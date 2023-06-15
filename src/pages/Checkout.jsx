import React from "react";
import {
  Alert,
  Breadcrumb,
  Button,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import DataPemesan from "../components/DataPemesan";
import DataPenumpang from "../components/DataPenumpang";
import logoMaskapai from "../assets/logoMaskapai.png";
import { Link } from "react-router-dom";

const Checkout = () => {
  // properti CSS untuk Heading
  const headingStyle = {
    fontSize: "var(--title-font-18)",
    fontWeight: "var(--font-bold)",
    color: "var(--darkblue-04)",
  };

  // properti CSS untuk SubHeading
  const subheadingStyle = {
    fontSize: "var(--title-font-18)",
    fontWeight: "var(--font-bold)",
  };

  // properti CSS untuk Title
  const titleStyle = {
    fontSize: "var(--title-font-16)",
    fontWeight: "var(--font-bold)",
  };

  // properti CSS untuk paragraph
  const paragraphStyle = {
    fontSize: "var(--body-font-14)",
  };

  // properti CSS untuk SubParagraph
  const subparagraphStyle = {
    fontSize: "var(--body-font-12)",
    color: "var(--darkblue-03)",
    fontWeight: "var(--font-bold)",
  };

  // properti CSS untuk button
  const buttonStyle = {
    borderRadius: "16px",
    backgroundColor: "var(--darkblue-04)",
    border: "none",
    fontSize: "var(--body-font-14)",
  };

  return (
    <Container className="mt-5">
      {/* Breadcrumb */}
      <Row>
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item
              active
              className="fw-bold"
              style={{ color: "black" }}
            >
              Isi Data Diri
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Bayar</Breadcrumb.Item>
            <Breadcrumb.Item active>Selesai</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      {/* Alert */}
      <Row>
        <Alert className="text-center bg-danger text-light border-0">
          Selesaikan dalam 00:15:00
        </Alert>
      </Row>

      {/* Main Content */}
      <Row className="gap-4">
        {/* Kolom Checkout Bagian Kiri */}
        <Col>
          {/* Data Pemesan */}
          <Row className="border py-4 px-4">
            <DataPemesan />
          </Row>

          {/* Data Penumpang */}
          <Row className="border py-4 px-4 mt-3">
            <DataPenumpang />
          </Row>
          <Button type="submit" className="w-100 my-3" style={buttonStyle}>
            Simpan
          </Button>
        </Col>

        {/* Kolom Checkout Bagian Kanan */}
        <Col>
          <div className="mt-3">
            <h5 style={subheadingStyle}>Detail Penerbangan</h5>
            <div className="d-flex justify-content-between align-items-center">
              <h5 style={titleStyle}>07:00</h5>
              <h6 style={subparagraphStyle}>Keberangkatan</h6>
            </div>
            <p className="mb-0" style={paragraphStyle}>
              3 Maret 2023
            </p>
            <p style={paragraphStyle} className="fw-medium">
              Soekarno Hatta - Terminal 1A Domestik
            </p>
          </div>

          <hr />

          <Row className="d-flex align-items-center">
            <Col md={1}>
              <img src={logoMaskapai} alt="" />
            </Col>
            <Col md="auto">
              <h6 style={paragraphStyle} className="fw-bold">
                Jet Air - Economy
              </h6>
              <h6 className="fw-bold mb-4" style={paragraphStyle}>
                JT - 203
              </h6>
              <h6 style={paragraphStyle} className="fw-bold">
                Informasi:
              </h6>
              <p className="mb-0" style={paragraphStyle}>
                Baggage 20kg
              </p>
              <p className="mb-0" style={paragraphStyle}>
                Cabin baggage 7 kg
              </p>
              <p style={paragraphStyle}>In Flight Entertainment</p>
            </Col>
          </Row>

          <hr />

          <div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="fw-bold" style={titleStyle}>
                11:00
              </h5>
              <h6 style={subparagraphStyle}>Kedatangan</h6>
            </div>
            <p className="mb-0" style={paragraphStyle}>
              3 Maret 2023
            </p>
            <p className="fw-medium" style={paragraphStyle}>
              Melbourne International Airport
            </p>
          </div>

          <hr />

          <div>
            <h5 className="fw-bold" style={titleStyle}>
              Rincian Harga
            </h5>
            <div className="d-flex justify-content-between align-items-center">
              <p style={paragraphStyle}>2 Adults</p>
              <p style={paragraphStyle}>IDR 9.550.000</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p style={paragraphStyle}>1 Baby</p>
              <p style={paragraphStyle}>IDR 0</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p style={paragraphStyle}>Tax</p>
              <p style={paragraphStyle}>IDR 300.000</p>
            </div>
          </div>

          <hr />

          <div className="d-flex justify-content-between align-items-center">
            <h5 style={titleStyle}>Total</h5>
            <h4 style={headingStyle}>IDR 9.850.000</h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
