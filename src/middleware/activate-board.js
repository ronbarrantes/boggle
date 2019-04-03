import { ACTIVATE_BOARD } from '../constants/action-types'
import { board } from '../actions'

const activateBoard = ({getState, dispatch}) => next => action => {
  if(action.type !== ACTIVATE_BOARD)
    return next(action)
  dispatch(board.toggleActive())
}

export default activateBoard


// TODO: Do this middleware logic

// ### activateBoard [first click]
// - activates board
// - enables selecting/hovering
// - **selectLetter()**
