import {  SET_BOARD_INACTIVE } from '../constants/action-types'

import { isBoardActive, tiles } from '../reducers'

import { resetWord } from '../actions/word'

const resetLetters = (letters) => (
  Object.keys(letters).forEach((item) => {
    letters[item].isTileVisited = false
  })
)

const deactivateBoard = ({ getState, dispatch }) => next => action => {
  if(action.type !== SET_BOARD_INACTIVE)
    return next(action)

  const isActive = isBoardActive(getState())
  const theTiles = tiles(getState())

  if (isActive) {
    console.log('Deactivating')
    resetLetters(theTiles)
    dispatch(resetWord())
    next(action)
  }
}

export default deactivateBoard

