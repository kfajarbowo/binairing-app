import React from 'react';
import {
	Button,
	Card,
	Col,
	Container,
	ListGroup,
	Row,
	Form,
} from 'react-bootstrap';
import { FiArrowLeft, FiEdit3, FiLogOut, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Profile = () => {
	const linkStyle = {
		color: 'var(--Neutral--05)',
		textDecoration: 'none',
		fontSize: 'var(--title-font-18)',
	};
	const buttonBeranda = {
		backgroundColor: 'var(--darkblue-03)',
		color: '--Neutral--01',
		border: 'none',
		fontWeight: 'var(--font-regular)',
	};
	const buttonSave = {
		backgroundColor: 'var(--darkblue-05)',
		color: '--Neutral--01',
		border: 'none',
		fontWeight: 'var(--font-regular)',
	};
	const fontBold = {
		fontWeight: 'var(--font-bold)',
	};
	const tabDataDiri = {
		color: 'var(--Neutral--01)',
		backgroundColor: 'var(--darkblue-03)',
	};
	return (
		<>
			<Container>
				<Row className="mt-5">
					<Col md={{ offset: 1 }}>
						<h4 style={fontBold}>Akun</h4>
					</Col>
				</Row>
				<Row>
					<Col
						className="mt-3 rounded"
						md={{ span: 10, offset: 1 }}
						style={{ backgroundColor: 'var(--darkblue-03)' }}
					>
						<Button className="p-3" style={buttonBeranda}>
							<FiArrowLeft className="me-2" /> Beranda
						</Button>
					</Col>
				</Row>
			</Container>

			<div className="shadow-sm border-bottom pb-4" />

			<Container className="mt-5">
				<Row>
					<Col md={{ span: 4, offset: 1 }}>
						<ListGroup variant="flush">
							<ListGroup.Item action className="pb-3">
								<Link to={'/'} style={linkStyle}>
									<FiEdit3 className="me-3" />
									Ubah Profil
								</Link>
							</ListGroup.Item>
							<ListGroup.Item action className="mt-4 pb-3">
								<Link to={'/'} style={linkStyle}>
									<FiSettings className="me-3" />
									Pengaturan Akun
								</Link>
							</ListGroup.Item>
							<ListGroup.Item action className="mt-4 border-bottom pb-3">
								<Link to={'/'} style={linkStyle}>
									<FiLogOut className="me-3" />
									Keluar
								</Link>
							</ListGroup.Item>
						</ListGroup>
					</Col>

					<Col md={{ span: 5, offset: 1 }}>
						<Card>
							<Card.Body className="p-4">
								<h5 style={fontBold}>Ubah Data Profil</h5>
								<Row>
									<Col className="rounded-top p-3 mt-3" style={tabDataDiri}>
										Data Diri
									</Col>
								</Row>
								<Row className="mt-3">
									<Form>
										<Form.Group className="mb-3" controlId="formBasicEmail">
											<Form.Label
												className="ms-1"
												style={{ fontWeight: 'var(--font-semi-bold)' }}
											>
												Username
											</Form.Label>
											<Form.Control type="text" placeholder="jojo" />
										</Form.Group>
										<Form.Group className="mb-3" controlId="formBasicEmail">
											<Form.Label
												className="ms-1"
												style={{ fontWeight: 'var(--font-semi-bold)' }}
											>
												Email address
											</Form.Label>
											<Form.Control type="email" placeholder="Jojo@gmail.com" />
										</Form.Group>
										<div className="text-center">
											<Button
												className="px-4 py-2"
												style={buttonSave}
												type="submit"
											>
												Simpan
											</Button>
										</div>
									</Form>
								</Row>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Profile;
