import "./App.css";
import ContactForm from "./components/Landing/ContactForm/ContactForm";
import Faq from "./components/Landing/Info/FAQ/Faq";
import { Routes, Route, useLocation } from "react-router-dom";
import Create from "./components/Create/create.jsx";
import Landing from "./components/Landing/landing.jsx";
import Home from "./components/Home/home.jsx";
import Detail from "./components/Detail/detail";
import Clubs from "./components/Clubs/clubs";
import Load from "./components/Load/load";
import { useEffect, useState } from "react";
import About from "./components/About/about";
import Login from "./components/Login/login";
import MiniFooter from "./components/MiniFooter/MiniFooter";
import Profile from "./components/Profile/profile";
import Pagos from "./components/Pagos/pagos";
import Booking from "./components/Booking/Booking";
import GestPublicaciones from "./components/Admin/GestPublicaciones";
import GestUsuarios from "./components/Admin/GestUsuarios";
import GestPrecios from "./components/Admin/GestPrecios";
import GestReservas from "./components/Admin/GestReservas";
import AdminFields from "./components/AdminManageFields/AdminFields";
import AdminEdit from "./components/AdminManageFields/AdminEdit";
import AdminStats from "./components/AdminManageFields/AdminStats";

function App() {
  const [load, setLoad] = useState(false);

  let location = useLocation();

  const animation = () => {
    setLoad(false);
  };

  useEffect(() => {
    setLoad(true);
    setTimeout(animation, 1750);
  }, [location]);

  return (
    <div className="App">
      <div className="App_bg">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sintetico" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sintetico/detail/:id" element={<Detail />} />
          <Route path="/create" element={<Create />} />
          <Route
            path="*"
            element={
              <div>
                <h1>Error 404</h1>
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/minifooter" element={<MiniFooter />} />
          <Route path="/pay" element={<Pagos />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route
            path="/gestionarpublicaciones"
            element={<GestPublicaciones />}
          />
          <Route path="/admin/fields" element={<AdminFields />} />
          <Route path="/admin/fields/edit" element={<AdminEdit />} />
          <Route path="/admin/fields/stats" element={<AdminStats />} />
          <Route path="/gestionarusuarios" element={<GestUsuarios />} />
          <Route path="/gestionarprecios" element={<GestPrecios />} />
          <Route path="/gestionarreservas" element={<GestReservas />} />
        </Routes>
        {load && <Load />}
      </div>
    </div>
  );
}

export default App;
