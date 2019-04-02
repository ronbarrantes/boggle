const deactivateBoard = () => next => action => {
  next(action)
}

export default deactivateBoard