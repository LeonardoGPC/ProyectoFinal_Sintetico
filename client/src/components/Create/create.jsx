import classNames from 'classnames';
import React, { useEffect, useReducer, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postField } from '../../redux/actions/index';
import { validate } from './validate';
import Cookies from 'universal-cookie';
import Navbar from '../NavBar/Navbar';
import{URL} from '../../utils/utils.js'
import MiniFooter from '../MiniFooter/MiniFooter.jsx'
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
  getCities,
  getSizes,
  getSurfaces,
  getFacilities,
} from '../../redux/actions';
import style from './create.module.css';
import Upload from '../Upload/Upload';

export default function Create() {
  const dispatch = useDispatch();
  const cities = useSelector((s) => s.cities);
  const sizes = useSelector((s) => s.sizes);
  const surfaces = useSelector((s) => s.surfaces);
  const facilities = useSelector((s) => s.facilities);
  const [modal, setModal] = useState(false)
  const [modalIs, setModalIs] = useState('inProcess')

  const[previewSource, setPreviewSource] = useState();
  
  const cookie = new Cookies()
  const idUser = cookie.get('id')
 

  useEffect(() => {
    dispatch(getCities());
    dispatch(getSizes());
    dispatch(getSurfaces());
    dispatch(getFacilities());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [input, setInput] = useState({
    name: '',
    image: 'https://res.cloudinary.com/deirkmhyd/image/upload/v1667591343/sintetico/canchas-futbol-5_mcwq4s.webp',
    price: '',
    address: '',
    openHour: '',
    closeHour: '',
    city: '',
    size: '',
    surface: '',
    description: '',
    facilities: [],
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const inputsToValidate = [
      'name',
      'price',
      'address',
      'openHour',
      'closeHour',
      'city',
      'size',
      'surface',
      'description',
    ];

    let canSubmit = true;

    for (let inputToValidate of inputsToValidate) {
      const isValid = validate(
        e.target.elements[inputToValidate],
        dispatchError, input
      );
        
      if (!isValid) {
        canSubmit = false;
      }
    }

    if (canSubmit) {
      const cloudinaryImg = await uploadImage(previewSource)
      const obj = input;
      obj.image = cloudinaryImg;
      // dispatch(postField(obj, idUser));
      try {
        await axios.post('/fields/' + idUser, obj);
        setModal(true)
        setModalIs('complete')
      } catch (error) {
        setModal(true)
        setModalIs('failure')
      }
    }
  };

  const uploadImage = async (base64EncondedImage) =>{
    try {
        const data = await fetch (`${URL}/uploads`,{
            method: 'POST',
            body: JSON.stringify({
                data: base64EncondedImage
            }),
            headers: {'Content-type':'application/json'},
        })
        const response = await data.json()
        return (response.url)
    } catch (error) {
        console.log(error)            
    }
  }


  const [errorState, dispatchError] = useReducer((state, action) => {
    return { ...state, [action.type]: action.value };
  }, {});

  const handleInputChange = (e) => {
    const { target } = e;

    let targetValue = target.value;


    setInput({ ...input, [target.name]: targetValue });
    validate(target, dispatchError, input);
  };

  const handlecheck = (e) => {
    const facilities = [...input.facilities];

    if (e.target.checked) {
      facilities.push(e.target.value);
    } else {
      facilities.splice(facilities.indexOf(e.target.value), 1);
    }

    setInput({
      ...input,
      facilities,
    });
  };

  return (
    <div>
      <Navbar />
      <div className={style.contenedor}>
        <form
          className={style.contenedorFormulario}
          onSubmit={handleFormSubmit}
        >
          <h1 className={style.tittle}>Crear cancha</h1>
          <div className={style.sections}>
            <div
              className={classNames(
                style.group2,
                errorState.name && style.error,
              )}
            >
              <div className={style.right}>
                <Upload previewSource={previewSource} setPreviewSource={setPreviewSource}/>
                <div className={style.itemsServicios}>
                  <div className={style.servicios_div}>
                  <label className={style.subtittleFax}>Servicios: </label>
                  <div className={style.select_servicios}>
                  {facilities.map((f) => (
                    <div>
                    <label key={f.id} className={style.subtittleFa}>
                      {f.name}
                      <input
                        type="checkbox"
                        value={f.id}
                        onChange={handlecheck}
                      />
                    </label>
                    </div>
                  ))}
                  </div>
                  </div>
                  <div className={style.contenedorButton}>
                    <button type="submit" className={style.buttonCrear}>
                      Crear
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.left}>
              <div
                className={classNames(
                  style.group,
                  errorState.name && style.error,
                )}
              >
                <label className={style.subtittle}>Nombre:</label>
                <input
                  className={style.input}
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={handleInputChange}
                  onBlur={(e) => validate(e.target, dispatchError, input)}
                />
                {errorState.name && <p>{errorState.name}</p>}
              </div>          
              <div
                className={classNames(
                  style.group,
                  errorState.price && style.error,
                )}
              >
                <label className={style.subtittle}>Precio:</label>

                <input
                  className={style.input}
                  type="text"
                  name="price"
                  value={input.price}
                  onChange={handleInputChange}
                  onBlur={(e) => validate(e.target, dispatchError, input)}
                />
                {errorState.price && <p>{errorState.price}</p>}
              </div>
              <div
                className={classNames(
                  style.group,
                  errorState.city && style.error,
                )}
              >
                <label className={style.subtittle}>Localidad:</label>
                <select
                  className={style.input}
                  name="city"
                  onChange={handleInputChange}
                  onBlur={(e) => validate(e.target, dispatchError, input)}
                >
                  <option value="">Seleccione una localidad</option>

                  {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </select>
                {errorState.city && <p>{errorState.city}</p>}
              </div>
              <div
                className={classNames(
                  style.group,
                  errorState.address && style.error,
                )}
              >
                <label className={style.subtittle}>Dirección:</label>
                <input
                  className={style.input}
                  type="text"
                  name="address"
                  value={input.address}
                  onChange={handleInputChange}
                  onBlur={(e) => validate(e.target, dispatchError, input)}
                />
                {errorState.address && <p>{errorState.address}</p>}
              </div>
              <div
                className={classNames(
                  style.group,
                  errorState.size && style.error,
                )}
              >
                <label className={style.subtittle}>Tamaño:</label>
                <select
                  onChange={handleInputChange}
                  name="size"
                  className={style.input}
                  onBlur={(e) => validate(e.target, dispatchError, input)}
                >
                  <option value="">Seleccione un tamaño</option>
                  {sizes.map((size) => (
                    <option
                      key={size.id}
                      value={size.id}
                      onChange={handleInputChange}
                      onBlur={(e) => validate(e.target, dispatchError, input)}
                    >
                      Futbol {size.name}
                    </option>
                  ))}
                </select>
                {errorState.size && <p>{errorState.size}</p>}
              </div>
              <div
                className={classNames(
                  style.group,
                  errorState.surface && style.error,
                )}
              >
                <label className={style.subtittle}>Superficie:</label>
                <select
                  className={style.input}
                  name="surface"
                  onChange={handleInputChange}
                  onBlur={(e) => validate(e.target, dispatchError, input)}
                >
                  <option value="">Seleccione una superficie</option>
                  {surfaces.map((surface) => (
                    <option
                      key={surface.id}
                      value={surface.id}
                      onChange={handleInputChange}
                    >
                      {surface.name}
                    </option>
                  ))}
                </select>
                {errorState.surface && <p>{errorState.surface}</p>}
              </div>
              <div
                className={classNames(
                  style.group,
                  errorState.openHour && style.error,
                )}
              >
                <label className={style.subtittle}>Apertura:</label>
                <input
                  className={style.input}
                  type="time"
                  name="openHour"
                  step="1800"
                  onChange={handleInputChange}
                  onBlur={(e) => validate(e.target, dispatchError, input)}
                />
                {errorState.openHour && <p>{errorState.openHour}</p>}
              </div>
              <div
                className={classNames(
                  style.group,
                  errorState.closeHour && style.error,
                )}
              >
                <label className={style.subtittle}>Cierre:</label>
                <input
                  className={style.input}
                  type="time"
                  name="closeHour"
                  step="1800"
                  onChange={handleInputChange}
                  onBlur={(e) => validate(e.target, dispatchError, input)}
                />
                {errorState.closeHour && <p>{errorState.closeHour}</p>}
              </div>
              <div
                className={classNames(
                  style.group,
                  errorState.description && style.error,
                )}
              >
                <label className={style.subtittle}>Descripción: </label>
                <textarea
                  name="description"
                  className={style.textarea}
                  onChange={handleInputChange}
                  onBlur={(e) => validate(e.target, dispatchError, input)}
                />
                {errorState.description && <p>{errorState.description}</p>}
              </div>
            </div>
          </div>
        <Link className={style.link_back} to='/profile'>{'< Volver'}</Link>
        </form>
      </div>
      <MiniFooter/>
      {modal && (modalIs === 'complete' ? 
            <div className={style.modal_main}>
                <div className={style.modal_box}>
                    <p>La publicación se ha realizado con éxito.<br/>Espera a que uno de los administradores la apruebe. :)</p>
                    <div className={style.modal_btns}>
                        <button onClick={() => (setModal({is: 'inProcess', active: false}), window.location.replace('/'))}>Ir al inicio</button>
                    </div>
                </div>
            </div>
            :
            <div className={style.modal_main}>
                <div className={style.modal_box}>
                    <p>Lo lamentamos, no se pudo publicar tu cancha :(</p>
                    <h1>¿Quieres reintentarlo?</h1>
                    <div className={style.modal_btns}>
                        <button onClick={() => (setModal(false), setModalIs('inProcess'))}>Reintentar</button>
                        <button onClick={() => (setModal(false), setModalIs('inProcess'), window.location.replace('/'))}>Ir al inicio</button>
                    </div>
                </div>
            </div>)}
    </div>
  );
}
