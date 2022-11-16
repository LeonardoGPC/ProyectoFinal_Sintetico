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
import Reservas from "./Reservas/reservas";
import SeePost from "../Clubs/SeePost";
import ManagePlan from "../Clubs/ManagePlan";
import BookingsClub from "../Clubs/BookingsClub";
import GestPublicaciones from "../Admin/GestPublicaciones";
import GestUsuarios from "../Admin/GestUsuarios";
import GestPrecios from "../Admin/GestPrecios";
import GestReservas from "../Admin/GestReservas";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar.jsx";

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

  const [modal, setModal] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookings());
    dispatch(getFields())
 
  }, [dispatch]);

  const [reserve, setReserve] = useState(false);
  const [verPubli, setVerPubli] = useState(false)
  const [gestPlan, setGestPlan] = useState(false)
  const [gestRese, setGestRese] = useState(false)
  const [gestPubli, setGestPubli] = useState(false)
  const [gestUsers, setGestUsers] = useState(false)
  const [gestPrice, setGestPrice] = useState(false)
  const [gestRes, setGestRes] = useState(false)
  const [settings, setSettings] = useState(false)

  useEffect(() => {
    if(userData){
      if(userData.type === 'user'){
        setReserve(true)
        setSettings(false)
      } else if(userData.type === 'club'){
        setVerPubli(true)
        setGestPlan(false)
        setGestRese(false)
        setSettings(false)
      } else if(userData.type === 'admin'){
        setGestPubli(true)
        setGestUsers(false)
        setGestPrice(false)
        setGestRes(false)
        setSettings(false)
      }
    }
  }, [userData.type])

  console.log(userData)

  const switchHandler = (value) => {
    if(userData){
      if(value === 'reservas'){
        setReserve(true)
        setSettings(false)
      } else if(value === 'verPubli'){
        setVerPubli(true)
        setGestRese(false)
        setSettings(false)
        setGestPlan(false)
      } else if(value === 'gestPlan'){
        setGestPlan(true)
        setVerPubli(false)
        setGestRese(false)
        setSettings(false)
      } else if(value === 'gestRese'){
        setSettings(false)
        setVerPubli(false)
        setGestPlan(false)
        setGestRese(true)
      } else if(value === 'gestPubli'){
        setGestPubli(true)
        setGestUsers(false)
        setGestPrice(false)
        setGestRes(false)
        setSettings(false)
      } else if(value === 'gestUsers'){
        setGestPubli(false)
        setGestUsers(true)
        setGestPrice(false)
        setGestRes(false)
        setSettings(false)
      } else if(value === 'gestPrice'){
        setGestPubli(false)
        setGestUsers(false)
        setGestPrice(true)
        setGestRes(false)
        setSettings(false)
      } else if(value === 'gestRes'){
        setGestPubli(false)
        setGestUsers(false)
        setGestPrice(false)
        setGestRes(true)
        setSettings(false)
      } else if(value === 'settings'){
        setReserve(false)
        setVerPubli(false)
        setGestPlan(false)
        setGestPubli(false)
        setGestUsers(false)
        setGestPrice(false)
        setGestRes(false)
        setGestRese(false)
        setSettings(true)
      }
    }
  }

  const arr = bookings;
  const getById = arr.filter((e) => e.UserId === userData.id);
    useEffect(() => {
        const getUserData = async () => {
            // let data = await axios.get(`/users/${idUser}`, {withCredentials: true });
            let data = await axios.get('/users/' + idUser)
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

  if (typeof usuario === "undefined") {
    window.location.replace(`${URL_APP}/login`);
  } else {
    return (
      <div className={prof.main}>
        <Navbar userData={userData}/>
        <div className={prof.div}>
          {userData.type === "user" ? (
            <div className={prof.menu_container}>
            <div className={prof.menu}>
              <ul>
                <li className={prof.profile}>
                  <img className={prof.img} src={userData.image} alt="imagen" />
                  <h2 className={prof.name}>{userData.name}</h2>
                </li>
                <li className={reserve ? prof.lia : prof.li} onClick={() => switchHandler('reservas')}>Reservas</li>

                <li className={settings ? prof.lia : prof.li} onClick={() => switchHandler('settings')}>Configuración</li>
              </ul>
              <p className={prof.li} onClick={() => window.location.replace('/')}>
                Volver
              </p>
            </div>
            </div>
          ) : userData.type === "club" ? (
            <div className={prof.menu_container}>
            <div className={prof.menu}>
              <ul>
                <li className={prof.profile}>
                  <img className={prof.img} src={userData.image} alt='imagen'/>
                  <h2 className={prof.name}>{userData.name}</h2>
                </li>
                <li className={prof.li} onClick={() => window.location.replace(`${URL_APP}/create`)}>Hacer Publicación</li>
                <li className={verPubli ? prof.lia : prof.li} onClick={() => switchHandler('verPubli')}>Ver Publicaciones</li>
                <li className={gestPlan ? prof.lia : prof.li} onClick={() => switchHandler('gestPlan')}>Gestionar mi plan</li>
                <li className={gestRese ? prof.lia : prof.li} onClick={() => switchHandler('gestRese')}>Reservas</li>
                <li className={settings ? prof.lia : prof.li} onClick={() => switchHandler('settings')}>Configuración</li>

                {/* <li className={prof.li}><Link className={prof.link} to ='/create'>Hacer Publicación</Link></li>
                <li className={prof.li} onClick={() => switchHandler('verPubli')}><Link className={prof.link} to='/profile/verPublicaciones'>Ver Publicaciones</Link></li>
                <li className={prof.li} onClick={() => switchHandler('gestPlan')}><Link className={prof.link} to='/profile/gestionarPlan'>Gestionar mi plan</Link></li>
                <li className={prof.li} onClick={() => switchHandler('reservas')}><Link className={prof.link} to='/profile/reservas'>Reservas</Link></li>
                <li className={prof.li} onClick={() => switchHandler('settings')}>Configuración</li> */}
              </ul>
              <p className={prof.li} onClick={() => window.location.replace('/')}>
                Volver
              </p>
            </div>
            </div>
          ) : (
            <div className={prof.menu_container}>
            <div className={prof.menu}>
              <ul>
                <li className={prof.profile}>
                  <img className={prof.img} src={userData.image} alt="imagen" />
                  <h2 className={prof.name}>{userData.name}</h2>
                </li>
                <li className={gestPubli ? prof.lia : prof.li} onClick={() => switchHandler('gestPubli')}>
                    Gestionar Publicaciones
                </li>
                <li className={gestUsers ? prof.lia : prof.li} onClick={() => switchHandler('gestUsers')}>
                    Gestionar Usuarios
                </li>
                <li className={gestPrice ? prof.lia : prof.li} onClick={() => switchHandler('gestPrice')}>
                    Gestionar Precios
                </li>
                {/* <li className={prof.li} onClick={() => switchHandler('gestRes')}>
                    Gestionar Reservas
                </li> */}
                <li className={settings ? prof.lia : prof.li} onClick={() => switchHandler('settings')}>Configuración</li> 

                {/* <li className={prof.li} onClick={() => switchHandler('gestPubli')}>
                  <Link className={prof.link} to="/gestionarpublicaciones">
                    Gestionar Publicaciones
                  </Link>
                </li>
                <li className={prof.li} onClick={() => switchHandler('gestUsers')}>
                  <Link className={prof.link} to="/gestionarusuarios">
                    Gestionar Usuarios
                  </Link>
                </li>
                <li className={prof.li} onClick={() => switchHandler('gestPrice')}>
                  <Link className={prof.link} to="/gestionarprecios">
                    Gestionar Precios
                  </Link>
                </li>
                <li className={prof.li} onClick={() => switchHandler('settings')}><Link className={prof.link} to='/profile'>Configuración</Link></li> */}
              </ul>
              
              <p className={prof.li} onClick={() => window.location.replace('/')}>
                Volver
              </p>
            </div>
            </div>
          )}
          <div className={prof.content}>
              {reserve && <Reservas/>}
              {settings && <Settings setModal={setModal} imgData={userData}/>}
              {verPubli && <SeePost/>}
              {gestPlan && <ManagePlan/>}
              {gestRese && <BookingsClub/>}
              {gestPubli && <GestPublicaciones/>}
              {gestUsers && <GestUsuarios/>}
              {gestPrice && <GestPrecios/>}
              {/* {gestRes && <GestReservas/>} */}
          </div>
        </div>
        {modal && <div className={prof.modal_main}>
          <div className={prof.modal_box}>
            <ProfileAvatar setModal={setModal} userData={userData} setUserData={setUserData} idUser={idUser}/>                    
          </div>
        </div>}
      </div>
    );
  }
}

export default Profile;