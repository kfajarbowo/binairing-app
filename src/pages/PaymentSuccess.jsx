import React from "react";
import {
  Alert,
  Breadcrumb,
  Button,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ilustrasi from "../assets/ilustrasi.png";

const PaymentSuccess = () => {
  // properti CSS untuk Breadcrumb
  const breadcrumbStyle = {
    fontWeight: "var(--font-bold)",
    color: "black",
    textDecoration: "none",
  };

  // properti CSS untuk Alert
  const alertStyle = {
    color: "white",
    fontSize: "var(--title-font-16)",
    backgroundColor: "var(--success)",
    border: "none",
    textAlign: "center",
  };

  // properti CSS untuk Button Primary
  const buttonPrimaryStyle = {
    color: "white",
    fontSize: "var(--title-font-16)",
    backgroundColor: "var(--darkblue-04)",
    border: "none",
  };

  // properti CSS untuk Button Secondary
  const buttonSecondaryStyle = {
    color: "white",
    fontSize: "var(--title-font-16)",
    backgroundColor: "var(--darkblue-02)",
    border: "none",
  };

  // properti CSS untuk Paragraph
  const paragraphStyle = {
    fontSize: "var(--body-font-14)",
    color: "var(--darkblue-04)",
    fontWeight: "var(--font-semi-bold)",
  };

  // properti CSS untuk SubParagraph
  const subParagraphStyle = {
    fontSize: "var(--body-font-14)",
    color: "black",
    fontWeight: "var(--font-semi-bold)",
  };

  return (
    <Container className="mt-5">
      {/* Breadcrumb */}
      <Row>
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item active>
              <Link to="/checkout" style={breadcrumbStyle}>
                Isi Data Diri
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              <Link to="/payment" style={breadcrumbStyle}>
                Bayar
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              <Link to="/payment-success" style={breadcrumbStyle}>
                Selesai
              </Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      {/* Alert */}
      <Row>
        <Alert style={alertStyle} className="py-2 mx-2">
          Terimakasih atas pembayaran transaksi
        </Alert>
      </Row>

      {/* Main Content */}
      <Row>
        <Col>
          <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
            <img
              src={ilustrasi}
              className="h-50 img-fluid"
              alt="Ilustrasi Transaksi"
            />
            <h6 style={paragraphStyle} className="mt-4">
              Selamat!
            </h6>
            <p style={subParagraphStyle} className="mb-4">
              Transaksi Pembayaran Tiket sukses!
            </p>
            <Button
              as={Link}
              to={"/ticket"}
              className="my-3 w-50"
              style={buttonPrimaryStyle}
            >
              Terbitkan tiket
            </Button>
            <Button className="w-50" style={buttonSecondaryStyle}>
              Cari Penerbangan Lain
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentSuccess;
