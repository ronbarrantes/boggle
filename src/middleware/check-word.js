import { CHECK_WORD, NO_WORD_ADDED } from '../constants/action-types'
import { addValidWord, addInvalidWord } from '../actions/word-list'
import { resetWord } from '../actions/word'
import { word, wordList } from '../reducers'

const apiURL = 'https://us-central1-hazel-analytics.cloudfunctions.net/boggle-dictionary'

const checkWord = ({ getState, dispatch }) => next => action => {
  if (action.type !== CHECK_WORD)
    return next(action)

  const state = getState()
  const w = word(state)
  const wL = wordList(state)

  if (w.length < 3 || wL.includes(w)) {
    action.type = NO_WORD_ADDED
    next(action)
    return dispatch(resetWord())
  }

  isWordValid(w, next, action, dispatch)
}

async function isWordValid(word, next, action, dispatch) {
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

export default checkWord
