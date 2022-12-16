import { createStore, combineReducers } from "redux";
import { ActionModal } from './Reducer.jsx'

export default createStore(
    combineReducers({
        modal: ActionModal
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)