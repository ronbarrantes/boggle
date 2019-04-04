import { letter, isBoardActive } from '../reducers'
import { word, board } from '../actions'
import { SELECT_LETTER } from '../constants/action-types'


const activateLetter = ({ getState, dispatch }) => next => action => {
  if (action.type !== SELECT_LETTER)
    return next(action)

  // TODO: Make this work with isBoardActive
  if (isBoardActive(getState())){
    const id = action.tileId
    const tileLetter = letter(getState(), id)
    dispatch(word.addLetter(tileLetter))
    dispatch(word.setLetter(id))
    console.log('active yay')
    // next(action)
  }
}

export default activateLetter

// TODO: Do this middleware logic

// ### selectLetter [Hovering]
// - selects letter
// - add letter to adder
// - turn letter on