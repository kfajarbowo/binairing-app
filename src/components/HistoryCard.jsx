import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { BsFillAirplaneFill, BsGeoAltFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getHistory, getHistoryDetails } from '../redux/action/history';
import emptyHistoryImage from '../assets/ilustrasi.png';
import { generatePath, Link, useNavigate, useParams } from 'react-router-dom';

const HistoryCard = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [bookingIdDetails, setBookingId] = useState('');
	const { history } = useSelector(state => state.historyTable);
	const { historyDetails } = useSelector(state => state.historyTable);

	useEffect(() => {
		dispatch(getHistory());
		// dispatch(getHistoryDetails(bookingId));
	}, [dispatch]);

	const detailBooking = e => {
		bookingIdDetails &&
			navigate(
				generatePath('/riwayat-pemesanan/:bookingId', { bookingIdDetails })
			);
	};

	// properti CSS untuk Heading
	const headingStyle = {
		fontSize: 'var(--title-font-16)',
		fontWeight: 'var(--font-bold)',
	};

	// properti CSS untuk Title
	const titleStyle = {
		fontSize: 'var(--body-font-14)',
		fontWeight: 'var(--font-bold)',
	};

	// properti CSS untuk SubTitle
	const subtitleStyle = {
		fontSize: 'var(--body-font-14)',
		fontWeight: 'var(--font-bold)',
		color: 'var(--darkblue-04)',
	};

	// properti CSS untuk paragraph
	const paragraphStyle = {
		fontSize: 'var(--body-font-12)',
	};

	// properti CSS untuk issued
	const issuedStyle = {
		borderRadius: '1rem',
		border: 'none',
		backgroundColor: 'var(--success)',
		fontSize: 'var(--body-font-14)',
	};

	// properti CSS untuk unpaid
	const unpaidStyle = {
		borderRadius: '1rem',
		border: 'none',
		backgroundColor: 'var(--error)',
		fontSize: 'var(--body-font-14)',
	};

	const buttonStyle = {
		borderRadius: '8px',
		backgroundColor: 'var(--darkblue-04)',
		border: 'none',
		fontSize: 'var(--body-font-14)',
	};

	// properti CSS untuk cancel
	const cancelStyle = {
		borderRadius: '1rem',
		border: 'none',
		backgroundColor: 'var(--Neutral--03)',
		fontSize: 'var(--body-font-14)',
	};

	function convertTime(timeString) {
		const time = new Date(`1970-01-01T${timeString}`);
		const formattedTime = time.toLocaleTimeString('en-US', {
			hour: 'numeric',
			minute: '2-digit',
			hour12: false,
		});

		return formattedTime;
	}

	function formatDate(dateString) {
		const date = new Date(dateString);
		const options = { day: 'numeric', month: 'long', year: 'numeric' };
		const formattedDate = date.toLocaleDateString('id-ID', options);
		return formattedDate;
	}
	return (
		<div>
			{history ? (
				history.map((history, index) => (
					<div
						className="issued mb-3"
						key={index?.bookingId}
						style={{ cursor: 'pointer' }}
					>
						<h6 style={headingStyle}>Maret 2023</h6>
						<Link
							style={{ textDecoration: 'none' }}
							to={`/riwayat-pemesanan/${history.bookingId}`}
							// onClick={e => {
							// 	setBookingId(historyDetails.bookingId);
							// 	detailBooking();
							// }}
						>
							<Card>
								<Card.Header className="border-0">
									{history.paid ? (
										<Button style={issuedStyle}>Issued</Button>
									) : (
										<Button style={unpaidStyle}>Unpaid</Button>
									)}
								</Card.Header>
								<Card.Body>
									<Card.Text className="d-flex align-items-center justify-content-between">
										<div className="d-flex justify-content-center gap-2">
											<BsGeoAltFill />
											<div>
												<h6 style={titleStyle}>
													{history?.jadwal?.kotaKeberangkatan?.cityName}
												</h6>
												<p style={paragraphStyle} className="mb-1">
													{formatDate(history.jadwal?.tglKeberangkatan)}
												</p>
												<p style={paragraphStyle}>
													{convertTime(history?.jadwal?.jamKeberangkatan)}
												</p>
											</div>
										</div>
										<div className="d-flex flex-column justify-content-center align-items-center">
											<BsFillAirplaneFill />
											<hr className="w-100" />
											<p style={paragraphStyle}>
												{history?.jadwal?.durasiJam}h 0m
											</p>
										</div>
										<div className="d-flex justify-content-center gap-2">
											<BsGeoAltFill />
											<div>
												<h6 style={titleStyle}>
													{history?.jadwal?.kotaKedatangan?.cityName}
												</h6>
												<p style={paragraphStyle} className="mb-1">
													{formatDate(history.jadwal?.tglKedatangan)}
												</p>
												<p style={paragraphStyle}>
													{convertTime(history?.jadwal?.jamKedatangan)}
												</p>
											</div>
										</div>
									</Card.Text>
									<hr />
									<Card.Text className="d-flex align-items-center justify-content-between">
										<div>
											<h6 style={paragraphStyle} className="fw-bold">
												Booking Code:
											</h6>
											<p style={paragraphStyle}>{history.bookingId}</p>
										</div>
										<div>
											<h6 style={paragraphStyle} className="fw-bold">
												Class:
											</h6>
											<p style={paragraphStyle}>
												{history?.jadwal?.kelas?.namaKelas}
											</p>
										</div>
										<h6 style={subtitleStyle}>
											IDR {history.totalHarga.toLocaleString('id-ID')}
										</h6>
									</Card.Text>
								</Card.Body>
							</Card>
						</Link>
					</div>
				))
			) : (
				<Row className="text-center">
					<Col>
						<Image src={emptyHistoryImage} />
						<p>Oops Riwayat Pesanan Kosong</p>
						<p>Anda belum melakukan pemesanan penerbangan</p>
						<Button
							as={Link}
							to={'/'}
							type="submit"
							style={buttonStyle}
							className="my-4 w-100"
						>
							Cari penerbangan
						</Button>
					</Col>
				</Row>
			)}
			{/* 
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
			</div> */}
		</div>
	);
};

export default HistoryCard;
