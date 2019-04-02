import { TOGGLE_ACTIVE }  from '../constants/action-types'
import { checkWord, resetWord } from '../actions/word'

const toggleBoard = ({ getState, dispatch }) => next => action => {
  if (action.type !== TOGGLE_ACTIVE)
    return next(action)

  const { board, word } = getState()

  if (board.isBoardActive && word){
    dispatch(checkWord())
  }

  if(word && !board.isBoardActive)
  {
    dispatch(resetWord())
  }

  next(action)
}

export default toggleBoard