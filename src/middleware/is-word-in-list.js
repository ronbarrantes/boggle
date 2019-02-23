import { ADD_VALID_WORD, ADD_INVALID_WORD, NO_WORD_ADDED } from '../constants/action-types'

const isWordInList = ({ getState, dispatch }) => next => action => {
  const { validWords, invalidWords } = getState().wordList

  switch (action.type) {
    case ADD_VALID_WORD:
      if (validWords.includes(action.word))
        return next({ type: NO_WORD_ADDED })
      break
    case ADD_INVALID_WORD:
      if (invalidWords.includes(action.word))
        return next({ type: NO_WORD_ADDED })
      break
    default:
      break
  }

  next(action)
}

export default isWordInList