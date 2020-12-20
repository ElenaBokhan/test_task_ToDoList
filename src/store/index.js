import { createStore, combineReducers } from "redux";
import { TodoReducer } from "./TodoReducer";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
    TodoReducer,
    form: formReducer 
})

export function initStore() {
    const initialStore = {};
    return createStore(reducers, initialStore)
}