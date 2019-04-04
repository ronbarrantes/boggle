import {  SET_BOARD_INACTIVE } from '../constants/action-types'

import { isBoardActive, tiles, isTileVisited } from '../reducers'
import { setLetterReset } from '../actions/board'

const resetLetters = (letters) => (
  Object.keys(letters).forEach((item) => {
    letters[item].isTileVisited = false
  })
)

const deactivateBoard = ({ getState }) => next => action => {
  if(action.type !== SET_BOARD_INACTIVE)
    return next(action)

  const isActive = isBoardActive(getState())
  const theTiles = tiles(getState())

  if (isActive) {
    console.log('Deactivating')
    resetLetters(theTiles)
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