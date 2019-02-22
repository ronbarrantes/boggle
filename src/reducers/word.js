const initialState = {
  isActive: false,
  word: '',
  errorMessage: '',
}

const wordReducer = (word = initialState, action) => {
  switch (action.type) {
    default:
      return word
  }
}

export default wordReducer
