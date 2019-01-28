const alphabet = ['A','E','I','O','U','B','C','D','F','G','H',
  'J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z']

const randomLetter = (arr, min=0, max=arr.length) => {
  let randNumber = Math.floor(Math.random() * (max - min)) + min
  return arr[randNumber]
}

const randomize = (arr) => {
  let j, temp
  for (let i = arr.length-1; i>0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr
}


export const generateLetterArray = () => {
  let letters = []
  // pick 4 vowels
  for(let i = 0; i < 4; i++){
    letters.push(randomLetter(alphabet, 0, 5))
  }
  // pick 4 consonants
  for(let i = 0; i < 4; i++){
    letters.push(randomLetter(alphabet, 5, 8))
  }
  // pick 8 letters
  for(let i = 0; i < 8; i++){
    letters.push(randomLetter(alphabet))
  }
  // randomize array
  letters = randomize(letters)
  return letters
}