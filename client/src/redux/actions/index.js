import axios from 'axios';
import { PRUEBA, GET_CITIES } from './actionsTypes';

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
