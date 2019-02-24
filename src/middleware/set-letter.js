import { SET_LETTER_VISITED } from '../constants/action-types'
import { addLetter } from '../actions/word'

const setLetter = ({ getState, dispatch }) => next => action => {
  if(action.type !== SET_LETTER_VISITED)
    return next(action)

  const id = action.letterId
  const letter = getState().board.lettersByHash[id].letter

  next(action)
  dispatch(addLetter(letter))

}

export default setLetter