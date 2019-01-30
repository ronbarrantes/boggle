import React from 'react'

const WordList = props => {

  return (
    <ul>
      {props.wordList &&
        props.wordList.map((word, i) => <li key={i}>{word}</li>)}
    </ul>
  )
}

export default WordList
