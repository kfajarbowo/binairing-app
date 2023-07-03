// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import Search from './pages/Search';
import Checkout from './pages/Checkout';
import Notification from './pages/Notification/Notification';
import History from './pages/History';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import Profile from './pages/Profile';
import { Provider } from 'react-redux';
import store from './redux/store';
import RedirectIfProtected from './components/RedirectIfProtected';
import Protected from './components/Protected';
import Ticket from './pages/Ticket';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/login"
						element={
							<RedirectIfProtected>
								<Login />
							</RedirectIfProtected>
						}
					/>
					<Route path="/register" element={<Register />} />
					<Route path="/resetpassword" element={<ResetPassword />} />
					<Route path="/search" element={<Search />} />
					<Route
						path="/checkout"
						element={
							<Protected>
								<Checkout />
							</Protected>
						}
					/>
					<Route
						path="/notification"
						element={
							<Protected>
								<Notification />
							</Protected>
						}
					/>
					<Route
						path="/riwayat-pemesanan"
						element={
							<Protected>
								<History key="/riwayat-pemesanan" />
							</Protected>
						}
					/>
					<Route
						path="/riwayat-pemesanan/:bookingId"
						element={
							<Protected>
								<History key="/riwayat-pemesanan/:bookingId" />
							</Protected>
						}
					/>

					<Route path="/payment" element={<Payment />} />
					<Route path="/payment-success" element={<PaymentSuccess />} />

					<Route
						path="/profile"
						element={
							<Protected>
								<Profile />
							</Protected>
						}
					/>
					<Route path="/ticket" element={<Ticket />} />
				</Routes>
				<ToastContainer />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
