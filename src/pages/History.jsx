import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BsArrowLeftShort, BsFunnel, BsSearch } from "react-icons/bs";
import HistoryCard from "../components/HistoryCard";
import logoMaskapai from "../assets/logoMaskapai.png";

const History = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h5>Riwayat Pemesanan</h5>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={7} md={10}>
          <Button className="w-100 text-start">
            <BsArrowLeftShort size={24} />
            Beranda
          </Button>
        </Col>
        <Col
          sm={4}
          md={2}
          className="d-flex align-items-center justify-content-around"
        >
          <Button variant="outline-primary">
            <BsFunnel size={24} />
            Filter
          </Button>
          <BsSearch />
        </Col>
      </Row>

      <Row>
        <Col>
          <HistoryCard />
        </Col>

        <Col>
          <div className="mt-3">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="fw-bold">Detail Penerbangan</h5>
              <Button variant="success">Issued</Button>
            </div>
            <h6>Booking Code: 6723y2GHK </h6>
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="fw-bold">19:10</h6>
              <h6 className="fw-bold">Keberangkatan</h6>
            </div>
            <p className="mb-0">5 Maret 2023</p>
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
              <p className="mb-0">Penumpang 1: Mr. Harry Potter</p>
              <p>ID: 1234567</p>
              <p className="mb-0">Penumpang 1: Miss Hermione</p>
              <p>ID: 789658</p>
            </Col>
          </Row>

          <hr />

          <div className="div">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="fw-bold">21:10</h6>
              <h6 className="fw-bold">Kedatangan</h6>
            </div>
            <p className="mb-0">5 Maret 2023</p>
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

export default History;
