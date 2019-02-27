import React from 'react'

const WordGuess = (props) => (
  <h2 className='word-guess' onMouseEnter={props.resetWord}>
    {props.word}
  </h2>)

export default WordGuess
