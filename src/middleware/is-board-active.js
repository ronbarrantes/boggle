import { SET_LETTER } from '../constants/action-types'

const isBoardActive = ({ getState }) => next => action => {
  if(action.type !== SET_LETTER){
    return next(action)
  }

  if(getState().board.isActive)
    next(action)
}

export default isBoardActive