import React from 'react'

const WordList = props => {

  return (
    <div className='word-list'>
      <h3>{props.title}</h3>
      <ul >
        {props.wordList &&
          props.wordList.map((word, i) => <li key={i}>{word}</li>)}
      </ul>
    </div>
  )
}

export default WordList
