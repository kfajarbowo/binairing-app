// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword'


function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/resetpassword" element={<ResetPassword />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
