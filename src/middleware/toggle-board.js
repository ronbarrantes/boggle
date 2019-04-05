import { checkWord } from '../actions/word'
import { isBoardActive } from '../reducers'
import { setBoardInactive } from '../actions/board'
import { TOGGLE_BOARD_ACTIVE } from '../constants/action-types'

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
