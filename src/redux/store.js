import {createStore, applyMiddleware} from "redux"
import rootReducer from "./rootReucer"

export const store = createStore(rootReducer,applyMiddleware())