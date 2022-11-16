import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import s from "./settings.module.css";
import edit from "../../../img/icons/edit.svg";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteAccount } from "../../../redux/actions";
import { URL_APP } from "../../../utils/utils";
import{URL} from '../../../utils/utils.js'

function Settings({setModal, imgData}) {
  const dispatch = useDispatch();
  const cookie = new Cookies();
  const idUser = cookie.get("id");
  const [userData, setUserData] = useState();
  const [modal2, setModal2] = useState(false)
  const [editS, setEditS] = useState({
    name: true,
    lastName: true,
    email: true,
    userName: true,
    phone: true,
  });

  const [input, setInput] = useState({
    name: "",
    lastName: "",
    email: "",
    userName: "",
    phone: "",
  });

    useEffect(() => {
        if(idUser){
            fetch(`${URL}/users/` + idUser)
            .then(response => response.json())
            .then(res => setUserData(res))
            .catch(error => console.log(error))
        }
    }, [])

  
    const inputHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setUserData({
          ...userData,
          [e.target.name]: e.target.value
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        axios.put('/users/' + idUser, {
            [e.target[0].name]: e.target[0].value
        })
        .then(response => {
            setEditS({...editS, [e.target[0].name]: true})  
        })
    }

  function deleteUser() {
    dispatch(deleteAccount(userData.id));
    setModal2(false)
    cookie.remove("usuario");
    cookie.remove("id");
    return (window.location.replace(URL_APP))
  }

  const closeSesion = () => {
    cookie.remove("usuario");
    cookie.remove("id");
    return window.location.replace(URL_APP);
  };

    return (
      <div style={{color: 'white', display: 'flex', flexDirection: 'column'}}>
        {userData ? <>
        <div className={s.main} style={{display: 'flex', margin: '50px', gap: '50px'}}>
          <div className={s.div_img}>
            <img src={imgData.image} onClick={()=>setModal(true)} className={s.img}/>
          </div>
          <div className={s.container}>
          <div>
            <p>Email</p>
            {editS.email ? <h2>{userData.email} <img src={edit} className={s.icon} onClick={() => (setEditS({...editS, email: false}), setInput({...input, email: userData.email}))}/></h2> : <form onSubmit={(e) => submitHandler(e)}><input className={s.inp} type='text' onChange={(e) => inputHandler(e)} name='email' value={input.email}/><input type='submit' value='' className={s.actualizar}/><input value='' onClick={() => setEditS({...editS, email: true})} type='button' className={s.cancelar}/></form>}
          </div>
          <div>
            <p>Usuario</p>
            {editS.userName ? <h2>{userData.userName} <img src={edit} className={s.icon} onClick={() => (setEditS({...editS, userName: false}), setInput({...input, userName: userData.userName}))}/></h2> : <form onSubmit={(e) => submitHandler(e)}><input className={s.inp} type='text' onChange={(e) => inputHandler(e)} name='userName' value={input.userName}/><input type='submit' value='' className={s.actualizar}/><input value='' onClick={() => setEditS({...editS, userName: true})} type='button' className={s.cancelar}/></form>}
          </div>
          </div>
        </div>
        <div className={s.datos}>
          <div>
            <p>Nombre</p>
            {editS.name ? <h2>{userData.name} <img src={edit} className={s.icon} onClick={() => (setEditS({...editS, name: false}), setInput({...input, name: userData.name}))}/></h2> : <form onSubmit={(e) => submitHandler(e)}><input className={s.inp} type='text' onChange={(e) => inputHandler(e)} name='name' value={input.name}/><input type='submit' value='' className={s.actualizar}/><input value='' onClick={() => setEditS({...editS, name: true})} type='button' className={s.cancelar}/></form>}
          </div>
          <div>
            <p>Apellido</p>
            {editS.lastName ? <h2>{userData.lastName} <img src={edit} className={s.icon} onClick={() => (setEditS({...editS, lastName: false}), setInput({...input, lastName: userData.lastName}))}/></h2> : <form onSubmit={(e) => submitHandler(e)}><input className={s.inp} type='text' onChange={(e) => inputHandler(e)} name='lastName' value={input.lastName}/><input type='submit' value='' className={s.actualizar}/><input value='' onClick={() => setEditS({...editS, lastName: true})} type='button' className={s.cancelar}/></form>}
          </div>
          <div>
            <p>Teléfono</p>
            {editS.phone ? <h2>{userData.phone} <img src={edit} className={s.icon} onClick={() => (setEditS({...editS, phone: false}), setInput({...input, phone: userData.phone}))}/></h2> : <form onSubmit={(e) => submitHandler(e)}><input className={s.inp} type='text' onChange={(e) => inputHandler(e)} name='phone' value={input.phone}/><input type='submit' value='' className={s.actualizar}/><input value='' onClick={() => setEditS({...editS, phone: true})} type='button' className={s.cancelar}/></form>}
          </div>
          <div>
            <button onClick={() => setModal2(true)} className={s.deleteBtn}>Eliminar Cuenta</button>
          </div>
          <div>
            <button onClick={() => closeSesion()} className={s.deleteBtn2}>Cerrar Sesión</button>
          </div>
        </div>
        </> : <h1 style={{color: 'white'}}>Cargando...</h1>}
        {modal2 && <div className={s.modal_main}>
                <div className={s.modal_box}>
                    <p>Al hacer click en <b>Aceptar</b> se<br/>borrará tu cuenta permanentemente.</p>
                    <h1>¿Seguro que quieres continuar?</h1>
                    <div className={s.modal_btns}>
                        <button onClick={() => setModal2(false)}>Cancelar</button>
                        <button onClick={() => deleteUser()} className={s.modal_cont}>Continuar</button>
                    </div>
                </div>
            </div>}
      </div>
    )
}

export default Settings;
