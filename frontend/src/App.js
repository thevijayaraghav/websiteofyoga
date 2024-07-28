import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./Homepage";
import Fullregister from "./Component/Fullregister";
import Registerpage from "./Component/Registerpage";
import Forgetpassword from './Component/Forgetsection';
import Cardesign from './Component/Addtocard';
import CartPage from './Component/Cartpage';
import VideoGallery from './Component/VideoGallery';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/register" element={<Fullregister />} />
                <Route path="/login" element={<Registerpage />} />
                <Route path="/forgetpassword" element={<Forgetpassword />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/gallery" element={<VideoGallery />} />
                <Route path="/addcart" element={<Cardesign />} />
            </Routes>
        </Router>
    );
}

export default App;
