import React, { useEffect } from 'react';
import './style.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import {
	ArrowRightSquare,
	ArrowRightSquareFill,
	Search,
} from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/tiketku.png';
import { useDispatch, useSelector } from 'react-redux';

import { getProfile, logout } from '../../redux/action/auth';
import { FiBell, FiList, FiUser } from 'react-icons/fi';

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { isLoggedIn, token, user } = useSelector(state => state.authTable);

	useEffect(() => {
		if (isLoggedIn && token) {
			dispatch(getProfile());
		}
	}, [dispatch, isLoggedIn, token]);

	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			bg="light"
			variant="light"
			className="nav"
		>
			<Container>
				<img
					src={logo}
					className="me-2"
					height="50"
					alt="Logo"
					loading="lazy"
				/>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<div className="input-group rounded" style={{ width: '400px' }}>
							<input
								type="search"
								className="form-control rounded"
								placeholder="Search"
								aria-label="Search"
								aria-describedby="search-addon"
							/>
							<span className="input-group-text border-0" id="search-addon">
								<Search />
							</span>
						</div>
					</Nav>
					<Nav>
						{isLoggedIn ? (
							<>
								<Nav.Link as={Link} to={'/'}>
									<FiList />
								</Nav.Link>

								<Nav.Link as={Link} to={'/notification'}>
									<FiBell />
								</Nav.Link>

								<Nav.Link as={Link} to={'/profile'}>
									<FiUser /> ({user?.name})
								</Nav.Link>

								{/* <Nav.Link onClick={() => dispatch(logout(navigate))}>
									logout
								</Nav.Link> */}
							</>
						) : (
							<Link to="/login" type="submit" className="btns-link m-1">
								<ArrowRightSquareFill /> Masuk
							</Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
