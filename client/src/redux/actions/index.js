import axios from 'axios';
import {
  PRUEBA,
  GET_CITIES,
  GET_SIZES,
  GET_SURFACES,
  GET_FACILITIES,
  GET_FIELDS,
  ID_FIELD,
  USER
} from './actionsTypes';

export const prueba = () => {
  return {
    type: PRUEBA,
    payload: 'prueba',
  };
};

export const getCities = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/cities');

    dispatch({
      type: GET_CITIES,
      payload: response.data,
    });
  };
};

export const getSizes = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/sizes');
    dispatch({
      type: GET_SIZES,
      payload: response.data,
    });
  };
};

export const getSurfaces = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/surfaces');
    dispatch({
      type: GET_SURFACES,
      payload: response.data,
    });
  };
};

export const getFacilities = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/facilities');
    dispatch({
      type: GET_FACILITIES,
      payload: response.data,
    });
  };
};

export const postField = (payload) => {
  return async () => {
    try {
      await axios.post('http://localhost:3001/fields', payload);
      alert('Cancha creada con exito!');
      window.location.href = '/sintetico';
    } catch (error) {
      alert('No se pudo crear una cancha.');
    }
  };
};

export const getFields = () =>{
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/fields');
    dispatch({
      type: GET_FIELDS,
      payload: response.data,
    })
  }
}

export const getFieldDetail = (id) => {
  return async(dispatch) => {
    const idField = await axios.get("http://localhost:3001/fields/" + id)
    dispatch({
      type: ID_FIELD,
      payload: idField.data,
    })
  }
}

export const userLogin = (user) => {
  return {
    type: USER,
    payload: user
  }
}