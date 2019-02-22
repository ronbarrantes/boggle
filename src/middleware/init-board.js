import { INIT_BOARD } from '../constants/action-types'

const initBoard = ({ dispatch })=> next => action =>{
  if(action.type === INIT_BOARD){
    console.log('intializing')
  }

  next(action)
}

export default initBoard