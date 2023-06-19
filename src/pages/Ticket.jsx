import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { BsFillAirplaneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Ticket = () => {
	// properti CSS untuk Heading
	const headingStyle = {
		fontSize: 'var(--heading-font-20)',
		fontWeight: 'var(--font-bold)',
		color: 'var(--darkblue-05)',
	};

	// properti CSS untuk SubHeading
	const subheadingStyle = {
		fontSize: 'var(--heading-font-20)',
		fontWeight: 'var(--font-bold)',
	};

	// properti CSS untuk Title
	const titleStyle = {
		fontSize: 'var(--title-font-18)',
		fontWeight: 'var(--font-bold)',
		color: 'var(--darkblue-04)',
	};

	// properti CSS untuk Paragraph
	const paragraphStyle = {
		fontSize: 'var(--title-font-16)',
	};

	// properti CSS untuk button
	const buttonStyle = {
		borderRadius: '0.5rem',
		backgroundColor: 'var(--darkblue-04)',
		border: 'none',
		fontSize: 'var(--body-font-14)',
		padding: '0.8rem 0',
	};
	return (
		<Container className="mt-5">
			<Row className="mx-3">
				<Col
					md={11}
					className="border px-5 py-4"
					style={{
						borderTopLeftRadius: '1rem',
						borderBottomLeftRadius: '1rem',
					}}
				>
					<Row>
						<h6 style={headingStyle}>Nusantara Fly</h6>
					</Row>
					<Row>
						<div className="d-flex flex-row align-items-center justify-content-between mt-4">
							<div>
								<h6 style={subheadingStyle}>JKT</h6>
								<p style={paragraphStyle}>Jakarta</p>
							</div>
							<div>
								<BsFillAirplaneFill
									size={26}
									style={{ transform: 'rotate(90deg)' }}
								/>
							</div>

							<div className="text-end">
								<h6 style={subheadingStyle}>SUB</h6>
								<p style={paragraphStyle}>Surabaya</p>
							</div>
						</div>
					</Row>
					<hr style={{ border: '1px dashed black' }} />
					<Row>
						<div className="d-flex flex-row align-items-center justify-content-between mt-4">
							<div>
								<h6 style={titleStyle}>Booking Code</h6>
								<p style={paragraphStyle}>6723y2GHK</p>
							</div>
							<div>
								<h6 style={titleStyle}>Date</h6>
								<p style={paragraphStyle}>3 Maret 2023</p>
							</div>
							<div className="text-end">
								<h6 style={titleStyle}>Time</h6>
								<p style={paragraphStyle}>07:00</p>
							</div>
						</div>
					</Row>
					<Row>
						<div className="d-flex flex-row align-items-center justify-content-between mt-3">
							<div>
								<h6 style={titleStyle}>Passanger</h6>
								<p style={paragraphStyle}>2 Adults, 1 Baby</p>
							</div>
							<div className="text-end">
								<h6 style={titleStyle}>Seat Class</h6>
								<p style={paragraphStyle}>Economy</p>
							</div>
						</div>
					</Row>
				</Col>
				<Col
					md={1}
					style={{
						backgroundColor: 'var(--darkblue-04)',
						borderTopRightRadius: '1rem',
						borderBottomRightRadius: '1rem',
					}}
				></Col>
			</Row>
			<Row className="mx-5 my-4">
				<Button as={Link} to={'/'} type="submit" style={buttonStyle}>
					Kembali ke Beranda
				</Button>
			</Row>
		</Container>
	);
};

export default Ticket;
