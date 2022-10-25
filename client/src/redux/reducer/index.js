import { PRUEBA } from "../actions/actionsTypes";

const initialState = {
    prueba: ''
}

const rootReducer = (state = initialState, action) => {
    switch(action.payload){
        case PRUEBA:
            return{
                ...state,
                pruena: action.payload
            }
        default: return {...state}
    }
}

export default rootReducer;