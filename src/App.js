// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login';
<<<<<<< HEAD
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import Search from './pages/Search';
import Checkout from './pages/Checkout';
import Notification from './pages/Notification/Notification';
import History from './pages/History';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import Profile from './pages/Profile';
=======
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword'
import Search from './pages/Search';

>>>>>>> 2ecdad8032b3208c8f05e192d4d023e6e8e01bb1

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
<<<<<<< HEAD
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/notification" element={<Notification />} />
				<Route path="/riwayat-pemesanan" element={<History />} />
				<Route path="/payment" element={<Payment />} />
				<Route path="/payment-success" element={<PaymentSuccess />} />
				<Route path="/profile" element={<Profile />} />
=======
>>>>>>> 2ecdad8032b3208c8f05e192d4d023e6e8e01bb1
			</Routes>
		</BrowserRouter>
	);
}

export default App;
