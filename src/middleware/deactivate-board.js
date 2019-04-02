const deactivateBoard = () => next => action => {
  next(action)
}

export default deactivateBoard

// TODO: Do this middleware logic

// ### deactivateBoard
// - deactivates board
// - turn all the letters off
// - disables selecting (hovering)
// - clears letter adder