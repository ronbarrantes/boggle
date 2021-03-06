import React from 'react'
import { connect } from 'react-redux'

import LetterItem from './letter-item'
import WordGuess from './word-guess'
import { word, tiles, isBoardActive  } from '../reducers'
import { setBoardInactive } from '../actions/board'

const Board = ({ word, tiles, resetBoard }) => (
  <div className='board'>
    <WordGuess word={word} resetBoard={resetBoard} />
    <div className='boundary sides' onMouseEnter={resetBoard} />
    <ul>
      {Object.keys(tiles).map((tileId)=>
        <LetterItem
          key={tileId}
          tileId={tileId}
          isBoardActive={isBoardActive}
        />
      )}
    </ul>
    <div className='boundary sides' onMouseEnter={resetBoard} />
    <div className='boundary bottom' onMouseEnter={resetBoard} />
  </div>
)


const mapStateToProps = state => ({
  word: word(state),
  tiles: tiles(state),
  isBoardActive: isBoardActive(state),
})

const mapDispatchToProps = {
  resetBoard: setBoardInactive,
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
