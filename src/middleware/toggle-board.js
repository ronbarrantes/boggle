import { TOGGLE_BOARD_ACTIVE } from '../constants/action-types'
import { setBoardInactive } from '../actions/board'
import { checkWord } from '../actions/word'
import { isBoardActive } from '../reducers'

const toggleBoard = ({ getState, dispatch }) => next => action => {
  if(action.type !== TOGGLE_BOARD_ACTIVE)
    return next(action)

  const isActive = isBoardActive(getState())

  if(isActive){
    dispatch(checkWord())
    return dispatch(setBoardInactive())
  }
  next(action)
}

export default toggleBoard
