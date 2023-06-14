import React from "react";
import { Container } from "react-bootstrap";
import {
  ArrowLeft,
  BellFill,
  CheckCircleFill,
  Funnel,
  FunnelFill,
  RecordCircleFill,
  RecordFill,
  Search,
} from "react-bootstrap-icons";
import "../Notification/Notification.css";

const Notification = () => {
  return (
    <Container>
      <h3 className="mt-5 notif-header">Notifikasi</h3>
      <div className="col-11 mx-auto align-items-center">
        <div className="row mt-3 mb-3">
          <div className="col-md-10">
            <button
              className="btns-notif btn-block w-100 d-flex align-items-center"
              type="submit"
            >
              <ArrowLeft className="me-2" />
              <span>Beranda</span>
            </button>
          </div>
          <div className="col-md-2 mt-3 mt-md-0 d-flex align-items-center">
            <button className="btns-outline-filter flex-grow-1" type="submit">
              <Funnel className="me-2" />
              <span>Filter</span>
            </button>
            <Search className="icons ms-2" size={28} />
          </div>
        </div>

        <div className="col-12 col-md-10">
          <ul className="list-group list-group-light">
            <li className="list-group-item px-3 border-0">
              <div className="d-flex">
                <div className="col-auto icons me-3">
                  <BellFill size={20} />
                </div>
                <div className="col-11">
                  <div className="row">
                    <div className="d-flex justify-content-between">
                      <span
                        style={{
                          fontWeight: 400,
                          color: "#8A8A8A",
                          fontSize: "14px",
                        }}
                      >
                        Promosi
                      </span>
                      <div>
                        <span
                          style={{
                            fontWeight: 400,
                            color: "#8A8A8A",
                            fontSize: "14px",
                          }}
                        >
                          20 Maret, 14:40
                        </span>
                        <RecordFill style={{ color: "green" }} />
                      </div>
                    </div>
                    <div>Dapatkan Potongan 50% Tiket!</div>
                    <span
                      style={{
                        fontWeight: 400,
                        color: "#8A8A8A",
                        fontSize: "14px",
                      }}
                    >
                      Syarat dan Ketentuan berlaku!
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <hr class="my-1 " />
        </div>
      </div>
    </Container>
  );
};

export default Notification;
