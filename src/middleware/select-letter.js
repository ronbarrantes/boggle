const activateLetter = () => next => action => {
  next(action)
}

export default activateLetter

// TODO: Do this middleware logic

// ### selectLetter [Hovering]
// - selects letter
// - add letter to adder
// - turn letter on