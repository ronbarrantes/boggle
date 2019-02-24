import { ADD_VALID_WORD, ADD_INVALID_WORD, NO_WORD_ADDED } from '../constants/action-types'

const isWordInList = ({ getState }) => next => action => {
  const { validWords, invalidWords } = getState().wordList

  switch (action.type) {
    case ADD_VALID_WORD:
      if (validWords.includes(action.word)){
        action.type = NO_WORD_ADDED
        return next(action)
      }
      break
    case ADD_INVALID_WORD:
      if (invalidWords.includes(action.word)){
        action.type = NO_WORD_ADDED
        return next(action)
      }
      break
    default:
      break
  }

  next(action)
}

export default isWordInList