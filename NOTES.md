# Boggle flow

## what has to happen

### activateBoard [first click]
- activates board
- enables selecting/hovering
- **activateLetter()**

### activateLetter [Hovering]
- selects letter
- add letter to adder
- turn letter on

### deactivateBoard
- deactivates board
- turn all the letters off
- disables selecting (hovering)
- clears letter adder

### checkWord [Second Click] 
- **deactivateBoard**
- checks for the word
  - adds to correct|incorrect list
