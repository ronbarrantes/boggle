import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { initBoard } from '../actions/board'

import { validWords, invalidWords } from '../reducers'

import Board from './board'
import WordList from './word-list'
import '../styles.css'

const App = ({ initBoard, validWords, invalidWords }) => {

  const [errorMessage ] = useState('')

  useEffect(()=>
    initBoard(), []
  )

  return (
    <div className="App">
      <h1>Boggle</h1>
      <p className='error'>{errorMessage}</p>
      <Board/>
      <WordList title={'Valid Words'} wordList={validWords} />
      <WordList title={'Invalid Words'} wordList={invalidWords} />
    </div>
  )

}

const mapStateToProps = state => ({
  validWords: validWords(state),
  invalidWords: invalidWords(state),
})

const mapDispatchToProps = {
  initBoard,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)