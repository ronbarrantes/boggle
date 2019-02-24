import { SET_LETTER_VISITED } from '../constants/action-types'

const addLetter = ({ getState, dispatch }) => next => action => {
  if(action.type !== SET_LETTER_VISITED)
    return next(action)


  console.log('SETLETTERVISITED -->')

  next(action)
}

export default addLetter