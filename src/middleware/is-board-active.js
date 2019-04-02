import { SET_LETTER } from '../constants/action-types'
import {  } from '../reducers'

const isBoardActive = ({ getState, dispatch }) => next => action => {

  if(action.type !== SET_LETTER){
    return next(action)
  }

  if(getState().board.isBoardActive)
    next(action)

}

export default isBoardActive