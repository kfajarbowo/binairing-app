import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { BsArrowRight, BsGeoAltFill } from "react-icons/bs";

const HistoryCard = () => {
  return (
    <div>
      <h6>Maret 2023</h6>
      <Card>
        <Card.Header className="border-0">
          <Button variant="success">Issued</Button>
        </Card.Header>
        <Card.Body>
          <Card.Text className="d-flex align-items-center justify-content-between">
            <div className="d-flex justify-content-center">
              <BsGeoAltFill />
              <div>
                <h6>Jakarta</h6>
                <p>5 Maret 2023</p>
                <p>19:10</p>
              </div>
            </div>
            <div>
              <p>4h 0m</p>
              <BsArrowRight />
            </div>
            <div className="d-flex justify-content-center">
              <BsGeoAltFill />
              <div>
                <h6>Melbourne</h6>
                <p>5 Maret 2023</p>
                <p>21:10</p>
              </div>
            </div>
          </Card.Text>
          <hr />
          <Card.Text className="d-flex align-items-center justify-content-between">
            <div>
              <h6>Booking Code:</h6>
              <p>6723y2GHK</p>
            </div>
            <div>
              <h6>Class:</h6>
              <p>Economy</p>
            </div>
            <h6>IDR 9.850.000</h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HistoryCard;
