import { RESET_LETTERS } from '../constants/action-types'
import { setLetterReset } from '../actions/board'

const resetLetters = ({ getState, dispatch }) => next => action => {
  if(action.type !== RESET_LETTERS){
    return next(action)
  }
  const { board } = getState()

  if(board.isActive){
    board.lettersById.map(id =>
      board.lettersByHash[id].isVisited = false
    )
    board.isActive = false
    dispatch(setLetterReset(board))
  }

}

export default resetLetters