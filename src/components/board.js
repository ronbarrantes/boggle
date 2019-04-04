import React from 'react'
import { connect } from 'react-redux'

import {} from '../actions/word'

import LetterItem from './letter-item'
import WordGuess from './word-guess'
import { word, tiles, isBoardActive  } from '../reducers'
import { board } from '../actions'

const Board = (props) => {
  const {
    word,
    tiles,

  } = props

  return (
    <div className='board'>
      <WordGuess word={word}
        onMouseEnter={props.resetBoard}
      />
      <div className='boundary sides'
        onMouseEnter={props.resetBoard}
      >
      </div>
      <ul>
        {Object.keys(tiles).map((tileId)=>
          <LetterItem
            key={tileId}
            tileId={tileId}
            isBoardActive={isBoardActive}
          />
        )}
      </ul>
      <div className='boundary sides'
        onMouseEnter={props.resetBoard}
      >
      </div>
      <div className='boundary bottom'
        onMouseEnter={props.resetBoard}
      >
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  word: word(state),
  tiles: tiles(state),
  isBoardActive: isBoardActive(state),
})

const mapDispatchToProps = {
  resetBoard: board.setBoardInactive,
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
