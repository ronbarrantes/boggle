const activateLetter = () => next => action => {
  next(action)
}

export default activateLetter