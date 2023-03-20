import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReucer";
import ThunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import persistStore from "redux-persist/es/persistStore";

export const store = createStore(
  rootReducer,

  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeWithDevTools(applyMiddleware(ThunkMiddleware))
);

export const persistor = persistStore(store);
