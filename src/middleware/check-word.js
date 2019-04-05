import { CHECK_WORD, NO_WORD_ADDED } from '../constants/action-types'
import { addValidWord, addInvalidWord } from '../actions/word-list'
import { resetWord } from '../actions/word'

const apiURL = 'https://us-central1-hazel-analytics.cloudfunctions.net/boggle-dictionary'

const checkWord = ({ getState, dispatch }) => next => action => {
  if (action.type !== CHECK_WORD)
    return next(action)

  const { word, wordList } = getState()
  const { validWords, invalidWords } = wordList

  // TODO: make sure the word is at least 3 letters

  if (word.length === 0 || validWords.includes(word) || invalidWords.includes(word)) {
    action.type = NO_WORD_ADDED
    next(action)
    return dispatch(resetWord())
  }

  apiCall(word, getState, next, action, dispatch)
}

export default checkWord

async function apiCall(word, getState, next, action, dispatch) {
  try {
    const request = await fetch(apiURL, {
      method: 'POST',
      body: JSON.stringify({ word }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const result = await request.json()
    next(action)
    result.valid ? dispatch(addValidWord(word)) : dispatch(addInvalidWord(word))
  } catch (err) {
    console.log('ERROR-->', err)
  }
}

