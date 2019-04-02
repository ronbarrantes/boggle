import { ADD_VALID_WORD, ADD_INVALID_WORD } from '../constants/action-types'

const initialState = {
  validWords:['hello'],
  invalidWords:['notaword'],
}

const wordListReducer = (wordList = initialState, action) => {
  switch (action.type) {
    case ADD_VALID_WORD:
      return ({
        ...wordList,
        validWords: [ ...wordList.validWords, action.word ],
      })

    case ADD_INVALID_WORD:
      return ({
        ...wordList,
        invalidWords: [ ...wordList.invalidWords, action.word ],
      })

    default:
      return wordList
  }
}

export const validWords = (state) => state.wordList.validWords
export const invalidWords = (state) => state.wordList.invalidWords

export default wordListReducer