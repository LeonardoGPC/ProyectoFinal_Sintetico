import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../NavBar/Navbar";
import prof from "./profile.module.css";
import Cookies from "universal-cookie";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import { getBookings, getFields } from "../../redux/actions";
import { URL_APP } from "../../utils/utils";
import Settings from "./Configuracion/settings";

function Profile() {
  let bookings = useSelector((state) => state.bookings);
  let user = useSelector((state) => state.user);
  let myFields = useSelector((state) => state.fields)
  const cookie = new Cookies();
  const usuario = cookie.get("usuario");
  const idUser = cookie.get("id");
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    lastName: "",
    userName: "",
    email: "",
    phone: "",
    image: "",
    type: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookings());
    dispatch(getFields())
  }, [dispatch]);

  const [showText, setShowText] = useState(true);
  const [settings, setSettings] = useState(false)

  const arr = bookings;
  const getById = arr.filter((e) => e.UserId === userData.id);
    useEffect(() => {
        const getUserData = async () => {
            // let data = await axios.get(`http://localhost:3001/users/${idUser}`, {withCredentials: true });
            let data = await axios.get('http://localhost:3001/users/' + idUser)
            setUserData({
                name: data.data.name,
                lastName: data.data.lastName,
                userName: data.data.userName,
                email: data.data.email,
                phone: data.data.phone,
                image: data.data.image,
                type: data.data.type
            })
        }
        getUserData()
    }, [])

  useEffect(() => {
    const getUserData = async () => {
      let data = await axios.get("/users/" + idUser);
      setUserData({
        id: data.data.id,
        name: data.data.name,
        lastName: data.data.lastName,
        userName: data.data.userName,
        email: data.data.email,
        phone: data.data.phone,
        image: data.data.image,
        type: data.data.type,
      });
    };
    getUserData();
  }, []);

  const closeSesion = () => {
    cookie.remove("usuario");
    cookie.remove("id");
    window.location.replace(URL_APP);
  };

  if (typeof usuario === "undefined") {
    window.location.replace(`${URL_APP}/login`);
  } else {
    return (
      <div className={prof.main}>
        <Navbar />
        <div className={prof.div}>
          {userData.type === "user" ? (
            <div className={prof.menu}>
              <ul>
                <li className={prof.profile}>
                  <img className={prof.img} src={userData.image} alt="imagen" />
                  <h2 className={prof.name}>{userData.name}</h2>
                </li>
                <li className={prof.li} onClick={() => (setShowText(true), setSettings(false))}>
                  Reservas
                </li>

                <li className={prof.li} onClick={() => (setShowText(false), setSettings(true))}>Configuración</li>
              </ul>
              <p className={prof.li} onClick={() => closeSesion()}>
                Cerrar Sesión
              </p>
            </div>
          ) : userData.type === "club" ? (
            <div className={prof.menu}>
              <ul>
                <li className={prof.profile}>
                  <img className={prof.img} src={userData.image} alt='imagen'/>
                  <h2 className={prof.name}>{usuario}</h2>
                </li>
                <li className={prof.li}><Link className={prof.link} to ='/create'>Hacer Publicación</Link></li>
                <li className={prof.li}><Link className={prof.link} to='/profile/verPublicaciones'>Ver Publicaciones</Link></li>
                <li className={prof.li}><Link className={prof.link} to='/profile/gestionarPlan'>Gestionar mi plan</Link></li>
                <li className={prof.li}><Link className={prof.link} to='/profile/reservas'>Reservas</Link></li>
                <li className={prof.li} onClick={() => (setShowText(false), setSettings(true))}>Configuración</li>
              </ul>
              <p className={prof.li} onClick={() => closeSesion()}>
                Cerrar Sesión
              </p>
            </div>
          ) : (
            <div className={prof.menu}>
              <ul>
                <li className={prof.profile}>
                  <img className={prof.img} src={userData.image} alt="imagen" />
                  <h2 className={prof.name}>{usuario}</h2>
                </li>
                <li className={prof.li}>
                  <Link className={prof.link} to="/gestionarpublicaciones">
                    Gestionar Publicaciones
                  </Link>
                </li>
                <li className={prof.li}>
                  <Link className={prof.link} to="/gestionarusuarios">
                    Gestionar Usuarios
                  </Link>
                </li>
                <li className={prof.li}>
                  <Link className={prof.link} to="/gestionarprecios">
                    Gestionar Precios
                  </Link>
                </li>
                {/* No se si es necesario que intervenga el admin en las reservas
                <li className={prof.li}>
                  <Link className={prof.link} to="/gestionarreservas">
                    Gestionar Reservas
                  </Link>
                </li> */}
                <li className={prof.li} onClick={() => (setShowText(false), setSettings(true))}>Configuración</li>
              </ul>
              <p className={prof.li} onClick={() => closeSesion()}>
                Cerrar Sesión
              </p>
            </div>
          )}
          <div className={prof.content}>{showText && (
                <div className={prof.contentInfo}>
                  {getById.length > 0 ? getById.map((e) => {
                    return (                     
                      <div className={prof.divInfo} key={e.id}>
                        <div className={prof.zone}>
                          <h3 className={prof.zoneBooking}>Reservas</h3>
                        <h3 className={prof.info}>Fecha: {e.date}</h3>
                        <h3 className={prof.info}>Horario: {e.hour}</h3>
                        <h3 className={prof.info}>
                          Cancha: {e.Fields[0].name}
                        </h3>
                      </div>
                      </div>
                    );
                  }) : <div className={prof.noReserv}>
                    <h1>No has reservado ninguna cancha.</h1>
                    <Link className={prof.cta} to='/sintetico'>Reservar</Link>
                    </div>}
                </div>
              )}
              {settings && <Settings/>}
              <Outlet />
              </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default Profile;