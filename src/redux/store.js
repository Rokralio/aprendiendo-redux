import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import userReducer, { restoreSessionAction } from "./userDuck";
import charsReducer, { getCharactersAction } from "./charsDuck";
import thunk from "redux-thunk";//para hacer promesas, consumos al backend

//herramientas de desarrolador
let rootreducer = combineReducers({
  user: userReducer,
  characters: charsReducer
})
//pregunta si tiene instalado o soporta las herramientas de desarrollo || o si usas compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore (){
    let store = createStore(
      rootreducer,
      composeEnhancers(applyMiddleware(thunk))
    )
  //consiguiendo los personajes por primera vez
  getCharactersAction()(store.dispatch, store.getState)
  restoreSessionAction()(store.dispatch)
  return store
}
