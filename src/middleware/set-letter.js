import { SET_LETTER } from '../constants/action-types'
import { addLetter } from '../actions/word'

const setLetter = ({ getState, dispatch }) => next => action => {
  if(action.type !== SET_LETTER)
    return next(action)

  const id = action.letterId
  const { letter } = getState().board.tiles[id]

  dispatch(addLetter(letter))
  next(action)
}

export default setLetter