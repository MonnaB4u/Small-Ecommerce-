
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import AllHeaderComponent from './Component/HeaderMain/AllHeaderComponent';
import Cart from './Component/Cart/Cart';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import Profile from './Component/Profile/Profile';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllHeaderComponent />} />
          <Route path="/ProductDetails/:id" element={<ProductDetails />} />
          <Route path="/cart/:id" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
