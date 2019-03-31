# Boggle flow
## what has to happen
### First Click (ON)
- activates board
- enables selecting (hovering)
- selects first letter
- add letter to adder
- turn first letter on

### Hovering 
- add letters to adder
- turn letters on

### Second Click (OFF)
- deactivates board
- turn all the letters off
- disables selecting (hovering)
- checks for the word
  - adds to correct|incorrect list
- clears the letter adder

### Invalid Input (out of bounds||select same letter)
- deactivates board
- turns off all the letters
- disables selecting (hovering)
- clear letter adder