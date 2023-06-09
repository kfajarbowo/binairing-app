import React, { useEffect, useRef, useState } from "react";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import {
  AirplaneFill,
  ArrowRightShort,
  Calendar,
  PersonAdd,
  Repeat,
  Search,
} from "react-bootstrap-icons";
import bangkok from "../../assets/bangkok.png";
import sydney from "../../assets/sydney.png";
import "daterangepicker/daterangepicker.css";
import $ from "jquery";
import "daterangepicker";

const Home = () => {
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

  return (
    <Container className="card-container">
      {/* Header */}
      <div class="row">
        <div class="col">
          <header class="py-3 mt-2 header"></header>
        </div>
      </div>

      {/* Flight search */}
      <div className="card text-center mt-1">
        <div className="card-body">
          <div className="card-title text-start">
            <h5>Pilih jadwal penerbangan spesial di Tiketku!</h5>
          </div>

          {/* Flight details */}
          <div className="row">
            <div className="d-flex align-items-center">
              <AirplaneFill size={50} />
              <span className="align-self-center ms-2" color="gray">
                From
              </span>
              <InputGroup className="ms-2">
                <FormControl placeholder="Enter your text" />
              </InputGroup>
              <button className="btns ms-4 me-4" type="submit">
                <Repeat size={16} />
              </button>
              <AirplaneFill size={50} />
              <span className="align-self-center ms-2" color="gray">
                To
              </span>
              <InputGroup className="ms-2">
                <FormControl placeholder="Enter your text" />
              </InputGroup>
            </div>
          </div>

          {/* Date and passenger details */}
          <div className="row">
            <div className="d-flex align-items-center">
              <Calendar size={20} />
              <span className="align-self-center ms-2" color="gray">
                Date
              </span>
              <div className="col m-1">
                <span>Departure</span>
                <InputGroup className="ms-2" type="text">
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
              <div className="col m-1">
                <span>Return</span>
                <InputGroup className="ms-2" type="text">
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
              <div class="form-check form-switch ms-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  checked
                />
              </div>
              <PersonAdd size={26} />
              <span className="align-self-center ms-2">Tp</span>
              <div className="col m-1">
                <span>Passengers</span>
                <InputGroup className="ms-2">
                  <FormControl placeholder="Enter your text" />
                </InputGroup>
              </div>
              <div className="col m-1">
                <span>Seat Class</span>
                <InputGroup className="ms-2">
                  <FormControl placeholder="Enter your text" />
                </InputGroup>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="btns-long">
          Cari Penerbangan
        </button>
      </div>

      {/* Destination section */}
      <div className="destination">
        <h4 className="mt-4">Destinasi favorit</h4>
        <div className="justify-content-start">
          <button className="btns ms-3">
            <Search /> Semua
          </button>
          <button className="btns-secondary ms-3">
            <Search /> Asia
          </button>
          <button className="btns-secondary ms-3">
            <Search /> Amerika
          </button>
          <button className="btns-secondary ms-3">
            <Search /> Australia
          </button>
          <button className="btns-secondary ms-3">
            <Search /> Eropa
          </button>
          <button className="btns-secondary ms-3">
            <Search /> Afrika
          </button>
        </div>

        {/* Destination cards */}
        <div className="row mt-4">
          <div className="col">
            <div className="card border-0">
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
                  Jakarta <ArrowRightShort /> bangkok
                </h5>
                <span className="plane">AirAsia</span>
                <span className="date">20 - 30 Maret 2023</span>
                <span className="price">
                  Mulai dari <span className="idr">IDR 950.000</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
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
                  Jakarta <ArrowRightShort /> bangkok
                </h5>
                <span className="plane">AirAsia</span>
                <span className="date">20 - 30 Maret 2023</span>
                <span className="price">
                  Mulai dari <span className="idr">IDR 950.000</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
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
                  Jakarta <ArrowRightShort /> Sydney
                </h5>
                <span className="plane">AirAsia</span>
                <span className="date">5 - 25 Maret 2023</span>
                <span className="price">
                  Mulai dari <span className="idr">IDR 3.650.000</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
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
                  Jakarta <ArrowRightShort /> Sydney
                </h5>
                <span className="plane">AirAsia</span>
                <span className="date">5 - 25 Maret 2023</span>
                <span className="price">
                  Mulai dari <span className="idr">IDR 3.650.000</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
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
                  Jakarta <ArrowRightShort /> bangkok
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
