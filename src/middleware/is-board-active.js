import { SET_LETTER_VISITED } from '../constants/action-types'

const isBoardActive = ({ getState }) => next => action => {
  if(action.type !== SET_LETTER_VISITED){
    return next(action)
  }

  if(getState().board.isActive)
    next(action)
}

export default isBoardActive