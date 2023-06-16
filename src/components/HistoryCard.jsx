import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { BsFillAirplaneFill, BsGeoAltFill } from "react-icons/bs";

const HistoryCard = () => {
  // properti CSS untuk Heading
  const headingStyle = {
    fontSize: "var(--title-font-16)",
    fontWeight: "var(--font-bold)",
  };

  // properti CSS untuk Title
  const titleStyle = {
    fontSize: "var(--body-font-14)",
    fontWeight: "var(--font-bold)",
  };

  // properti CSS untuk SubTitle
  const subtitleStyle = {
    fontSize: "var(--body-font-14)",
    fontWeight: "var(--font-bold)",
    color: "var(--darkblue-04)",
  };

  // properti CSS untuk paragraph
  const paragraphStyle = {
    fontSize: "var(--body-font-12)",
  };

  // properti CSS untuk issued
  const issuedStyle = {
    borderRadius: "1rem",
    border: "none",
    backgroundColor: "var(--success)",
    fontSize: "var(--body-font-14)",
  };

  // properti CSS untuk unpaid
  const unpaidStyle = {
    borderRadius: "1rem",
    border: "none",
    backgroundColor: "var(--error)",
    fontSize: "var(--body-font-14)",
  };

  // properti CSS untuk cancel
  const cancelStyle = {
    borderRadius: "1rem",
    border: "none",
    backgroundColor: "var(--Neutral--03)",
    fontSize: "var(--body-font-14)",
  };

  return (
    <div>
      <div className="issued mb-3">
        <h6 style={headingStyle}>Maret 2023</h6>
        <Card>
          <Card.Header className="border-0">
            <Button style={issuedStyle}>Issued</Button>
          </Card.Header>
          <Card.Body>
            <Card.Text className="d-flex align-items-center justify-content-between">
              <div className="d-flex justify-content-center gap-2">
                <BsGeoAltFill />
                <div>
                  <h6 style={titleStyle}>Jakarta</h6>
                  <p style={paragraphStyle} className="mb-1">
                    5 Maret 2023
                  </p>
                  <p style={paragraphStyle}>19:10</p>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <BsFillAirplaneFill />
                <hr className="w-100" />
                <p style={paragraphStyle}>4h 0m</p>
              </div>
              <div className="d-flex justify-content-center gap-2">
                <BsGeoAltFill />
                <div>
                  <h6 style={titleStyle}>Melbourne</h6>
                  <p style={paragraphStyle} className="mb-1">
                    5 Maret 2023
                  </p>
                  <p style={paragraphStyle}>21:10</p>
                </div>
              </div>
            </Card.Text>
            <hr />
            <Card.Text className="d-flex align-items-center justify-content-between">
              <div>
                <h6 style={paragraphStyle} className="fw-bold">
                  Booking Code:
                </h6>
                <p style={paragraphStyle}>6723y2GHK</p>
              </div>
              <div>
                <h6 style={paragraphStyle} className="fw-bold">
                  Class:
                </h6>
                <p style={paragraphStyle}>Economy</p>
              </div>
              <h6 style={subtitleStyle}>IDR 9.850.000</h6>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="unpaid mb-3">
        <Card>
          <Card.Header className="border-0">
            <Button style={unpaidStyle}>Unpaid</Button>
          </Card.Header>
          <Card.Body>
            <Card.Text className="d-flex align-items-center justify-content-between">
              <div className="d-flex justify-content-center gap-2">
                <BsGeoAltFill />
                <div>
                  <h6 style={titleStyle}>Jakarta</h6>
                  <p style={paragraphStyle} className="mb-1">
                    5 Maret 2023
                  </p>
                  <p style={paragraphStyle}>19:10</p>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <BsFillAirplaneFill />
                <hr className="w-100" />
                <p style={paragraphStyle}>4h 0m</p>
              </div>
              <div className="d-flex justify-content-center gap-2">
                <BsGeoAltFill />
                <div>
                  <h6 style={titleStyle}>Melbourne</h6>
                  <p style={paragraphStyle} className="mb-1">
                    5 Maret 2023
                  </p>
                  <p style={paragraphStyle}>21:10</p>
                </div>
              </div>
            </Card.Text>
            <hr />
            <Card.Text className="d-flex align-items-center justify-content-between">
              <div>
                <h6 style={paragraphStyle} className="fw-bold">
                  Booking Code:
                </h6>
                <p style={paragraphStyle}>6723y2GHK</p>
              </div>
              <div>
                <h6 style={paragraphStyle} className="fw-bold">
                  Class:
                </h6>
                <p style={paragraphStyle}>Economy</p>
              </div>
              <h6 style={subtitleStyle}>IDR 9.850.000</h6>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="cancelled">
        <h6 style={headingStyle}>Februari 2023</h6>
        <Card>
          <Card.Header className="border-0">
            <Button style={cancelStyle}>Cancelled</Button>
          </Card.Header>
          <Card.Body>
            <Card.Text className="d-flex align-items-center justify-content-between">
              <div className="d-flex justify-content-center gap-2">
                <BsGeoAltFill />
                <div>
                  <h6 style={titleStyle}>Jakarta</h6>
                  <p style={paragraphStyle} className="mb-1">
                    5 Maret 2023
                  </p>
                  <p style={paragraphStyle}>19:10</p>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <BsFillAirplaneFill />
                <hr className="w-100" />
                <p style={paragraphStyle}>4h 0m</p>
              </div>
              <div className="d-flex justify-content-center gap-2">
                <BsGeoAltFill />
                <div>
                  <h6 style={titleStyle}>Melbourne</h6>
                  <p style={paragraphStyle} className="mb-1">
                    5 Maret 2023
                  </p>
                  <p style={paragraphStyle}>21:10</p>
                </div>
              </div>
            </Card.Text>
            <hr />
            <Card.Text className="d-flex align-items-center justify-content-between">
              <div>
                <h6 style={paragraphStyle} className="fw-bold">
                  Booking Code:
                </h6>
                <p style={paragraphStyle}>6723y2GHK</p>
              </div>
              <div>
                <h6 style={paragraphStyle} className="fw-bold">
                  Class:
                </h6>
                <p style={paragraphStyle}>Economy</p>
              </div>
              <h6 style={subtitleStyle}>IDR 9.850.000</h6>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default HistoryCard;
