import { PRUEBA, GET_CITIES } from '../actions/actionsTypes';

const initialState = {
  prueba: '',
  cities: [],
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

    default:
      return { ...state };
  }
};

export default rootReducer;
