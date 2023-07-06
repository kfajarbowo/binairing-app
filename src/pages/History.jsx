import React, { useState, useEffect } from 'react';
import {
	Button,
	Col,
	Container,
	Form,
	InputGroup,
	Modal,
	Row,
} from 'react-bootstrap';
import { BsArrowLeftShort, BsFunnel, BsSearch } from 'react-icons/bs';
import HistoryCard from '../components/HistoryCard';
import logoMaskapai from '../assets/logoMaskapai.png';
import { Link } from 'react-router-dom';

// add me
import { getAllBooking } from '../redux/action/checkout';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const History = () => {
	// properti CSS untuk Heading
	const headingStyle = {
		fontSize: 'var(--heading-font-20)',
		fontWeight: 'var(--font-bold)',
	};

	// properti CSS untuk SubHeading
	const subheadingStyle = {
		fontSize: 'var(--title-font-18)',
		fontWeight: 'var(--font-bold)',
		color: 'var(--darkblue-04)',
	};

	// properti CSS untuk SubHeading 2
	const subheading2Style = {
		fontSize: 'var(--title-font-18)',
		color: 'black',
	};

	// properti CSS untuk Title
	const titleStyle = {
		fontSize: 'var(--title-font-16)',
		fontWeight: 'var(--font-bold)',
	};

	// properti CSS untuk paragraph
	const paragraphStyle = {
		fontSize: 'var(--body-font-14)',
	};

	// properti CSS untuk SubParagraph
	const subparagraphStyle = {
		fontSize: 'var(--body-font-12)',
		color: 'var(--darkblue-03)',
		fontWeight: 'var(--font-bold)',
	};

	// properti CSS untuk button
	const buttonStyle = {
		borderRadius: '8px',
		backgroundColor: 'var(--darkblue-04)',
		border: 'none',
		fontSize: 'var(--body-font-14)',
	};

	// properti CSS untuk detail
	const detailStyle = {
		borderRadius: '1rem',
		backgroundColor: 'var(--success)',
		border: 'none',
		fontSize: 'var(--body-font-14)',
	};

	//Function Modal Search
	const [showSearch, setShowSearch] = useState(false);
	const handleCloseSearch = () => setShowSearch(false);
	const handleShowSearch = () => setShowSearch(true);

	//Function Modal Filter
	const [showFilter, setShowFilter] = useState(false);
	const handleCloseFilter = () => setShowFilter(false);
	const handleShowFilter = () => setShowFilter(true);

	// add me
	const [isCardClicked, setIsCardClicked] = useState(false);
	const [selectedCardIndex, setSelectedCardIndex] = useState(null);
	const navigate = useNavigate();

	const [isFullWidth, setIsFullWidth] = useState(false);

	const handleClick = index => {
		setIsCardClicked(true);
		setSelectedCardIndex(index);
		setIsFullWidth(true);
	};

	const dispatch = useDispatch();

	const { token } = useSelector(state => state.authTable);

	const { getAllBookingResult } = useSelector(state => state.bookingTable);

	useEffect(() => {
		dispatch(getAllBooking(token));
	}, [dispatch]);

	// console.log(getAllBookingResult);
	const handleCetakTiket = event => {
		const idBook = event.target.value;

		navigate('/ticket', { state: { idBook } });
	};

	const handlePayment = event => {
		// const values = event.target.value.split(',');
		// const idBooking = values[0];
		// const idScheduleHistory = values[1];
		const getBookingIds = event.target.value;
		navigate('/payment', { state: { getBookingIds } });
		// console.log(getBookingIds)
	};
	const penumpang = Math.floor(
		getAllBookingResult?.totalHarga / getAllBookingResult?.jadwal?.hargaTiket
	);

	return (
		<Container className="mt-5">
			{/* Page Title */}
			<Row>
				<Col>
					<h5 style={headingStyle}>Riwayat Pemesanan</h5>
				</Col>
			</Row>

			{/* Button, Filter, Search */}
			<Row className="mt-3">
				<div className="d-flex flex-row align-items-center gap-4 justify-content-center">
					<Button
						className="w-100 text-start"
						style={{
							backgroundColor: 'var(--darkblue-04)',
							border: 'none',
						}}
					>
						<Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
							<BsArrowLeftShort size={24} />
							Beranda
						</Link>
					</Button>
					<Button
						variant="outlined"
						className="d-flex flex-row gap-2"
						onClick={handleShowFilter}
						style={{
							borderColor: 'var(--darkblue-04)',
							color: 'var(--darkblue-04)',
						}}
					>
						<BsFunnel size={20} />
						Filter
					</Button>
					<BsSearch
						size={20}
						onClick={handleShowSearch}
						style={{ cursor: 'pointer' }}
					/>
				</div>
			</Row>

			{/* Main Content */}
			<Row className="mt-4">
				{/* Kolom Kiri Riwayat Pesanan  */}
				<Col>
					<HistoryCard
						getDetailBookingResult={getAllBookingResult}
						handleClick={handleClick}
					/>
				</Col>

				{/* Kolom Kanan Riwayat Pesanan  */}
				{isCardClicked && selectedCardIndex != null && (
					<Col>
						<div className="mt-3">
							<div className="d-flex align-items-center justify-content-between">
								<h5 className="fw-bold" style={subheading2Style}>
									Detail Penerbangan
								</h5>
								{/* <Button style={detailStyle}>Issued</Button> */}
							</div>
							<h6 style={subheading2Style}>
								Booking Code:
								<span style={subheadingStyle}>
									{' '}
									{getAllBookingResult[selectedCardIndex]?.bookingId}
								</span>{' '}
							</h6>
							<div className="d-flex justify-content-between align-items-center">
								<h6 style={titleStyle}>
									{
										getAllBookingResult[selectedCardIndex]?.jadwal
											?.jamKeberangkatan
									}
								</h6>
								<h6 style={subparagraphStyle}>Keberangkatan</h6>
							</div>
							<p className="mb-0" style={paragraphStyle}>
								{
									getAllBookingResult[selectedCardIndex]?.jadwal
										?.tglKeberangkatan
								}
							</p>
							<p style={paragraphStyle}>
								{
									getAllBookingResult[selectedCardIndex]?.jadwal
										.kotaKeberangkatan?.cityAirport
								}
								- Terminal 1A Domestik
							</p>
						</div>

						<hr />

						<Row className="d-flex align-items-center">
							<Col md={1}>
								<img src={logoMaskapai} alt="" />
							</Col>
							<Col md="auto">
								<h6 className="fw-bold" style={paragraphStyle}>
									{
										getAllBookingResult[selectedCardIndex]?.jadwal?.maskapai
											?.kodeMaskapai
									}{' '}
									-{' '}
									{getAllBookingResult[selectedCardIndex]?.jadwal?.namaMaskapai}
								</h6>
								<h6 className="fw-bold mb-4" style={paragraphStyle}>
									{
										getAllBookingResult[selectedCardIndex]?.jadwal?.maskapai
											?.kodeMaskapai
									}{' '}
									- 203
								</h6>
								<h6 className="fw-bold" style={paragraphStyle}>
									Informasi:
								</h6>
								<p className="mb-0" style={paragraphStyle}>
									Penumpang 1: Mr. Harry Potter
								</p>
								<p style={paragraphStyle}>ID: 1234567</p>
								<p className="mb-0" style={paragraphStyle}>
									Penumpang 1: Miss Hermione
								</p>
								<p style={paragraphStyle}>ID: 789658</p>
							</Col>
						</Row>

						<hr />

						<div className="div">
							<div className="d-flex justify-content-between align-items-center">
								<h6 style={titleStyle}>
									{
										getAllBookingResult[selectedCardIndex]?.jadwal
											?.jamKedatangan
									}
								</h6>
								<h6 style={subparagraphStyle}>Kedatangan</h6>
							</div>
							<p className="mb-0" style={paragraphStyle}>
								{getAllBookingResult[selectedCardIndex]?.jadwal?.tglKedatangan}
							</p>
							<p className="fw-bold" style={paragraphStyle}>
								{
									getAllBookingResult[selectedCardIndex]?.jadwal?.kotaKedatangan
										?.cityAirport
								}
							</p>
						</div>

						<hr />

						<div>
							<h5 className="fw-bold" style={paragraphStyle}>
								Rincian Harga
							</h5>
							<div className="d-flex justify-content-between align-items-center">
								<p style={paragraphStyle}>
									{getAllBookingResult[selectedCardIndex]?.jmlPenumpang}{' '}
									Penumpang
								</p>
								<p style={paragraphStyle}>
									{getAllBookingResult[selectedCardIndex]?.jadwal?.hargaTiket}
								</p>
							</div>
							<div className="d-flex justify-content-between align-items-center">
								<p style={paragraphStyle}>1 Baby</p>
								<p style={paragraphStyle}>IDR 0</p>
							</div>
							{/* <div className='d-flex justify-content-between align-items-center'>
                                <p style={paragraphStyle}>Tax</p>
                                <p style={paragraphStyle}>{getAllBookingResult[selectedCardIndex]?.totalHarga}</p>
                            </div> */}
						</div>

						<hr />

						<div className="d-flex justify-content-between align-items-center">
							<h5 style={titleStyle}>Total</h5>
							<h4 style={subheadingStyle}>
								{getAllBookingResult[selectedCardIndex]?.totalHarga}
							</h4>
						</div>

						{getAllBookingResult[selectedCardIndex]?.paid ? (
							<Button
								variant="primary"
								style={buttonStyle}
								value={getAllBookingResult[selectedCardIndex]?.bookingId}
								className="my-4 w-100"
								onClick={handleCetakTiket}
							>
								Cetak Tiket
							</Button>
						) : (
							<Button
								variant="danger"
								style={buttonStyle}
								onClick={handlePayment}
								value={getAllBookingResult[selectedCardIndex]?.bookingId}
								className="my-4 w-100"
							>
								Lanjut Bayar
							</Button>
						)}

						{/* <Button
                            as={Link}
                            to={'/ticket'}
                            type='submit'
                            style={buttonStyle}
                            className='my-4 w-100'
                        >
                            Cetak Tiket
                        </Button> */}
					</Col>
				)}
			</Row>

			{/* Modal for Search Feature */}
			<Modal show={showSearch} onHide={handleCloseSearch} centered>
				<Modal.Header closeButton>
					<Modal.Title className="w-100">
						<InputGroup>
							<InputGroup.Text>
								<BsSearch />
							</InputGroup.Text>
							<Form.Control placeholder="Masukkan nomor penerbangan" />
						</InputGroup>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="d-flex flex-row align-items-center justify-content-between">
						<h6>Pencarian terkini</h6>
						<h6 style={{ color: 'var(--error)' }}>Hapus</h6>
					</div>
				</Modal.Body>
			</Modal>

			{/* Modal for Filter Feature */}
			<Modal show={showFilter} onHide={handleCloseFilter} centered>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3">
							<Form.Control type="date" />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="primary"
						onClick={handleCloseFilter}
						style={{
							fontSize: '14px',
							backgroundColor: 'var(--darkblue-04)',
							border: 'none',
						}}
					>
						Simpan
					</Button>
				</Modal.Footer>
			</Modal>
		</Container>
	);
};

export default History;
