import classNames from 'classnames';
import React, { useEffect, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postField } from '../../redux/actions/index';
import { validate } from './validate';
import Navbar from '../NavBar/Navbar';

import {
  getCities,
  getSizes,
  getSurfaces,
  getFacilities,
} from '../../redux/actions';
import style from './create.module.css';

export default function Create() {
  const dispatch = useDispatch();
  const cities = useSelector((s) => s.cities);
  const sizes = useSelector((s) => s.sizes);
  const surfaces = useSelector((s) => s.surfaces);
  const facilities = useSelector((s) => s.facilities);

  useEffect(() => {
    dispatch(getCities());
    dispatch(getSizes());
    dispatch(getSurfaces());
    dispatch(getFacilities());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [input, setInput] = React.useState({
    name: '',
    image: '',
    price: '',
    address: '',
    openHour: '',
    closeHour: '',
    CityId: '',
    SizeId: '',
    SurfaceId: '',
    Facilities: [],
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const inputsToValidate = [
      'name',
      'image',
      'price',
      'address',
      'openHour',
      'closeHour',
      'CityId',
      'SizeId',
      'SurfaceId',
    ];

    let canSubmit = true;

    for (let inputToValidate of inputsToValidate) {
      const isValid = validate(
        e.target.elements[inputToValidate],
        dispatchError,
      );

      if (!isValid) {
        canSubmit = false;
      }
    }

    if (canSubmit) {
      dispatch(postField(input));
    }
  };
  const [errorState, dispatchError] = useReducer((state, action) => {
    return { ...state, [action.type]: action.value };
  }, {});

  const handleInputChange = (e) => {
    const { target } = e;

    let targetValue = target.value;

    if (target.name === 'openHour' || target.name === 'closeHour') {
      targetValue = targetValue.split(':')[0];
    }

    setInput({ ...input, [target.name]: targetValue });
    validate(target, dispatchError);
  };

  const handlecheck = (e) => {
    const Facilities = [...input.Facilities];

    if (e.target.checked) {
      Facilities.push(e.target.value);
    } else {
      Facilities.splice(Facilities.indexOf(e.target.value), 1);
    }

    setInput({
      ...input,
      Facilities,
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
                style.group,
                errorState.name && style.error,
              )}
            >
              <div className={style.right}>
                <img
                  className={style.image}
                  src="https://www.espaciosdeportivos.com.gt/wp-content/uploads/2020/08/canchas-futbol-5.jpg"
                  alt="cancha"
                />
                <div className={style.itemsServicios}>
                  <label className={style.subtittleFa}>Facilidades: </label>
                  {facilities.map((f) => (
                    <label key={f.id} className={style.subtittleFa}>
                      {f.name}
                      <input
                        type="checkbox"
                        value={f.id}
                        onChange={handlecheck}
                      />
                    </label>
                  ))}
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
                  onBlur={(e) => validate(e.target, dispatchError)}
                />
                {errorState.name && <p>{errorState.name}</p>}
              </div>
              <div
                className={classNames(
                  style.group,
                  errorState.image && style.error,
                )}
              >
                <label className={style.subtittle}>Imagen:</label>

                <input
                  className={style.input}
                  type="text"
                  name="image"
                  value={input.image}
                  onChange={handleInputChange}
                  onBlur={(e) => validate(e.target, dispatchError)}
                />
                {errorState.image && <p>{errorState.image}</p>}
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
                  onBlur={(e) => validate(e.target, dispatchError)}
                />
                {errorState.price && <p>{errorState.price}</p>}
              </div>
              <div
                className={classNames(
                  style.group,
                  errorState.CityId && style.error,
                )}
              >
                <label className={style.subtittle}>Localidad:</label>
                <select
                  className={style.input}
                  name="CityId"
                
                  onChange={handleInputChange}
                  onBlur={(e) => validate(e.target, dispatchError)}
                >
                  <option value="">Seleccione una localidad</option>

                  {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name} 
                    </option>
                  ))}
                </select>
                {errorState.CityId && <p>{errorState.CityId}</p>}
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
                  onBlur={(e) => validate(e.target, dispatchError)}
                />
                {errorState.address && <p>{errorState.address}</p>}
              </div>
              <div
                className={classNames(
                  style.group,
                  errorState.SizeId && style.error,
                )}
              >
                <label className={style.subtittle}>Tamaño:</label>
                <select
                  onChange={handleInputChange}
                  name="SizeId"
                  className={style.input}
                  
                  onBlur={(e) => validate(e.target, dispatchError)}
                >
                  <option value="">Seleccione un tamaño</option>
                  {sizes.map((size) => (
                    <option
                      key={size.id}
                      value={size.id}
                      onChange={handleInputChange}
                      onBlur={(e) => validate(e.target, dispatchError)}
                    >
                      Futbol {size.name}
                    </option>
                  ))}
                </select>
                {errorState.SizeId && <p>{errorState.SizeId}</p>}
              </div>
              <div
                className={classNames(
                  style.group,
                  errorState.SurfaceId && style.error,
                )}
              >
                <label className={style.subtittle}>Superficie:</label>
                <select
                  className={style.input}
                  name="SurfaceId"
                  onChange={handleInputChange}
                  onBlur={(e) => validate(e.target, dispatchError)}
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
                {errorState.SurfaceId && <p>{errorState.SurfaceId}</p>}
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
                  onChange={handleInputChange}
                  onBlur={(e) => validate(e.target, dispatchError)}
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
                  onChange={handleInputChange}
                  onBlur={(e) => validate(e.target, dispatchError)}
                />
                {errorState.closeHour && <p>{errorState.closeHour}</p>}
              </div>
              {/* <div className={style.group}>
                <label className={style.subtittle}>Descripción: </label>
                <textarea className={style.textarea} onChange={handleInputChange}
                  onBlur={(e) => validate(e.target, dispatchError)}/>
                  {errorState.address && <p>{errorState.address}</p>}
              </div> */}
              <button type="submit" className={style.buttonCrear}>
                Crear
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
