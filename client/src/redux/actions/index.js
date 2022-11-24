import axios from 'axios';
import {
  PRUEBA,
  GET_CITIES,
  GET_SIZES,
  GET_SURFACES,
  GET_FACILITIES,
  GET_FIELDS,
  ID_FIELD,
  USER,
  FILTER_BY_CITY,
  FILTER_BY_SIZE,
  FILTER_BY_TIME,
  FILTER_BY_SURFACE,
  FILTER_BY_NAME,
  FILTER_FIELDS,
  CLEAN_ERRORS,
  GET_COMMENTS,
  GET_FIELD_COMMENTS,
  GET_BOOKINGS,
  SEND_EMAIL,
  DELETE_ACCOUNT,
  GET_USER,
  PUT_USER,
  PLAN,
} from './actionsTypes';

export const prueba = () => {
  return {
    type: PRUEBA,
    payload: 'prueba',
  };
};

export const plan = (editPlan, key) => {
  return {
    type: PLAN,
    payload: { editPlan, key },
  }
}

export  function sendInquiryEmail(payload){
return async (dispatch) => {
  const response = await axios.post('/inquirys', {mail:payload} )
  dispatch({
    type: SEND_EMAIL,
    payload: response.data
  })
}
  
    
}

export const getCities = () => {
  return async (dispatch) => {
    const response = await axios.get('/cities');

    dispatch({
      type: GET_CITIES,
      payload: response.data,
    });
  };
};

export const getSizes = () => {
  return async (dispatch) => {
    const response = await axios.get('/sizes');
    dispatch({
      type: GET_SIZES,
      payload: response.data,
    });
  };
};

export const getSurfaces = () => {
  return async (dispatch) => {
    const response = await axios.get('/surfaces');
    dispatch({
      type: GET_SURFACES,
      payload: response.data,
    });
  };
};

export const getFacilities = () => {
  return async (dispatch) => {
    const response = await axios.get('/facilities');
    dispatch({
      type: GET_FACILITIES,
      payload: response.data,
    });
  };

};

// export const postField = (payload, id) => {
//   /* console.log(isNaN(id)) //true no es un numero */
//   return async () => {
//     try {
//       await axios.post('/fields/' + id, payload);
//       alert('Cancha creada con exito!');
//       window.location.href = '/sintetico';
//     } catch (error) {
//       alert('No se pudo crear una cancha.');
//     }
//   };
// };



export const getFields = () => {
  return async (dispatch) => {
    const response = await axios.get('/fields' );
    dispatch({
      type: GET_FIELDS,
      payload: response.data,
    });
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    const users = await axios.get("/users")
    dispatch({
      type: GET_USER,
      payload: users.data,
    })
  }
}

export const putUser = (id) => {
  return async (dispatch) => {
    const user = await axios.put("/users/" + id)
    dispatch({
      type: PUT_USER,
      payload: user.data,
    })
  }
}

export function filterField(payload) {
  return {
    type: FILTER_FIELDS,
    payload: payload,
  };
}

export function filterFieldByName(payload) {
  Number(payload);
  return {
    type: FILTER_BY_NAME,
    payload: payload,
  };
}

export function filterFieldByCity(payload) {
  Number(payload);
  return {
    type: FILTER_BY_CITY,
    payload: payload,
  };
}

export function filterFieldBySize(payload) {
  Number(payload);
  return {
    type: FILTER_BY_SIZE,
    payload: payload,
  };
}

export function filterFieldByTime(payload) {
  Number(payload);
  return {
    type: FILTER_BY_TIME,
    payload: payload,
  };
}

export function filterFieldBySurface(payload) {
  Number(payload);
  return {
    type: FILTER_BY_SURFACE,
    payload: payload,
  };
}

export const getFieldDetail = (id) => {
  return async (dispatch) => {
    const idField = await axios.get('/fields/' + id);
    dispatch({
      type: ID_FIELD,
      payload: idField.data,
    });
  };
};

export const getFieldComments = (id) => {
  return async(dispatch) => {
    const comments = await axios.get('/comments/' + id);
    dispatch({
      type:  GET_FIELD_COMMENTS,
      payload: comments.data,
    });
  }
}

export const postComment = (payload) => {
  return async (dispatch) => {
    try {
      await axios.post('/comments', payload);
    } catch (error) {
      console.log(error)
    }
  };
};

export const getComments = () => {
  return async (dispatch) => {
    const response = await axios.get('/comments');
    dispatch({
      type: GET_COMMENTS,
      payload: response.data,
    });
  };
};

export const postBooking=(payload)=>{
  return async (dispatch) => {
    try {
      await axios.post('/bookings', payload);
    } catch (error) {
      console.log(error)
    }
  }
}

export const getBookings=()=>{
  return async (dispatch) => {
    const response = await axios.get('/bookings');
    dispatch({
      type: GET_BOOKINGS,
      payload: response.data,
    })

  }
}



export const userLogin = (user) => {
  return {
    type: USER,
    payload: user,
  };
};

export function cleanErrors() {
  return {
    type: CLEAN_ERRORS,
    payload: null,
  };
}

export const deleteAccount = (id) => {
  return async (dispatch) => {
    const response = await axios.delete('/users/' + id)
    dispatch({
      type: DELETE_ACCOUNT,
      payload: response.data
    })
  }
}
