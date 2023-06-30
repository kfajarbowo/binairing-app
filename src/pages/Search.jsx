import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Collapse,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { BsBox } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FiDollarSign } from "react-icons/fi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "./border.css";
import { useDispatch, useSelector } from "react-redux";
import { getJadwal } from "../redux/action/jadwal";
import { useLocation } from "react-router-dom";
import { getDetail } from "../redux/action/detail";
import empty from "../assets/empty.png";

function Search() {
  //get detail
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const dewasa = searchParams.get("dewasa");
  const bayi = searchParams.get("bayi");
  const kelas = searchParams.get("kelas");
  const kelas_name = searchParams.get("kelas_name");
  const tgl_barangkat = searchParams.get("tgl_barangkat");
  const [showTermurahOptions, setShowTermurahOptions] = React.useState(false);

  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.detailTable);

  useEffect(() => {
    dispatch(getDetail(from, to, kelas, tgl_barangkat));
  }, [dispatch]);

  const toggleTermurahOptions = () => {
    setShowTermurahOptions(!showTermurahOptions);
  };
  const [buka, setBuka] = useState(false);

  function convertTime(timeString) {
    const time = new Date(`1970-01-01T${timeString}`);
    const formattedTime = time.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
    });

    return formattedTime;
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString("id-ID", options);
    return formattedDate;
  }

  return (
    <Container>
      <Row className="mt-5">
        <h5 className="fw-bold mb-3">Pilih Penerbangan</h5>
      </Row>
      <Row>
        <Col md={8}>
          <Button
            className="w-100"
            style={{ background: "#A06ECE", border: "none" }}
          >
            {from} {to} - {parseInt(dewasa) + parseInt(bayi)} Penumpang -{" "}
            {kelas_name}
          </Button>
        </Col>
        <Col md={4}>
          <Button
            className="w-100"
            style={{ background: "#73CA5C", border: "none" }}
          >
            Ubah Pencarian
          </Button>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Selasa</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                01/03/2023
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body
              className="card-hover"
              style={{
                backgroundColor: "#B35ED6",
                cursor: "default",
                color: "white",
              }}
            >
              <Card.Title>Rabu</Card.Title>
              <Card.Subtitle className="mb-2">02/03/2023</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body
              className="card-hover"
              style={{
                backgroundColor: "#6F1F8F",
                cursor: "pointer",
                color: "white",
              }}
            >
              <Card.Title>Kamis</Card.Title>
              <Card.Subtitle className="mb-2">03/03/2023</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Jumat</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                04/03/2023
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Sabtu</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                05/03/2023
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Minggu</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                06/03/2023
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Senin</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                07/03/2023
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Col md={12}>
        <div className="d-flex justify-content-end">
          <DropdownButton
            id="dropdown-termurah"
            title="Termurah"
            variant="ligth"
            onClick={toggleTermurahOptions}
            style={{
              marginLeft: "10px",
              marginTop: "20px",
              color: "#4B1979",
              background: "#fff",
            }}
          >
            <Dropdown.Item
              onClick={() => console.log("Harga Termurah")}
              style={{ color: "#4B1979", backgroundColor: "#F2E7FF" }}
            >
              <b>Harga</b> - Termurah
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => console.log("Durasi Terpendek")}
              style={{ margintop: "20px" }}
            >
              <b>Durasi</b> - Terpendek
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => console.log("Keberangkatan Paling Akhir")}
            >
              <b>Keberangkatan</b> - Paling Akhir
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => console.log("Kedatangan Paling Awal")}
            >
              <b>Kedatangan</b> - Paling Awal
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => console.log("Kedatangan Paling Akhir")}
            >
              <b>Kedatangan</b> - Paling Akhir
            </Dropdown.Item>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              style={{
                marginLeft: "180px",
                marginTop: "20px",
                color: "#fff",
                background: "#4B1979",
              }}
            >
              Pilih
            </button>
          </DropdownButton>
        </div>{" "}
      </Col>

      {/* Filters */}
      {detail ? (
        <Row className="mt-3">
          <Col sm={4}>
            <Card>
              <Card.Body>
                <h5>Filters</h5>

                <h6>
                  <BsBox /> Transit
                </h6>
                <hr />
                <h6>
                  <AiOutlineHeart />
                  Fasilitas
                </h6>

                <hr />
                <h6>
                  <FiDollarSign />
                  Harga
                </h6>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={8}>
            <Card
              className={`pb-2 mb-5 mb-md-5 rounded-3 shadow border-1 ${
                buka ? "border-custom" : ""
              }`}
            >
              <Card.Body>
                <div className="pb-3 d-flex justify-content-between align-items-start">
                  <img
                    src={detail?.maskapai?.logoMaskapai}
                    alt=""
                    width="25"
                    height="25"
                  />
                  <p className="ps-3 m-0">
                    {detail?.maskapai?.namaMaskapai}- {kelas_name}
                  </p>
                  <Col></Col>
                  <Button
                    className="border-0 p-0 m-0"
                    onClick={() => setBuka(!buka)}
                    style={{ background: "none" }}
                  >
                    {buka ? (
                      <FaAngleUp size={20} color="black" />
                    ) : (
                      <FaAngleDown size={20} color="black" />
                    )}
                  </Button>
                </div>
                <Row>
                  <Col className="pe-0 d-grid justify-content-center align-content-center">
                    <b>{convertTime(detail?.jamKeberangkatan)}</b>
                    <p className="fw-bold">
                      {detail?.kotaKeberangkatan?.cityCode}
                    </p>
                  </Col>
                  <Col xs={6}>
                    <p
                      className="text-center mb-2 text-secondary text"
                      style={{ fontSize: "12px" }}
                    >
                      {detail?.durasiJam}h {detail?.durasiMenit}m
                    </p>
                    <hr className="m-2" />
                    <p
                      className="text-center text-secondary"
                      style={{ fontSize: "12px" }}
                    >
                      Direct
                    </p>
                  </Col>
                  <Col className="pe-0 d-grid justify-content-center align-content-center">
                    <b>{convertTime(detail?.jamKedatangan)}</b>
                    <p className="fw-bold">
                      {detail?.kotaKedatangan?.cityCode}
                    </p>
                  </Col>
                  <Col className="d-grid justify-content-end align-content-center">
                    <h1
                      className="fw-bold"
                      style={{
                        fontSize: "16px",
                        color: "#7126B5",
                      }}
                    >
                      IDR {detail?.hargaTiket?.toLocaleString("id-ID")}
                    </h1>
                    <Button
                      className="rounded-3 border-0 ms-3 fs-6 "
                      style={{
                        backgroundColor: "#7126B5",
                      }}
                    >
                      Pilih
                    </Button>
                  </Col>
                </Row>
                <Collapse in={buka}>
                  <div>
                    <hr />
                    <div>
                      {/* Import Detail */}
                      <Col>
                        <div className="mt-3">
                          <h5 className="fw-bold">Detail Penerbangan</h5>
                          <div className="d-flex justify-content-between align-items-center">
                            <h5 className="fw-bold">
                              {convertTime(detail?.jamKeberangkatan)}
                            </h5>
                            <h6 className="fw-bold">Keberangkatan</h6>
                          </div>
                          <p className="mb-0">
                            {formatDate(detail?.tglKeberangkatan)}
                          </p>
                          <p>
                            {detail?.kotaKeberangkatan?.cityName} -{" "}
                            {detail?.kotaKeberangkatan?.cityAirport}
                          </p>
                        </div>

                        <hr />

                        <Row className="d-flex align-items-center">
                          <Col md={1}>
                            <img
                              src={detail?.maskapai?.logoMaskapai}
                              alt=""
                              width="25"
                              height="25"
                            />
                          </Col>
                          <Col md="auto">
                            <h6 className="fw-bold">
                              {detail?.maskapai?.namaMaskapai}- {kelas_name}
                            </h6>
                            <h6 className="fw-bold mb-4">
                              {detail?.maskapai?.kodeMaskapai}
                            </h6>
                            <h6 className="fw-bold">Informasi:</h6>
                            <p className="mb-0">Baggage 20kg</p>
                            <p className="mb-0">Cabin baggage 7 kg</p>
                            <p>In Flight Entertainment</p>
                          </Col>
                        </Row>

                        <hr />

                        <div>
                          <div className="d-flex justify-content-between align-items-center">
                            <h5 className="fw-bold">
                              {convertTime(detail?.jamKedatangan)}
                            </h5>
                            <h6 className="fw-bold">Kedatangan</h6>
                          </div>
                          <p className="mb-0">
                            {formatDate(detail?.tglKedatangan)}
                          </p>
                          <p>
                            {detail?.kotaKedatangan?.cityName} -{" "}
                            {detail.kotaKedatangan?.cityAirport}
                          </p>
                        </div>

                        <hr />

                        <div>
                          <h5 className="fw-bold">Rincian Harga</h5>
                          <div className="d-flex justify-content-between align-items-center">
                            <p>{dewasa} Adults</p>
                            <p>
                              IDR{" "}
                              {(
                                parseInt(dewasa) * detail?.hargaTiket
                              ).toLocaleString("id-ID")}
                            </p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <p>{bayi} Baby</p>
                            <p>
                              IDR{" "}
                              {(
                                parseInt(bayi) * detail?.hargaTiket
                              ).toLocaleString("id-ID")}
                            </p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <p>Tax</p>
                            <p>
                              IDR{" "}
                              {(
                                (parseInt(dewasa) + parseInt(bayi)) *
                                detail?.hargaTiket *
                                0.11
                              ).toLocaleString("id-ID")}
                            </p>
                          </div>
                        </div>

                        <hr />

                        <div className="d-flex justify-content-between align-items-center mb-0">
                          <h5 className="fw-bold txt-primary">Total</h5>
                          <h4 className="fw-bold">
                            IDR{" "}
                            {(
                              (parseInt(dewasa) + parseInt(bayi)) *
                              detail?.hargaTiket *
                              1.11
                            ).toLocaleString("id-ID")}
                          </h4>
                        </div>
                      </Col>
                    </div>
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <Row className="my-3">
          <Col className="d-flex align-items-center justify-content-center">
            <Card className="text-center py-5 px-5 w-50">
              <img src={empty} alt="Hasil pencarian tidak ditemukan!" />
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Search;
