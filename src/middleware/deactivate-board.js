import {  SET_BOARD_INACTIVE } from '../constants/action-types'

import { board } from '../actions'
import { isBoardActive } from '../reducers'

const deactivateBoard = ({ getState, dispatch }) => next => action => {
  if(action.type !== SET_BOARD_INACTIVE)
    return next(action)

  const isActive = isBoardActive(getState())

  if (isActive) {
    console.log('Deactivating')
    // dispatch(board.setBoardInactive()) 
    next(action)
  }
}

export default deactivateBoard

// TODO: Do this middleware logic

// ### deactivateBoard
// - deactivates board
// - turn all the letters off
// - disables selecting (hovering)
// - clears letter adder