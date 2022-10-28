import { PRUEBA, GET_CITIES, GET_SIZES, GET_SURFACES, GET_FACILITIES, GET_FIELDS } from '../actions/actionsTypes';

const initialState = {
  prueba: '',
  cities: [],
  sizes : [],
  surfaces: [],
  facilities: [],
  fields:[],
  
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRUEBA:
      return {
        ...state,
        prueba: action.payload,
      };

    case GET_CITIES: {
      return { ...state, cities: action.payload };
    }

    case GET_SIZES: {
      return {...state, sizes: action.payload}
    }
    case GET_SURFACES:{
      return {...state, surfaces: action.payload}
    }
    case GET_FACILITIES:{
      return {...state, facilities: action.payload}
    }
    case GET_FIELDS:{
      return {...state, fields: action.payload}
    }
    

    default:
      return { ...state };
  }
};

export default rootReducer;
