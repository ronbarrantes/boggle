import React from 'react'

const WordList = props => {

  return (
    <div className='word-list'>
      <h3>{props.title}</h3>
      <ol >
        {props.wordList &&
          props.wordList.map((word, i) => <li key={i}>{word}</li>)}
      </ol>
    </div>
  )
}

export default WordList
