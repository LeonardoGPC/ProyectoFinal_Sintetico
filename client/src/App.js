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
import AdminDeleted from "./components/AdminManageFields/AdminDeleted";
import Success from "./components/Pagos/Success/success";
import Failure from "./components/Pagos/Failure/failure";
import ManagePlan from "./components/Clubs/ManagePlan";
import SeePost from "./components/Clubs/SeePost";
import BookingsClub from "./components/Clubs/BookingsClub";
import React from "react";
import Error from "./components/Error/error";
import ProfileAvatar from "./components/Profile/ProfileAvatar/ProfileAvatar"
import AdminAllUser from "./components/AdminManageUser/AdminAllUser";
import AdminManagePlan from "./components/AdminManagePlan/AdminManagePlan";
import AdminEditPlan from "./components/AdminManagePlan/AdminEditPlan";

import { FaGoogle } from "react-icons/fa";
import UserBenefits from "./components/AdminManageUser/UserBenefits";
import AdminEditPremium from "./components/AdminManageFields/AdminEditPremium";
import AdminPlanStats from "./components/AdminManagePlan/AdminPlanStats";
import EasterEgg from "./components/EasterEgg/easterEgg";

function App() {
  const [load, setLoad] = useState(false);

  let location = useLocation();

  const animation = () => {
    setLoad(false);
  };

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        if (!location.hash) {
          setLoad(true);
          setTimeout(animation, 1750);
          break;
        }
        break;
      case "/clubs":
        if (!location.hash) {
          setLoad(true);
          setTimeout(animation, 1750);
          break;
        }
        break;
      case "/pay":
        setLoad(true);
        setTimeout(animation, 1750);
        break;
      case "/login":
        setLoad(true);
        setTimeout(animation, 1750);
        break;
      case "/about":
        setLoad(true);
        setTimeout(animation, 1750);
        break;
    }
  }, [location]);

  return (
    <div className="App">
      <div className="App_bg">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sintetico" element={<Home />} />
          <Route path="/profile/" element={<Profile />}/>
            {/* <Route path="verPublicaciones" element={<SeePost />} />
            <Route path="gestionarPlan" element={<ManagePlan />} />
            <Route path="reservas" element={<BookingsClub />} /> */}
          {/* </Route> */}
          <Route path="/sintetico/detail/:id" element={<Detail />} />
          <Route path="/create" element={<Create />} />
          <Route path="*" element={<Error />} />
          <Route path="/about" element={<About />} />
          <Route path="/pay">
            <Route path="/pay" element={<Pagos />} />
            <Route path="/pay/success" element={<Success />} />
            <Route path="/pay/failure" element={<Failure />} />
          </Route>
          <Route path="/booking/:id" element={<Booking />} />
          {/* <Route path="/gestionarpublicaciones" element={<GestPublicaciones />} />
          <Route path='/gestionarusuarios' element={<GestUsuarios />} />
          <Route path='/gestionarprecios' element={<GestPrecios />} />
          <Route path='/gestionarreservas' element={<GestReservas />} /> */}
          <Route path="/admin/fields" element={<AdminFields />} />
          <Route path="/admin/fields/premium" element={<AdminEditPremium />} />
          <Route path="/admin/fields/edit" element={<AdminEdit />} />
          {/* <Route path="/admin/fields/stats" element={<AdminStats />} /> */}
          <Route path="/admin/fields/deleted" element={<AdminDeleted />} />
          <Route path="/gestionarusuarios" element={<GestUsuarios />} />
          <Route path="/admin/users/edit" element={<AdminAllUser />} />
          <Route path="/admin/users/plan" element={<UserBenefits />} />
          <Route path="/gestionarprecios" element={<GestPrecios />} />
          <Route path="/admin/plan" element={<AdminManagePlan />} />
          <Route path="/admin/plan/edit" element={<AdminEditPlan />} />
          <Route path="/admin/plan/stats" element={<AdminPlanStats />} />
          <Route path="/gestionarreservas" element={<GestReservas />} />
          <Route path="/diegol" element={<EasterEgg />} />
        </Routes>
        {load && <Load />}
      </div>
    </div>
  );
}

export default App;
