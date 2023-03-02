import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import userReducer from "./userDuck";
import thunk from "redux-thunk";//para hacer promesas, consumos al backend

//herramientas de desarrolador
let rootreducer = combineReducers({
  user: userReducer,
})
//pregunta si tiene instalado o soporta las herramientas de desarrollo || o si usas compose
const composeEnancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore (){
  let store = createStore(rootreducer,
    composeEnancers(applyMiddleware(thunk))
  )
return store;
}
