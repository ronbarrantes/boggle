import { letter, isBoardActive, isTileVisited } from '../reducers'
import { addLetter, setLetter } from '../actions/word'
import { setBoardInactive } from '../actions/board'
import { SELECT_LETTER } from '../constants/action-types'

const activateLetter = ({ getState, dispatch }) => next => action => {
  if (action.type !== SELECT_LETTER)
    return next(action)

  const boardActive = isBoardActive(getState())

  if (boardActive){
    const id = action.tileId
    const tileVisited = isTileVisited(getState(), id)
    const tileLetter = letter(getState(), id)
    dispatch(addLetter(tileLetter))
    dispatch(setLetter(id))

    tileVisited && dispatch(setBoardInactive())
  }
}

export default activateLetter