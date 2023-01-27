import React, { useState, createContext } from 'react'
import ReactDOM from 'react-dom/client';
import { Navbar, Footer, Form, Dashboard, Posted, Post, Contact, FormEs } from './Components';
import { Home, Partners, MedicalTour, AboutUs, Service, Admin, Redirect, Blogs, Pack, Esth } from './Pages';
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
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
            <Route path="/devis_esth" element={<FormEs />} />
            <Route path="/message" element={<Contact />} />
            <Route path='/post/:postID' exact element={<Post />} />
            <Route path='/dashboard' element={<ProtectedRoute setAuth={setAuth} isAuth={isAuth} Component={Dashboard} />} />
          </Routes>
        </ThemeContext.Provider>
        <WhatsAppWidget
          phoneNo="21655884648"
          position="left"
          widgetWidth="200px"
          widgetWidthMobile="150px"
          autoOpen={false}
          messageBox={false}
          iconSize="50"
          iconColor="white"
          iconBgColor="green"
          headerIcon={require("../src/assets/logo.png")}
          headerIconColor="pink"
          headerTxtColor="white"
          headerBgColor="green"
          headerTitle="EDEN Light Service"
          headerCaption="Online"
          bodyBgColor="#bbb"
          chatPersonName="Support"
          chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
          footerBgColor="#999"
          btnBgColor="green"
          btnTxt="Start Chat"
          btnTxtColor="white"
        />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App