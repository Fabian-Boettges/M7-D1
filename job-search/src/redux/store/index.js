//Redux step 1: create a store
import {createStore} from 'redux'
import mainReducer from '../reducers'

//step 2: declare initial state
export const initialState = {
    favorites: {
        companies: [],
    }
}

const configureStore = createStore (
    mainReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore