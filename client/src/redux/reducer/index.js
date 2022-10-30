import { 
  PRUEBA,
  GET_CITIES,
  GET_SIZES,
  GET_SURFACES,
  GET_FACILITIES, 
  GET_FIELDS,
  FILTER_BY_CITY,
  FILTER_BY_SIZE,
  FILTER_BY_TIME,
  FILTER_BY_SURFACE,
  ID_FIELD,
} from '../actions/actionsTypes';

const initialState = {
  prueba: '',
  cities: [],
  sizes : [],
  surfaces: [],
  facilities: [],
  fields:[],
  allFields:[],
  fieldsFilterByCity:[],
  fieldsFilterByCityAndSize: [],
  detail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRUEBA:
      return {
        ...state,
        prueba: action.payload,
      };

      case GET_FIELDS:{
        return {
          ...state, 
          fields: action.payload,
          allFields: action.payload,
          fieldsFilterByCity: action.payload,
          fieldsFilterByCityAndSize: []
        }
      }

      case FILTER_BY_CITY:{
        const fields = state.allFields
        const fieldsFilteredByCity = fields.filter((field) => field.CityId == action.payload)
        return{
          ...state,
          fields: fieldsFilteredByCity,
          fieldsFilterByCity: fieldsFilteredByCity
        }
      }
      case FILTER_BY_SIZE:{
        const fields = state.fieldsFilterByCity
        const fieldsFilteredBySize = fields.filter((field) => field.SizeId == action.payload)
        
        return{
          ...state,
          fields: fieldsFilteredBySize,
          fieldsFilterByCityAndSize: fieldsFilteredBySize
        }
      }

      case FILTER_BY_SURFACE:{
        const fields = state.fieldsFilterByCityAndSize.length ?  state.fieldsFilterByCityAndSize : state.allFields
        const fieldsFilteredBySurface = fields.filter((field) => field.SurfaceId == action.payload)
        return {
          ...state,
          fields: fieldsFilteredBySurface
        }
      }
      case FILTER_BY_TIME:{
        const fields = state.allFields
        const fieldsFilteredByTime = fields.filter((field) => field.openHour < action.payload && field.closeHour > action.payload)
        return {
          ...state,
          fields: fieldsFilteredByTime
        }
      }
      
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
    case ID_FIELD:{
      return {...state, detail: action.payload}
    }
    default:
      return { ...state };
  }
};

export default rootReducer;
