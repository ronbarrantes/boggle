import React from 'react'

const WordGuess = ({ word, resetBoard }) => (
  <h2 className='word-guess' onMouseEnter={resetBoard}>
    {word}
  </h2>
)

export default WordGuess
