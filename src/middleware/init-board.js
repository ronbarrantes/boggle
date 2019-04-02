import { INIT_BOARD } from '../constants/action-types'
import { setBoard } from '../actions/board'
import { boardData } from '../lib/util'

console.log(boardData)

const initBoard = ({ dispatch }) => next => action =>{
  if(action.type === INIT_BOARD){
    dispatch(setBoard(boardData.byHash))
  }
  next(action)
}


export default initBoard