import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import userReducer from "./userDuck";
import charsReducer,{getCharactersAction} from "./charsDuck";
import thunk from "redux-thunk";//para hacer promesas, consumos al backend

//herramientas de desarrolador
let rootreducer = combineReducers({
  user: userReducer,
  characters: charsReducer
})
//pregunta si tiene instalado o soporta las herramientas de desarrollo || o si usas compose
const composeEnancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore (){
    let store = createStore(
      rootreducer,
      composeEnancers(applyMiddleware(thunk))
    )
  //consiguiendo los personajes por primera vez
  getCharactersAction()(store.dispatch, store.getState)
  return store
}
