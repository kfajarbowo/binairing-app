import React, { useEffect, useRef, useState } from "react";
import "../Home/Home.css";
import {
  Card,
  Container,
  FormControl,
  Image,
  InputGroup,
  Modal,
} from "react-bootstrap";
import {
  AirplaneFill,
  ArrowRightShort,
  Calendar,
  CheckCircleFill,
  DashLg,
  PersonAdd,
  PersonFill,
  PlusLg,
  Repeat,
  Search,
} from "react-bootstrap-icons";
import banner from "../../assets/banner.png";
import bangkok from "../../assets/bangkok.png";
import sydney from "../../assets/sydney.png";
import "daterangepicker/daterangepicker.css";
import $ from "jquery";
import "daterangepicker";
import { Link } from "react-router-dom";

const Home = () => {
  // -------------------------- DATE PICKER-----------------------
  // Refs for input elements
  const departureInputRef = useRef();
  const returnInputRef = useRef();

  // State for selected date range
  const [selectedDateRange, setSelectedDateRange] = useState("");

  useEffect(() => {
    // Initialize date picker for departure date
    const departurePicker = $(departureInputRef.current).daterangepicker(
      {
        // Configuration options for departure date picker
      },
      (start, end) => {
        const range =
          start.format("YYYY-MM-DD") + " to " + end.format("YYYY-MM-DD");
        setSelectedDateRange(range);
        returnPicker.data("daterangepicker").setEndDate(end);
      }
    );

    // Initialize date picker for return date
    const returnPicker = $(returnInputRef.current).daterangepicker(
      {
        // Configuration options for return date picker
      },
      (start, end) => {
        const range =
          start.format("YYYY-MM-DD") + " to " + end.format("YYYY-MM-DD");
        setSelectedDateRange(range);
        departurePicker.data("daterangepicker").setStartDate(start);
      }
    );

    // Initialize selected date range if it's already set
    if (selectedDateRange) {
      const [start, end] = selectedDateRange.split(" to ");
      departurePicker.data("daterangepicker").setStartDate(start);
      returnPicker.data("daterangepicker").setEndDate(end);
    }
  }, []);

  // ---------------------- MODALS-----------------------------
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

  const handleCloseModal1 = () => setShowModal1(false);
  const handleShowModal1 = () => setShowModal1(true);

  const handleCloseModal2 = () => setShowModal2(false);
  const handleShowModal2 = () => setShowModal2(true);

  const handleCloseModal3 = () => setShowModal3(false);
  const handleShowModal3 = () => setShowModal3(true);

  const [inputValue, setInputValue] = useState("");

  const handleCloseModal4 = () => {
    // Update the input field value based on the selected item
    switch (activeItem) {
      case 0:
        setInputValue("Economy");
        break;
      case 1:
        setInputValue("Premium Economy");
        break;
      case 2:
        setInputValue("Business");
        break;
      case 3:
        setInputValue("First Class");
        break;
      default:
        setInputValue("");
        break;
    }
    setShowModal4(false);
  };
  const handleShowModal4 = () => setShowModal4(true);

  // ---------------------- ITEMS --------------------------
  const [selectedItemFrom, setSelectedItemFrom] = useState("");
  const [selectedItemTo, setSelectedItemTo] = useState("");
  const listItems = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const handleListItemClickFrom = (item) => {
    setSelectedItemFrom(item);
    handleCloseModal1();
  };
  const handleListItemClickTo = (item) => {
    setSelectedItemTo(item);
    handleCloseModal2();
  };

  // ---------------------- COUNT --------------------------
  const [countDewasa, setCountDewasa] = useState(0);
  const [countAnak, setCountAnak] = useState(0);
  const [countBayi, setCountBayi] = useState(0);
  const [inputValueDewasa, setInputValueDewasa] = useState("");
  const [inputValueAnak, setInputValueAnak] = useState("");
  const [inputValueBayi, setInputValueBayi] = useState("");
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setTotalCount(countDewasa + countAnak + countBayi);
  }, [countDewasa, countAnak, countBayi]);

  const decreaseCountDewasa = () => {
    if (countDewasa > 0) {
      setCountDewasa(countDewasa - 1);
    }
  };

  const increaseCountDewasa = () => {
    if (countDewasa < 10) {
      setCountDewasa(countDewasa + 1);
    }
  };

  const decreaseCountAnak = () => {
    if (countAnak > 0) {
      setCountAnak(countAnak - 1);
    }
  };

  const increaseCountAnak = () => {
    if (countAnak < 10) {
      setCountAnak(countAnak + 1);
    }
  };

  const decreaseCountBayi = () => {
    if (countBayi > 0) {
      setCountBayi(countBayi - 1);
    }
  };

  const increaseCountBayi = () => {
    if (countBayi < 10) {
      setCountBayi(countBayi + 1);
    }
  };

  const handleSaveCount = () => {
    setInputValueDewasa(countDewasa.toString());
    setInputValueAnak(countAnak.toString());
    setInputValueBayi(countBayi.toString());
  };

  // ------------------- ACTIVE LIST --------------------
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  // ------------------- BUTTON SEARCH -----------------
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <Container className="card-container">
      {/* Header */}
      <div className="row">
        <div className="col">
          <header className="d-flex justify-content-center mt-3">
            <img src={banner} alt="Logo" className="img-fluid" />
          </header>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="col-12 col-sm-10">
          <Card className="text-center mt-1 rounded-custom">
            <Card.Body>
              <div className="card-title text-start mb-4">
                <h5 style={{ fontWeight: 700 }}>
                  Pilih jadwal penerbangan spesial di{" "}
                  <span style={{ color: "#7126B5" }}>Tiketku!</span>
                </h5>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    {/* <AirplaneFill size={20} /> */}
                    <span className="align-self-center" color="gray">
                      From
                    </span>
                    <InputGroup className="ms-1">
                      <FormControl
                        placeholder="Enter your text"
                        onClick={handleShowModal1}
                        value={selectedItemFrom}
                      />
                    </InputGroup>
                    <button
                      className="btns-repeat ms-md-3 ms-1 me-0"
                      type="submit"
                    >
                      <Repeat size={18} />
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="d-flex align-items-center">
                    {/* <AirplaneFill size={20} /> */}
                    <span className="align-self-center" color="gray">
                      To
                    </span>
                    <InputGroup className="ms-1 mt-md-0 mt-2">
                      <FormControl
                        placeholder="Enter your text"
                        onClick={handleShowModal2}
                        value={selectedItemTo}
                      />
                    </InputGroup>
                  </div>
                </div>
              </div>
              <hr className="my-4" />
              <div className="row mt-md-2">
                <div className="d-flex flex-column flex-sm-row align-items-start">
                  <div className="col-12 col-md-3">
                    <div>
                      <span>Departure</span>
                      <InputGroup className="">
                        <FormControl
                          placeholder="Enter your text"
                          value={
                            selectedDateRange
                              ? selectedDateRange.split(" to ")[0]
                              : ""
                          }
                          ref={departureInputRef}
                        />
                      </InputGroup>
                    </div>
                  </div>

                  <div className="col-12 col-md-3 d-flex align-items-center ms-1">
                    <div className="ms-md-1">
                      <span>Return</span>
                      <InputGroup className="">
                        <FormControl
                          placeholder="Enter your text"
                          value={
                            selectedDateRange
                              ? selectedDateRange.split(" to ")[1]
                              : ""
                          }
                          ref={returnInputRef}
                        />
                      </InputGroup>
                    </div>
                    <div className="ms-1 form-check form-switch ">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-3 ">
                    <span>Passengers</span>
                    <InputGroup className="">
                      <FormControl
                        placeholder="Enter your text"
                        onClick={handleShowModal3}
                        value={totalCount + " Penumpang"}
                      />
                    </InputGroup>
                  </div>
                  <div className="col-12 col-md-3 ms-md-1">
                    <span>Seat Class</span>
                    <InputGroup className="ms-1">
                      <FormControl
                        placeholder="Enter your text"
                        onClick={handleShowModal4}
                        value={inputValue}
                      />
                    </InputGroup>
                  </div>
                </div>
              </div>
            </Card.Body>
            <Link type="submit" className="btns-long">
              Cari Penerbangan
            </Link>
          </Card>
        </div>
      </div>

      {/* Modal 1 FROM */}
      <Modal show={showModal1} onHide={handleCloseModal1}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="input-group rounded">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" id="search-addon">
              <Search />
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-between rounded p-2">
            <p>Pencarian terkini</p>
            <p style={{ color: "red" }}>Hapus</p>
          </div>
          <ul className="">
            {listItems.map((item, index) => (
              <li key={index} onClick={() => handleListItemClickFrom(item)}>
                {item}
              </li>
            ))}
          </ul>
        </Modal.Body>
      </Modal>

      {/* Modal 2 TO */}
      <Modal show={showModal2} onHide={handleCloseModal2}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="input-group rounded">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" id="search-addon">
              <Search />
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-between rounded p-2">
            <p>Pencarian terkini</p>
            <p style={{ color: "red" }}>Hapus</p>
          </div>
          <ul className="">
            {listItems.map((item, index) => (
              <li key={index} onClick={() => handleListItemClickTo(item)}>
                {item}
              </li>
            ))}
          </ul>
        </Modal.Body>
      </Modal>

      {/* Modal 3 PASSENGERS */}
      <Modal show={showModal3} onHide={handleCloseModal3}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <div className="d-flex align-items-start">
                <div className="col-auto me-1">
                  <PersonFill size={26} />
                </div>
                <div className="col">
                  <p className="mb-0">Dewasa</p>
                  <span style={{ fontWeight: 200, fontSize: 12 }}>
                    (12 Tahun keatas)
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex align-items-center justify-content-end">
                <button
                  className="btns-outline-small"
                  onClick={decreaseCountDewasa}
                >
                  <DashLg />
                </button>
                <button className="btns-outline-number">{countDewasa}</button>
                <button
                  className="btns-outline-small"
                  onClick={increaseCountDewasa}
                >
                  <PlusLg />
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <div className="d-flex align-items-start">
                <div className="col-auto me-1">
                  <PersonFill size={26} />
                </div>
                <div className="col">
                  <p className="mb-0">Anak</p>
                  <span style={{ fontWeight: 200, fontSize: 12 }}>
                    (2-11 Tahun keatas)
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex align-items-center justify-content-end">
                <button
                  className="btns-outline-small"
                  onClick={decreaseCountAnak}
                >
                  <DashLg />
                </button>
                <button className="btns-outline-number">{countAnak}</button>
                <button
                  className="btns-outline-small"
                  onClick={increaseCountAnak}
                >
                  <PlusLg />
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <div className="d-flex align-items-start">
                <div className="col-auto me-1">
                  <PersonFill size={26} />
                </div>
                <div className="col">
                  <p className="mb-0">Bayi</p>
                  <span style={{ fontWeight: 200, fontSize: 12 }}>
                    (Dibawah 2 tahun)
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex align-items-center justify-content-end">
                <button
                  className="btns-outline-small"
                  onClick={decreaseCountBayi}
                >
                  <DashLg />
                </button>
                <button className="btns-outline-number">{countBayi}</button>
                <button
                  className="btns-outline-small"
                  onClick={increaseCountBayi}
                >
                  <PlusLg />
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btns"
            onClick={() => {
              handleCloseModal3();
              handleSaveCount();
            }}
          >
            Simpan
          </button>
        </Modal.Footer>
      </Modal>

      {/* Modal 4 PASSENGERS */}
      <Modal show={showModal4} onHide={handleCloseModal4}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <ul className="list-group list-group-light">
            <li
              className={`list-group-item px-3 border-0 ${
                activeItem === 0 ? "active-list" : ""
              }`}
              onClick={() => handleItemClick(0)}
              aria-current="true"
            >
              <div className="row">
                <div className="col">
                  <div>Economy</div>
                  <div>IDR 4.950.000</div>
                </div>
                <div className="col ikon d-flex align-items-center justify-content-end ">
                  {activeItem === 0 && <CheckCircleFill />}
                </div>
              </div>
            </li>
            <li
              className={`list-group-item px-3 border-0 ${
                activeItem === 1 ? "active-list" : ""
              }`}
              onClick={() => handleItemClick(1)}
            >
              <div className="row">
                <div className="col">
                  <span>Premium Economy</span>
                  <div>IDR 7.550.000</div>
                </div>
                <div className="col d-flex align-items-center justify-content-end ikon">
                  {activeItem === 1 && <CheckCircleFill />}
                </div>
              </div>
            </li>
            <li
              className={`list-group-item px-3 border-0 ${
                activeItem === 2 ? "active-list" : ""
              }`}
              onClick={() => handleItemClick(2)}
            >
              <div className="row">
                <div className="col">
                  <div>Business</div>
                  <div>IDR 29.220.000</div>
                </div>
                <div className="col d-flex align-items-center justify-content-end ikon">
                  {activeItem === 2 && <CheckCircleFill />}
                </div>
              </div>
            </li>
            <li
              className={`list-group-item px-3 border-0 ${
                activeItem === 3 ? "active-list" : ""
              }`}
              onClick={() => handleItemClick(3)}
            >
              <div className="row">
                <div className="col">
                  <div>First Class</div>
                  <div>IDR 87.620.000</div>
                </div>
                <div className="col d-flex align-items-center justify-content-end ikon">
                  {activeItem === 3 && <CheckCircleFill />}
                </div>
              </div>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <button className="btns" onClick={handleCloseModal4}>
            Simpan
          </button>
        </Modal.Footer>
      </Modal>

      {/* Destination section */}
      <div className="destination">
        <h5 className="mt-5 mb-3">Destinasi favorit</h5>
        <div className="d-flex flex-wrap justify-content-start ms-2">
          <button
            className={`btns-country${
              activeButton === 0 ? "" : "-secondary"
            } mx-1 my-1`}
            onClick={() => handleButtonClick(0)}
          >
            <Search /> Semua
          </button>
          <button
            className={`btns-country${
              activeButton === 1 ? "" : "-secondary"
            } mx-1 my-1`}
            onClick={() => handleButtonClick(1)}
          >
            <Search /> Asia
          </button>
          <button
            className={`btns-country${
              activeButton === 2 ? "" : "-secondary"
            } mx-1 my-1`}
            onClick={() => handleButtonClick(2)}
          >
            <Search /> Amerika
          </button>
          <button
            className={`btns-country${
              activeButton === 3 ? "" : "-secondary"
            } mx-1 my-1`}
            onClick={() => handleButtonClick(3)}
          >
            <Search /> Australia
          </button>
          <button
            className={`btns-country${
              activeButton === 4 ? "" : "-secondary"
            } mx-1 my-1`}
            onClick={() => handleButtonClick(4)}
          >
            <Search /> Eropa
          </button>
          <button
            className={`btns-country${
              activeButton === 5 ? "" : "-secondary"
            } mx-1 my-1`}
            onClick={() => handleButtonClick(5)}
          >
            <Search /> Afrika
          </button>
        </div>

        {/* Destination cards */}
        <div className="row mt-4 mb-5">
          <div className="col-12 col-md">
            <div className="card border-0 mt-3 mt-md-2">
              <img src={bangkok} className="card-img-top" alt="..." />
              <div className="card-img-overlay">
                <button
                  className="btns-tags"
                  style={{ position: "absolute", top: "0", right: "0" }}
                >
                  Limited
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Jakarta
                  <ArrowRightShort />
                  Bangkok
                </h5>
                <span className="plane">AirAsia</span>
                <span className="date">20 - 30 Maret 2023</span>
                <span className="price">
                  Mulai dari <span className="idr">IDR 950.000</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md">
            <div className="card border-0 mt-3 mt-md-2">
              <img src={bangkok} className="card-img-top" alt="..." />
              <div className="card-img-overlay">
                <button
                  className="btns-tags"
                  style={{ position: "absolute", top: "0", right: "0" }}
                >
                  Limited
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Jakarta
                  <ArrowRightShort />
                  Bangkok
                </h5>
                <span className="plane">AirAsia</span>
                <span className="date">20 - 30 Maret 2023</span>
                <span className="price">
                  Mulai dari <span className="idr">IDR 950.000</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md">
            <div className="card border-0 mt-3 mt-md-2">
              <img src={sydney} className="card-img-top" alt="..." />
              <div className="card-img-overlay">
                <button
                  className="btns-tags"
                  style={{ position: "absolute", top: "0", right: "0" }}
                >
                  50% OFF
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Jakarta
                  <ArrowRightShort />
                  Sydney
                </h5>
                <span className="plane">AirAsia</span>
                <span className="date">5 - 25 Maret 2023</span>
                <span className="price">
                  Mulai dari <span className="idr">IDR 3.650.000</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md">
            <div className="card border-0 mt-3 mt-md-2">
              <img src={sydney} className="card-img-top" alt="..." />
              <div className="card-img-overlay">
                <button
                  className="btns-tags"
                  style={{ position: "absolute", top: "0", right: "0" }}
                >
                  50% OFF
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Jakarta
                  <ArrowRightShort />
                  Sydney
                </h5>
                <span className="plane">AirAsia</span>
                <span className="date">5 - 25 Maret 2023</span>
                <span className="price">
                  Mulai dari <span className="idr">IDR 3.650.000</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md">
            <div className="card border-0 mt-3 mt-md-2">
              <img src={bangkok} className="card-img-top" alt="..." />
              <div className="card-img-overlay">
                <button
                  className="btns-tags"
                  style={{ position: "absolute", top: "0", right: "0" }}
                >
                  Limited
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Jakarta
                  <ArrowRightShort />
                  Bangkok
                </h5>
                <span className="plane">AirAsia</span>
                <span className="date">20 - 30 Maret 2023</span>
                <span className="price">
                  Mulai dari <span className="idr">IDR 950.000</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
