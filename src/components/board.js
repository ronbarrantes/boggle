import React from 'react'
import { connect } from 'react-redux'

import {} from '../actions/word'

import LetterItem from './letter-item'
import WordGuess from './word-guess'
import { word, tiles, isBoardActive  } from '../reducers'

const Board = (props) => {

  console.log('BOARD_PROPS', props)
  const {
    word,
    tiles,

  } = props

  return (
    <div className='board'>
      <WordGuess word={word}
        // resetWord={resetWord}
      />
      <div className='boundary sides'></div>
      <ul>
        {Object.keys(tiles).map((tileId)=>
          <LetterItem
            key={tileId}
            tileId={tileId}
            isBoardActive={isBoardActive}
          />
        )}
      </ul>
      <div className='boundary sides'></div>
      <div className='boundary bottom'></div>
    </div>
  )
}

const mapStateToProps = state => ({
  word: word(state),
  tiles: tiles(state),
  isBoardActive: isBoardActive(state),
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
