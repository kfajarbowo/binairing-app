import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import { Container } from "react-bootstrap";
import { ArrowRightShort, Search } from "react-bootstrap-icons";
import banner from "../../assets/banner.png";
import bangkok from "../../assets/bangkok.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPromo } from "../../redux/action/promotion";
import SearchCard from "../../components/searchCard/SearchCard";

const Home = () => {
  //get PROMO
  const dispatch = useDispatch();
  const { promo } = useSelector((state) => state.promoTable);

  useEffect(() => {
    dispatch(getPromo());
  }, [dispatch]);

  // ------------------- BUTTON SEARCH -----------------
  const [activeButton, setActiveButton] = useState(0);
  const [filteredPromo, setFilteredPromo] = useState(promo);
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredPromo.length / itemsPerPage);

  useEffect(() => {
    if (activeButton === 0) {
      setFilteredPromo(promo);
    } else if (activeButton === 1) {
      const filteredData = promo.filter(
        (item) => item?.kotaKeberangkatan?.cityName === "Medan"
      );
      setFilteredPromo(filteredData);
    } else if (activeButton === 2) {
      const filteredData = promo.filter(
        (item) => item?.kotaKedatangan?.cityName === "Banda Aceh"
      );
      setFilteredPromo(filteredData);
    } else if (activeButton === 3) {
      const filteredData = promo.filter(
        (item) => item?.kotaKedatangan?.cityName === "Batam"
      );
      setFilteredPromo(filteredData);
    }
    setCurrentPage(1); // Reset to first page when filters change
  }, [activeButton, promo]);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPromo.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Container className="card-container">
      {/* Header */}
      <div className="row">
        <div className="col">
          <header className="d-flex justify-content-center mt-3 mb-3">
            <Link to="/">
              <img src={banner} alt="Logo" className="img-fluid" />
            </Link>
          </header>
        </div>
      </div>

      {/* SEARCH CARD */}
      <SearchCard />

      {/* Destination section */}
      <div className="destination">
        <h5 className="mt-5 mb-3 fw-bold">Destinasi favorit</h5>
        <div className="d-flex flex-wrap justify-content-start ms-2">
          <button
            className={`btns-country${
              activeButton === 0 ? "" : "-secondary"
            } mx-1 my-1`}
            onClick={() => handleButtonClick(0)}
          >
            <Search /> Semua Destinasi
          </button>
          <button
            className={`btns-country${
              activeButton === 1 ? "" : "-secondary"
            } mx-1 my-1`}
            onClick={() => handleButtonClick(1)}
          >
            <Search /> Medan
          </button>
          <button
            className={`btns-country${
              activeButton === 2 ? "" : "-secondary"
            } mx-1 my-1`}
            onClick={() => handleButtonClick(2)}
          >
            <Search /> Banda Aceh
          </button>
          <button
            className={`btns-country${
              activeButton === 3 ? "" : "-secondary"
            } mx-1 my-1`}
            onClick={() => handleButtonClick(3)}
          >
            <Search /> Batam
          </button>
        </div>

        <div className="row mt-4 mb-5">
          {/* CARD INTEGRATION WITH API */}
          {currentItems?.length > 0 ? (
            currentItems.map((item) => (
              <div className="col-6 col-md-3 col-lg-3" key={item?.idJadwal}>
                <div className="card border-0 mt-3 mt-md-2 card-custom">
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
                    <h6 className="card-title">
                      {item?.kotaKeberangkatan?.cityName}
                      <ArrowRightShort />
                      {item?.kotaKedatangan?.cityName}
                    </h6>
                    <h6 className="plane">{item?.maskapai?.namaMaskapai}</h6>
                    <h6 className="date">20 - 30 Maret 2023</h6>
                    <h6 className="price">
                      Mulai dari{" "}
                      <span className="idr">
                        IDR {item?.hargaTiket.toLocaleString("id-ID")}
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No promo available.</p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="d-flex justify-content-center">
            <ul className="pagination ">
              <li
                className={`page-item${currentPage === 1 ? " disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index}
                  className={`page-item${
                    currentPage === index + 1 ? " active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item${
                  currentPage === totalPages ? " disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Home;
