import React, { useEffect, useState } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPayment } from "../redux/action/payment";

const Payment = () => {
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
    backgroundColor: "var(--error)",
    border: "none",
    textAlign: "center",
  };

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

  // add me
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.authTable);
  const { getBookingResult } = useSelector((state) => state.bookingTable);
  const penumpang = Math.floor(
    getBookingResult?.totalHarga / getBookingResult?.jadwal?.hargaTiket
  );

  const [selectedPayment, setSelectedPayment] = useState(null);

  const idBook = location.state.getBookingIds;
  // mendapatkan value metode pembayaran yang dipilih
  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };
  console.log(idBook);
  console.log(selectedPayment);

  const handlePayment = () => {
    dispatch(addPayment(token, idBook)).then(() => {
      navigate("/payment-success", { state: { idBook } });
    });
  };

  // console.log(location.state.getBookingIds)

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
            <Breadcrumb.Item active>Selesai</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      {/* Alert */}
      <Row>
        <Alert style={alertStyle} className="py-2 mx-2">
          Selesaikan Pembayaran sampai 10 Maret 2023 12:00
        </Alert>
      </Row>

      {/* Main Content */}
      <Row className="gap-4 mt-3">
        {/* Kolom kiri payment */}
        <Col>
          <h5 className="fw-bold mb-3">Isi Data Pembayaran</h5>
          <Accordion className="mb-3">
            <Accordion.Item eventKey="0">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{ background: "var(--Neutral--04)", color: "white" }}
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
                style={{ background: "var(--Neutral--04)", color: "white" }}
              >
                Virtual Account
              </button>
            </Accordion.Item>
          </Accordion>
          <Accordion
            className="border-0 mb-3"
            onClick={() => handlePaymentSelection("credit card")}
          >
            <Accordion.Item eventKey="2">
              <Accordion.Header>Credit Card</Accordion.Header>
              <Accordion.Body>
                <Card className="border-0">
                  <Card.Img variant="top" src={payment} />
                  <Card.Body>
                    <Form.Group className="mb-3">
                      <Form.Label style={paragraphStyle} className="fw-medium">
                        Card number
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="4480 0000 0000 0000"
                        style={placeholderStyle}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label style={paragraphStyle} className="fw-medium">
                        Card holder name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="John Doe"
                        style={placeholderStyle}
                      />
                    </Form.Group>

                    <div className="d-flex justify-content-between">
                      <Form.Group className="mb-3">
                        <Form.Label
                          style={paragraphStyle}
                          className="fw-medium"
                        >
                          CVV
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="000"
                          style={placeholderStyle}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label
                          style={paragraphStyle}
                          className="fw-medium"
                        >
                          Expiry date
                        </Form.Label>
                        <Form.Control type="date" style={placeholderStyle} />
                      </Form.Group>
                    </div>
                  </Card.Body>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Button
            type="submit"
            className="w-100"
            style={buttonStyle}
            onClick={handlePayment}
          >
            Bayar
          </Button>
        </Col>

        {/* Kolom kanan payment */}
        <Col className="mb-5">
          <div className="mt-3">
            <h5 style={subheadingStyle}>Detail Penerbangan</h5>
            <div className="d-flex justify-content-between align-items-center">
              <h5 style={titleStyle}>
                {getBookingResult?.jadwal?.jamKeberangkatan}
              </h5>
              <h6 style={subparagraphStyle}>Keberangkatan</h6>
            </div>
            <p className="mb-0" style={paragraphStyle}>
              {getBookingResult?.jadwal?.tglKeberangkatan}
            </p>
            <p style={paragraphStyle} className="fw-medium">
              {getBookingResult?.jadwal?.kotaKeberangkatan?.cityAirport} -
              Terminal 1A Domestik
            </p>
          </div>

          <hr />

          <Row className="d-flex align-items-center">
            <Col md={1}>
              <img src={logoMaskapai} alt="" />
            </Col>
            <Col md="auto">
              <h6 style={paragraphStyle} className="fw-bold">
                {getBookingResult?.jadwal?.maskapai?.namaMaskapai} -{" "}
                {getBookingResult?.jadwal?.kelas?.namaKelas}
              </h6>
              <h6 className="fw-bold mb-4" style={paragraphStyle}>
                {getBookingResult?.jadwal?.maskapai?.kodeMaskapai} - 203
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
                {getBookingResult?.jadwal?.jamKedatangan}
              </h5>
              <h6 style={subparagraphStyle}>Kedatangan</h6>
            </div>
            <p className="mb-0" style={paragraphStyle}>
              {getBookingResult?.jadwal?.tglKedatangan}
            </p>
            <p className="fw-medium" style={paragraphStyle}>
              {getBookingResult?.jadwal?.kotaKedatangan.cityName}
            </p>
          </div>

          <hr />

          <div>
            <h5 className="fw-bold" style={titleStyle}>
              Rincian Harga
            </h5>
            <div className="d-flex justify-content-between align-items-center">
              <p style={paragraphStyle}>{penumpang} Penumpang</p>
              <p style={paragraphStyle}>
                IDR {getBookingResult?.jadwal?.hargaTiket}
              </p>
            </div>
          </div>

          <hr />

          <div className="d-flex justify-content-between align-items-center">
            <h5 style={titleStyle}>Total</h5>
            <h4 style={headingStyle}>{getBookingResult?.totalHarga}</h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Payment;
