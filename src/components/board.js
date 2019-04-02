import React from 'react'
import { connect } from 'react-redux'

// import {  setBoardActive, activateEverything, toggleActive } from '../actions/board'
import {
// checkWord,
// addLetter,
// setLetter,
} from '../actions/word'

import LetterItem from './letter-item'
import WordGuess from './word-guess'
import { tiles, isBoardActive  } from '../reducers'

const Board = (props) => {

  console.log('BOARD_PROPS', props)
  const {
    word,
    tiles,
    // resetWord,
    // setBoardActive,
    // activateEverything,
    // setLetter,
    // isBoardActive,
    // addLetter,
    // toggleActive,
  } = props

  return (
    <div className='board'>
      <WordGuess word={word}
        // resetWord={resetWord}
      />
      <div className='boundary sides'
        // onMouseEnter={resetWord}
      ></div>
      <ul>
        {Object.keys(tiles).map((tileId)=>
          <LetterItem
            key={tileId}
            tileId={tileId}
            isBoardActive={isBoardActive}

            // checkWord={checkWord}
            // toggleActive={toggleActive}
            // addLetter={addLetter}
            // resetWord={resetWord}
            // setLetter={setLetter}
            // setBoardActive={setBoardActive}
            // activateEverything={activateEverything}
          />
        )}
      </ul>
      <div className='boundary sides'
        // onMouseEnter={resetWord}
      ></div>
      <div className='boundary bottom'
        // onMouseEnter={resetWord}
      ></div>
    </div>
  )
}

const mapStateToProps = state => ({
  word: state.word,
  tiles: tiles(state),
  isBoardActive: isBoardActive(state),
})

const mapDispatchToProps = {
  // setBoardActive,
  // setLetter,
  // resetWord: () => console.log('RESETTING'),
  // checkWord,
  // activateEverything,
  // addLetter,
  // toggleActive,
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
