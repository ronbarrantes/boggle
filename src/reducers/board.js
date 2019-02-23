import { SET_BOARD, SELECT_LETTER_TOGGLE, SET_LETTER_RESET } from '../constants/action-types'

const initialState = {
  isActive: false,
  lettersById: [],
  lettersByHash: {},
}

const boardReducer = (board = initialState, action) => {
  switch (action.type) {
    case SELECT_LETTER_TOGGLE: {
      return ({
        ...board,
        lettersByHash: {
          ...board.lettersByHash,
          [action.letterId]: {
            letter: board.lettersByHash[action.letterId].letter,
            isVisited: !board.lettersByHash[action.letterId].isVisited,
          },
        },
      })
    }

    case SET_LETTER_RESET:
      console.log('ACTION BOARD-->', action.board.lettersByHash)
      return action.board

    case SET_BOARD: {
      const boardData = {
        isActive: false,
        lettersById: action.board.byId,
        lettersByHash: action.board.byHash,
      }
      return boardData
    }

    default:
      return board
  }
}

export default boardReducer