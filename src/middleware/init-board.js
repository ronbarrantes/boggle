import { boardData } from '../lib/util'
import { setBoard } from '../actions/board'
import { INIT_BOARD } from '../constants/action-types'

const initBoard = ({ dispatch }) => next => action =>{
  if(action.type === INIT_BOARD){
    dispatch(setBoard(boardData.byHash))
  }
  next(action)
}


export default initBoard