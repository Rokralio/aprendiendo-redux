import axios from "axios";

//const
let initialData = {
  fetching: false,
  array: [],
  current: {}
}

let URL = "https://rickandmortyapi.com/api/character"


let GET_CHARACTERS = 'GET_CHARACTERS'
let GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS'
let GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR'

let REMOVE_CHARACTER = 'REMOVE_CHARACTER'

//Reducer
export default function reducer (state = initialData, action) {
  switch (action.type) {
    case REMOVE_CHARACTER:
      return{ ...state, array: action.payload }

    case GET_CHARACTERS:
      return { ...state, fetching: true }
    case GET_CHARACTERS_ERROR:
      return { ...state, fetching: false, error: action.payload }
    case GET_CHARACTERS_SUCCESS:
      return { ...state, array: action.payload, fetching: false }
    default:
      return state
  }
}
//actions (thunks)
export let removeCharacterAction = () => (dispatch, getState)=>{
  let { array } = getState().characters
  array.shift()
  dispatch({
    type: REMOVE_CHARACTER,
    payload: [...array]
  })
}

export let getCharactersAction = () => (dispatch, getState) =>{
  dispatch({
    type: GET_CHARACTERS,
  })
  return axios.get(URL) //axios va a pedir los personajes
  .then(res =>{
    dispatch({
      type: GET_CHARACTERS_SUCCESS,
      payload: res.data.results //payload es la dada.
      })
  })
  .catch(err =>{
    dispatch({
      type: GET_CHARACTERS_ERROR,
      payload: err.response.message
    })
  })
}


