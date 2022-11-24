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
  FILTER_BY_NAME,
  FILTER_FIELDS,
  ID_FIELD,
  USER,
  CLEAN_ERRORS,
  GET_COMMENTS,
  GET_FIELD_COMMENTS,
  GET_BOOKINGS,
  SEND_EMAIL,
  DELETE_ACCOUNT,
  GET_USER,
  PUT_USER,
  PLAN,
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
  commentsByField: [],
  detail: {},
  bookings: [],
  user: '',
  deleteUser: [],
  allUsers: [],
  errors: null,
  plan: {basico: {img: 'https://pbs.twimg.com/media/FFn0jYGWQAgaT2X.jpg', name: 'Básico', price: '2800', desc: '50'},
        club: {img: 'https://www.bluehills.org/assets/uploads/athletics/fall/Soccer.jpg', name: 'Clubes', price: '6000', desc: '50'},
        premium: {img: 'https://static01.nyt.com/images/2020/09/25/sports/25soccer-nationalWEB1/merlin_177451008_91c7b66d-3c8a-4963-896e-54280f374b6d-mobileMasterAt3x.jpg', name: 'Premium', price: '12300', desc: '50'}}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRUEBA:
      return {
        ...state,
        prueba: action.payload,
      };
      case PLAN:
        const { editPlan, key } = action.payload;
        return{
          ...state,
          plan: {
            ...state.plan,
            [key]: editPlan,
          },
        }

      case GET_FIELDS:{
        return {
          ...state, 
          fields: action.payload,
          allFields: action.payload,
          // fieldsFilterByCity: action.payload,
          // fieldsFilterByCityAndSize: [],
          errors: null,
        }
      }

      case GET_USER:{
        return{
          ...state,
          allUsers: action.payload,
        }
      }

      case FILTER_FIELDS:{
        let surface=[];
        let fields = state.allFields
        if(action.payload.surface.length){
          for(let i = 0; i< action.payload.surface.length;i++){
            surface = [...surface, fields.filter(e => e.SurfaceId == action.payload.surface[i])]
          }
          fields = surface.flat();
        }
        if(action.payload.size){
          fields = fields.filter((field) => field.SizeId == action.payload.size)
        }
        if(action.payload.city){
          fields = fields.filter((field) => field.CityId == action.payload.city)
        }
        if(action.payload.name){
          fields = fields.filter((field) => field.name.toLowerCase().includes(action.payload.name.toLowerCase()))
        }
        const fieldsFiltered = fields
        if(fieldsFiltered.length){
        console.log(fieldsFiltered);
        return{
          ...state,
          errors: null,
          fields: fieldsFiltered
        }}
        else{
          return{
            ...state,
            errors: { message: "Not matches found" }
          }
        }
      }

      case FILTER_BY_NAME:{
        const fields = state.allFields
        const fieldsFilteredByName = fields.filter((field) => field.name.includes(action.payload))
        return{
          ...state,
          fields: fieldsFilteredByName
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
        if (fieldsFilteredBySize.length === 0) {
          return {
            ...state,
            errors: { message: "Not matches found" }
          }
        }
        else {
          return{
            ...state,
            fields: fieldsFilteredBySize,
            fieldsFilterByCityAndSize: fieldsFilteredBySize
          }
        }
      }

      case FILTER_BY_SURFACE:{
        const fields = state.fieldsFilterByCityAndSize.length ?  state.fieldsFilterByCityAndSize : state.allFields
        const fieldsFilteredBySurface = fields.filter((field) => field.SurfaceId == action.payload)
        if (fieldsFilteredBySurface.length === 0){
          return {
            ...state,
            errors: { message: "Not matches found" },
          } 
        }
        else {
          return {
            ...state,
            fields: fieldsFilteredBySurface
          }
        }
      }
      case FILTER_BY_TIME:{
        const fields = state.allFields
        const fieldsFilteredByTime = fields.filter((field) => field.openHour < action.payload && field.closeHour > action.payload)
        if (fieldsFilteredByTime.length === 0){
          return {
            ...state,
            error: { message: "Not matches found" },
          } 
        }
        else {
          return {
            ...state,
            fields: fieldsFilteredByTime
          }
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
    
    case ID_FIELD:{
      return {...state, detail: action.payload}
    }
    case USER:{
      return {...state, user: action.payload}
    }
    case PUT_USER:{
      return {...state}
    }
    case CLEAN_ERRORS:{
      return {...state, errors: action.payload}
    }
    case  GET_COMMENTS:{
      return {...state, comments: action.payload}
    }
    case GET_FIELD_COMMENTS:{
      return {...state, commentsByField: action.payload}
    }
    case GET_BOOKINGS:{
      return {...state, bookings: action.payload}
    }
    case SEND_EMAIL:{
      return{...state}
    }
    case DELETE_ACCOUNT: {
      return {
        ...state, deleteUser: action.payload
      }
    }
    default:
      return { ...state };
  }
};

export default rootReducer;
