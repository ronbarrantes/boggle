import { resetWord } from '../actions/word'
import { isBoardActive, tiles } from '../reducers'
import {  SET_BOARD_INACTIVE } from '../constants/action-types'

const resetLetters = (letters) => (
  Object.keys(letters).forEach((item) => {
    letters[item].isTileVisited = false
  })
)

const deactivateBoard = ({ getState, dispatch }) => next => action => {
  if(action.type !== SET_BOARD_INACTIVE)
    return next(action)

  const state = getState()
  const isActive = isBoardActive(state)
  const theTiles = tiles(state)

  if (isActive) {
    resetLetters(theTiles)
    dispatch(resetWord())
    next(action)
  }
}

export default deactivateBoard

