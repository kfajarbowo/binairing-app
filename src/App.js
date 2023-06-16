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




function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/resetpassword" element={<ResetPassword />} />
				<Route path="/search" element={<Search />} />

				<Route path="/checkout" element={<Checkout />} />
				<Route path="/notification" element={<Notification />} />
				<Route path="/riwayat-pemesanan" element={<History />} />
				<Route path="/payment" element={<Payment />} />
				<Route path="/payment-success" element={<PaymentSuccess />} />
				<Route path="/profile" element={<Profile />} />


			</Routes>
		</BrowserRouter>
	);
}

export default App;
