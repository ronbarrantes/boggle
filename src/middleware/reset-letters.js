import { RESET_WORD } from '../constants/action-types'
import { setLetterReset } from '../actions/board'

const resetLetters = ({ getState, dispatch }) => next => action => {
  if(action.type !== RESET_WORD){
    return next(action)
  }
  // if(board.isBoardActive)

  let { board } = getState()
  let { tiles } = board

  Object.keys(tiles).forEach(item => {
    tiles[item].isTileVisited = false
  })

  dispatch(setLetterReset({ ...board, tiles, isBoardActive: false }))
}

export default resetLetters
