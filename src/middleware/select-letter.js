import { letter } from '../reducers'
import { word } from '../actions'
import { SET_LETTER } from '../constants/action-types'


const activateLetter = ({ getState, dispatch }) => next => action => {
  if (action.type !== SET_LETTER)
    return next(action)

  const id = action.tileId
  const tileLetter = letter(getState(), id)

  dispatch(word.addLetter(tileLetter))
  next(action)

}

export default activateLetter

// TODO: Do this middleware logic

// ### selectLetter [Hovering]
// - selects letter
// - add letter to adder
// - turn letter on