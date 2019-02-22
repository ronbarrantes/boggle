import { INIT_BOARD } from '../constants/action-types'
import { setBoard } from '../actions/board'

import { boardData } from '../lib/util'

const initBoard = ({ dispatch }) => next => action =>{
  console.log('hello')
  if(action.type === INIT_BOARD){
    console.log('BOARD-->', boardData)
    dispatch(setBoard(boardData))
  }
  next(action)
}

export default initBoard