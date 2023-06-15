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
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/checkout">Isi Data Diri</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/payment">Bayar</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/payment-success">Selesai</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Alert className="text-center bg-success text-light border-0">
          Terimakasih atas pembayaran transaksi
        </Alert>
      </Row>
      <Row>
        <Col>
          <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
            <img src={ilustrasi} className="h-50" />
            <h6>Selamat</h6>
            <p className="mb-4">Transaksi Pembayaran Tiket sukses!</p>
            <Button variant="primary" className="mb-3 w-25">
              Terbitkan tiket
            </Button>
            <Button variant="secondary" className="w-25">
              Cari Penerbangan Lain
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentSuccess;
