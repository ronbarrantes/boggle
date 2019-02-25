import { turnEverythingOn } from '../actions/board'

const everythingOn = ({ getState, dispatch }) => next => action => {
  if (action.type !== 'ACTIVATE_FUCKING_EVERYTHING'){
    return next(action)
  }

  let { board } = getState()

  let lettersByHash = board.lettersById.map(item =>
    ({ ...board.lettersByHash[item], isVisited: true }))

  dispatch(turnEverythingOn({ ...board, lettersByHash, isActive: true }))

}

export default everythingOn