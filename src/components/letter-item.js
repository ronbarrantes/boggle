import React from 'react'
import { connect } from 'react-redux'

import { letter, isTileVisited } from '../reducers'
import { board, word } from '../actions'

const LetterItem = (props) =>  {
  const {
    toggleActive, selectLetter,
    tileId, isTileVisited, letter,
  } = props

  const handleClick = () =>{
    toggleActive()
    selectLetter(tileId)
  }

  const handleMouseEnter = () => {
    selectLetter(tileId)
  }

  const liClass = ['letter-item', isTileVisited && 'visited'].join(' ')

  return(
    <li
      onClick={handleClick}
      className={liClass}
    >
      <div
        onMouseEnter={handleMouseEnter}>
        {letter}
      </div>
    </li>
  )
}

const mapStateToProps = (state, ownProps) => ({
  letter: letter(state, ownProps.tileId),
  isTileVisited: isTileVisited(state, ownProps.tileId),

})

const mapDispatchToProps = {
  toggleActive: board.toggleActive,
  selectLetter: word.selectLetter,
}

export default connect (mapStateToProps, mapDispatchToProps)(LetterItem)

