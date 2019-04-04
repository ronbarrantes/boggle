import { TOGGLE_BOARD_ACTIVE } from '../constants/action-types'
import { board } from '../actions'
import { isBoardActive } from '../reducers'

const toggleBoard = ({ getState, dispatch }) => next => action => {
  if(action.type !== TOGGLE_BOARD_ACTIVE)
    return next(action)

  const isActive = isBoardActive(getState())

  // if(isActive)
    console.log('IS ACTIVE')

  next(action)
}

export default toggleBoard


// TODO: Do this middleware logic

// ### activateBoard [first click]
// - activates board
// - enables selecting/hovering
// - **selectLetter()**
