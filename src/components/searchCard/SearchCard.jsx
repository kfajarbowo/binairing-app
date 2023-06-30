import React, { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import {
  CheckCircleFill,
  DashLg,
  PersonFill,
  PlusLg,
  Repeat,
  Search,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "daterangepicker/daterangepicker.css";
import $ from "jquery";
import "daterangepicker";
import "./searchcard.css";
import { useDispatch, useSelector } from "react-redux";
import { getFlight } from "../../redux/action/flight";
import { getCity } from "../../redux/action/city";

const SearchCard = () => {
  // -------------------------- API FLIGHT ----------------------
  const navigate = useNavigate();

  //get CITY
  const dispatch = useDispatch();
  const { city } = useSelector((state) => state.cityTable);
  const { flight } = useSelector((state) => state.flightTable);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [kelas, setKelas] = useState("");

  useEffect(() => {
    dispatch(getCity());
    dispatch(getFlight(from, to, selectedDateRange));
  }, [dispatch]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(city); // Initialize with all cities

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    filterCities(searchTerm);
  };

  const filterCities = (searchTerm) => {
    const filteredCities = city.filter((item) =>
      item.cityName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filteredCities);
  };

  // -------------------------- DATE PICKER-----------------------
  // Refs for input elements
  const departureInputRef = useRef();
  const returnInputRef = useRef();

  // State for selected date range
  const [selectedDateRange, setSelectedDateRange] = useState("");
  const [isReturnEnabled, setIsReturnEnabled] = useState(true);

  useEffect(() => {
    // Initialize date picker for departure date
    const departurePicker = $(departureInputRef.current).daterangepicker(
      {
        minDate: new Date(), // Configuration options for departure date picker
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
        minDate: new Date(), // Configuration options for return date picker
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

  const handleFormSwitchChange = () => {
    setIsReturnEnabled(!isReturnEnabled);
  };

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
    const selected = item.cityName + " - (" + item.cityCode + ")";
    setSelectedItemFrom(selected);
    handleCloseModal1();
    setFrom(item.cityCode);
    filterCities(searchTerm); // Reset the filtering
  };

  const handleListItemClickTo = (item) => {
    const selected = item.cityName + " - (" + item.cityCode + ")";
    setSelectedItemTo(selected);
    handleCloseModal2();
    setTo(item.cityCode);
    filterCities(searchTerm); // Reset the filtering
  };

  const handleListItemClickClear = () => {
    setSearchTerm("");
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

  const handleItemClick = (kelas, index) => {
    setActiveItem(index);
    setKelas(kelas);
  };

  // ------------------- BUTTON SEARCH -----------------
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const handleButtonCariPenerimaanClick = () => {
    const [startDate, endDate] = selectedDateRange.split(" to ");
    navigate(
      `/search?from=${encodeURIComponent(from)}&to=${encodeURIComponent(
        to
      )}&tgl_barangkat=${startDate}&dewasa=${encodeURIComponent(
        parseInt(inputValueDewasa) + parseInt(inputValueAnak)
      )}&bayi=${encodeURIComponent(inputValueBayi)}&kelas=${encodeURIComponent(
        kelas
      )}&kelas_name=${encodeURIComponent(inputValue)}`
    );
  };

  // ------------------------
  const handleSwapInputs = () => {
    const temp = selectedItemFrom;
    setSelectedItemFrom(selectedItemTo);
    setSelectedItemTo(temp);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-12">
          <div className="card text-center mt-1 rounded-custom">
            <div className="card-body">
              <div className="card-title text-start mb-4">
                <h5 style={{ fontWeight: 700 }}>
                  Pilih jadwal penerbangan spesial di{" "}
                  <span style={{ color: "#7126B5" }}>Tiketku!</span>
                </h5>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <span className="align-self-center" color="gray">
                      From
                    </span>
                    <div className="input-group ms-1">
                      <input
                        className="form-control"
                        placeholder="Enter your text"
                        onClick={handleShowModal1}
                        value={selectedItemFrom}
                      />
                    </div>
                    <button
                      className="btns-repeat ms-md-3 ms-1 me-0"
                      type="submit"
                      onClick={handleSwapInputs}
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
                    <div className="input-group ms-1 mt-md-0 mt-2">
                      <input
                        className="form-control"
                        placeholder="Enter your text"
                        onClick={handleShowModal2}
                        value={selectedItemTo}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-4" />
              <div className="row mt-md-2">
                <div className="d-flex flex-column flex-sm-row align-items-start justify-content-between">
                  <div className="col-12 col-md-3">
                    <div>
                      <span>Departure</span>
                      <div className="input-group">
                        <input
                          className="form-control"
                          placeholder="Enter your text"
                          value={
                            selectedDateRange
                              ? selectedDateRange.split(" to ")[0]
                              : ""
                          }
                          ref={departureInputRef}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-4 ms-1 ms-md-1">
                    <div className="row align-items-center">
                      <div className="col">
                        <span>Return</span>
                        <div className="input-group">
                          <input
                            className="form-control"
                            placeholder="Enter your text"
                            value={
                              isReturnEnabled
                                ? selectedDateRange
                                  ? selectedDateRange.split(" to ")[1]
                                  : ""
                                : ""
                            }
                            ref={returnInputRef}
                            disabled={!isReturnEnabled}
                          />
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckChecked"
                            onChange={handleFormSwitchChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-2 ms-1 ms-md-1">
                    <span>Passengers</span>
                    <div className="input-group">
                      <input
                        className="form-control"
                        placeholder="Enter your text"
                        onClick={handleShowModal3}
                        value={totalCount + " Penumpang"}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-2 ms-1 ms-md-1">
                    <span>Seat Class</span>
                    <div className="input-group">
                      <input
                        className="form-control"
                        placeholder="Enter your text"
                        onClick={handleShowModal4}
                        value={inputValue}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="btns-long"
              onClick={handleButtonCariPenerimaanClick}
            >
              Cari Penerbangan
            </button>
          </div>
        </div>
      </div>

      {/* Modal 1 FROM */}
      <Modal show={showModal1} onHide={handleCloseModal1}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="input-group rounded">
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <span className="input-group-text border-0" id="search-addon">
              <Search />
            </span>
          </div>

          {searchTerm && (
            <ul className="mt-3 list-group">
              {filteredItems.map((item) => (
                <li
                  key={item.idCity}
                  onClick={() => handleListItemClickFrom(item)}
                  className="list-group-item list-group-item-action"
                >
                  {item.cityName}
                </li>
              ))}
            </ul>
          )}
        </Modal.Body>
      </Modal>

      {/* Modal 2 TO */}
      <Modal show={showModal2} onHide={handleCloseModal2}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="input-group rounded">
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <span className="input-group-text border-0" id="search-addon">
              <Search />
            </span>
          </div>

          {searchTerm && (
            <ul className="mt-3 list-group">
              {filteredItems.map((item) => (
                <li
                  key={item.idCity}
                  onClick={() => handleListItemClickTo(item)}
                  className="list-group-item list-group-item-action"
                >
                  {item.cityName}
                </li>
              ))}
            </ul>
          )}
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
            {flight.map((item, index) => (
              <li
                key={index}
                className={`list-group-item px-3 border-0 ${
                  activeItem === index ? "active-list" : ""
                }`}
                onClick={() => handleItemClick(item.kelas.idKelas, index)}
                aria-current="true"
              >
                <div className="row">
                  <div className="col">
                    <div>{item.kelas.namaKelas}</div>
                    <div>{item.hargaTiket}</div>
                  </div>
                  <div className="col ikon d-flex align-items-center justify-content-end">
                    {activeItem === index && <CheckCircleFill />}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <button className="btns" onClick={handleCloseModal4}>
            Simpan
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SearchCard;
