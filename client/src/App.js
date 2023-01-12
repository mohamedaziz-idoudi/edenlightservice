import React, { useState, createContext } from 'react'
import ReactDOM from 'react-dom/client';
import { Navbar, Footer, Form, Dashboard, Posted, Post } from './Components';
import { Home, Partners, MedicalTour, AboutUs, Service, Admin, Redirect,Blogs, Pack, Esth } from './Pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
const App = () => {
  const ThemeContext = createContext(null);
  const [isAuth, setAuth] = useState(false);
  return (

    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ThemeContext.Provider value={isAuth}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route index element={<Home />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Form />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/medicaltourism" element={<MedicalTour />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path='/admin' element={<Admin setAuth={setAuth} />} />
            <Route path='/redirect' element={<Redirect />} />
            <Route path='/posted' element={<Posted />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/packs" element={<Pack />} />
            <Route path="/esth" element={<Esth />} />
            <Route path='/post/:postID' exact element={<Post />} />
            <Route path='/dashboard' element={<ProtectedRoute setAuth={setAuth} isAuth={isAuth} Component={Dashboard} />} />
          </Routes>
        </ThemeContext.Provider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App