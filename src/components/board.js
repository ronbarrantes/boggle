import React, { Component } from 'react'
import { connect } from 'react-redux'

import {  setBoardActive, setLetterVisited, resetLetters } from '../actions/board'
import { checkWord } from '../actions/word'

import LetterItem from './letter-item'
import WordGuess from './word-guess'

class Board extends Component {

  constructor(props){
    super(props)
    this.state = { isActive : false }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle(){
    console.log('LOGGING TOGGLE')
    // this.props.isActive ? this.props.checkWord() : this.props.setBoardActive()
  }

  componentDidMount(){
    console.log('DID MOUNT -->', this.props)
  }

  componentDidUpdate(prevProps){
    console.log('DID UPDATE -->', prevProps)
    // this.props.isActive ? this.props.checkWord() : this.props.setBoardActive()

    if(this.props.isActive !== prevProps.isActive){
      console.log('isActive-->', this.props.isActive)
    }
  }

  render(){
    const {
      word,
      lettersById,
      // getLetterId,
      lettersByHash,
      // checkIfVisited,
      // selectLetterHover,
      // selectLetterToggle,
      setBoardActive,
      resetLetters,
      isActive,
    } = this.props

    return (
      <div className='board'>
        <WordGuess word={word}
          resetLetters={resetLetters}
        />
        <div className='boundary sides'
          onMouseEnter={resetLetters}
        ></div>
        <ul>
          {lettersById.map((letterId)=>
            <LetterItem
              key={letterId}
              letterId={letterId}
              // getLetterId={getLetterId}
              // selectLetterHover={selectLetterHover}
              // selectLetterToggle={selectLetterToggle}
              letter={lettersByHash[letterId].letter}
              isVisited={lettersByHash[letterId].isVisited}
              // checkIfVisited={checkIfVisited}
              handleToggle={this.handleToggle}
              setLetterVisited={setLetterVisited}
              setBoardActive={setBoardActive}
              checkWord={checkWord}
              isActive={isActive}
            />
          )}
        </ul>
        <div className='boundary sides'
          onMouseEnter={resetLetters}
        ></div>
        <div className='boundary bottom'
          onMouseEnter={resetLetters}
        ></div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  word: state.word,
  lettersById: state.board.lettersById,
  lettersByHash: state.board.lettersByHash,
  isActive: state.board.isActive,
})

const mapDispatchToProps = {
  setBoardActive,
  setLetterVisited,
  resetLetters,
  checkWord,
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
