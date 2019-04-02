const activateBoard = () => next => action => {
  next(action)
}

export default activateBoard


// TODO: Do this middleware logic

// ### activateBoard [first click]
// - activates board
// - enables selecting/hovering
// - **selectLetter()**
