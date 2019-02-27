import { RESET_WORD } from '../constants/action-types'
import { setLetterReset } from '../actions/board'

const resetLetters = ({ getState, dispatch }) => next => action => {
  if(action.type !== RESET_WORD){
    return next(action)
  }
  // if(board.isActive)

  let { board } = getState()
  let { lettersByHash, lettersById } = board

  lettersById.forEach(item => {
    lettersByHash[item].isVisited = false
  })

  dispatch(setLetterReset({ ...board, lettersByHash, isActive: false }))
}

export default resetLetters
