import React from "react";
import {
  Accordion,
  Alert,
  Breadcrumb,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logoMaskapai from "../assets/logoMaskapai.png";
import payment from "../assets/payment.png";

const Payment = () => {
  return (
    <Container className="mt-5">
      {/* Breadcrumb */}
      <Row>
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item active>
              <Link
                to="/checkout"
                className="fw-bold"
                style={{ textDecoration: "none", color: "black" }}
              >
                Isi Data Diri
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item
              active
              className="fw-bold"
              style={{ color: "black" }}
            >
              Bayar
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              <Link
                to="/payment-success"
                style={{ textDecoration: "none", color: "var(--Neutral--03)" }}
              >
                Selesai
              </Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Alert className="text-center bg-danger text-light border-0">
          Selesaikan Pembayaran sampai 10 Maret 2023 12:00
        </Alert>
      </Row>
      <Row className="gap-4">
        <Col>
          <Accordion className="mb-3">
            <Accordion.Item eventKey="0">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Gopay
              </button>
            </Accordion.Item>
          </Accordion>
          <Accordion className="mb-3">
            <Accordion.Item eventKey="1">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Virtual Account
              </button>
            </Accordion.Item>
          </Accordion>
          <Accordion className="border-0 mb-3">
            <Accordion.Item eventKey="2">
              <Accordion.Header>Credit Card</Accordion.Header>
              <Accordion.Body>
                <Card className="border-0">
                  <Card.Img variant="top" src={payment} />
                  <Card.Body>
                    <Form.Group className="mb-3">
                      <Form.Label>Card number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="4480 0000 0000 0000"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Card holder name</Form.Label>
                      <Form.Control type="text" placeholder="John Doe" />
                    </Form.Group>

                    <div className="d-flex">
                      <Form.Group className="mb-3">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control type="text" placeholder="000" />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Expiry date</Form.Label>
                        <Form.Control type="date" />
                      </Form.Group>
                    </div>
                  </Card.Body>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Button type="submit" className="w-100">
            Bayar
          </Button>
        </Col>
        <Col className="mb-5">
          <div className="mt-3">
            <h5 className="fw-bold">Booking Code: 6723y2GHK</h5>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="fw-bold">07:00</h5>
              <h6 className="fw-bold">Keberangkatan</h6>
            </div>
            <p className="mb-0">3 Maret 2023</p>
            <p>Soekarno Hatta - Terminal 1A Domestik</p>
          </div>

          <hr />

          <Row>
            <Col md={1}>
              <img src={logoMaskapai} alt="" />
            </Col>
            <Col md="auto">
              <h6 className="fw-bold">Jet Air - Economy</h6>
              <h6 className="fw-bold mb-4">JT - 203</h6>
              <h6 className="fw-bold">Informasi:</h6>
              <p className="mb-0">Baggage 20kg</p>
              <p className="mb-0">Cabin baggage 7 kg</p>
              <p>In Flight Entertainment</p>
            </Col>
          </Row>

          <hr />

          <div className="div">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="fw-bold">11:00</h5>
              <h6 className="fw-bold">Kedatangan</h6>
            </div>
            <p className="mb-0">3 Maret 2023</p>
            <p className="fw-bold">Melbourne International Airport</p>
          </div>

          <hr />

          <div>
            <h5 className="fw-bold">Rincian Harga</h5>
            <div className="d-flex justify-content-between align-items-center">
              <p>2 Adults</p>
              <p>IDR 9.550.000</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p>1 Baby</p>
              <p>IDR 0</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p>Tax</p>
              <p>IDR 300.000</p>
            </div>
          </div>

          <hr />

          <div className="d-flex justify-content-between align-items-center">
            <h5 className="fw-bold">Total</h5>
            <h4 className="fw-bold">IDR 9.850.000</h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Payment;
