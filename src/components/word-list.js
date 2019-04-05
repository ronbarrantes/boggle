import React from 'react'

const WordList = ({ title, wordList }) => (
  <div className='word-list'>
    <h3>{title}</h3>
    <ol >
      {wordList && wordList.map((word, i) =>
        <li key={i}>{word}</li>
      )}
    </ol>
  </div>
)

export default WordList
