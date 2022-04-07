import {initialState} from '../store'
import {ADD_FAVORITES} from '../actions'

// step 3: declare reducer
const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITES:
            return{
                ...state,
                favorites: {
                    ...state.favorites,
                    companies: [...state.favorites.companies, action.payload],
                },
            }
        default: return state   
    }
}

export default mainReducer