import { SET_LETTER_VISITED } from '../constants/action-types'

const isBoardActive = ({ getState }) => next => action => {
  if(action.type !== SET_LETTER_VISITED){
    return next(action)
  }

  const { isActive } = getState().board
  if(isActive)
    next(action)
}

export default isBoardActive