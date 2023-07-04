import React, { useState, useEffect } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { BsFillAirplaneFill, BsGeoAltFill } from 'react-icons/bs';

const HistoryCard = ({ getDetailBookingResult, isFullWidth, handleClick }) => {
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

	// properti CSS untuk cancel
	const cancelStyle = {
		borderRadius: '1rem',
		border: 'none',
		backgroundColor: 'var(--Neutral--03)',
		fontSize: 'var(--body-font-14)',
	};

	return (
		<div>
			<h6 style={headingStyle}>Maret 2023</h6>
			{getDetailBookingResult &&
				getDetailBookingResult.map((data, index) => (
					<div className={data.paid ? 'issued mb-3' : 'unpaid mb-3'}>
						<Card
							style={{
								width: isFullWidth ? '100%' : '100%',
								marginBottom: '15px',
							}}
							onClick={() => handleClick(index)}
						>
							<Card.Header className="border-0">
								<Button style={data.paid ? issuedStyle : unpaidStyle}>
									{data.paid ? 'Issued' : 'Unpaid'}
								</Button>
							</Card.Header>
							<Card.Body>
								<Card.Text className="d-flex align-items-center justify-content-between">
									<div className="d-flex justify-content-center gap-2">
										<BsGeoAltFill />
										<div>
											<h6 style={titleStyle}>
												{data.jadwal.kotaKeberangkatan.cityName}
											</h6>
											<p style={paragraphStyle} className="mb-1">
												{data.jadwal.tglKeberangkatan}
											</p>
											<p style={paragraphStyle}>
												{data.jadwal.kotaKeberangkatan.jamKeberangkatan}
											</p>
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
											<h6 style={titleStyle}>
												{data.jadwal.kotaKedatangan.cityName}
											</h6>
											<p style={paragraphStyle} className="mb-1">
												{data.jadwal.tglKedatangan}
											</p>
											<p style={paragraphStyle}>
												{data.jadwal.kotaKeberangkatan.jamKedatangan}
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
										<p style={paragraphStyle}>{data.bookingId}</p>
									</div>
									<div>
										<h6 style={paragraphStyle} className="fw-bold">
											Class:
										</h6>
										<p style={paragraphStyle}>{data.jadwal.kelas.namaKelas}</p>
									</div>
									<h6 style={subtitleStyle}>
										{data.totalHarga.toLocaleString('id-ID')}
									</h6>
								</Card.Text>
							</Card.Body>
						</Card>
					</div>
				))}
		</div>
	);
};

export default HistoryCard;
