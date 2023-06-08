import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { BsBox } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FiDollarSign } from "react-icons/fi";

const Search = () => {
  return (
    <Container>
      <Row>
        <h3>Pilih Penerbangan</h3>
      </Row>
      <Row>
        <Col md={8}>
          <Button className="w-100" style={{ background: "#A06ECE" }}>
            JKT MLB - 2 Penumpang - Economy
          </Button>
        </Col>
        <Col md={4}>
          <Button className="w-100" style={{ background: "#73CA5C" }}>
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
            <Card.Body>
              <Card.Title>Selasa</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                01/03/2023
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Filters */}
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
        <Col sm={8}>2 of 2</Col>
      </Row>
    </Container>
  );
};

export default Search;
