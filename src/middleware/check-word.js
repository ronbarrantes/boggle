import { CHECK_WORD, NO_WORD_ADDED } from '../constants/action-types'
import { addValidWord, addInvalidWord } from '../actions/word-list'
import { resetWord } from '../actions/word'

const apiURL = 'https://us-central1-hazel-analytics.cloudfunctions.net/boggle-dictionary'

const checkWord = ({ getState, dispatch }) => next => action => {
  if (action.type !== CHECK_WORD)
    return next(action)

  const { word, wordList } = getState()
  const { validWords, invalidWords } = wordList

  if (word.length === 0 || validWords.includes(word) || invalidWords.includes(word)) {
    action.type = NO_WORD_ADDED
    next(action)
    return dispatch(resetWord())
  }

  fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify({ word }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(res => {
      next(action)
      res.valid ? dispatch(addValidWord(word)):dispatch(addInvalidWord(word))
      dispatch(resetWord())
    })
    .catch(err=>{
      console.log('ERROR:', err)
      dispatch(resetWord())
    })
}

export default checkWord
