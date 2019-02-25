import { RESET_LETTERS } from '../constants/action-types'
import { setLetterReset } from '../actions/board'

const resetLetters = ({ getState, dispatch }) => next => action => {
  if(action.type !== RESET_LETTERS){
    return next(action)
  }
  const { board } = getState()
  if(board.isActive){
    let lettersByHash = getState().board.lettersById.map(item =>
      ({ ...board.lettersByHash[item], isVisited: false }))
    dispatch(setLetterReset({ ...board, lettersByHash, isActive: false }))
  }
}

export default resetLetters
