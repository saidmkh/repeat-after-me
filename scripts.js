const COLOURS = ['black', 'orange', 'yellow', 'blue', 'green',
  'red', 'purple', 'cyan', 'white']

const go_button = document.querySelector('.title-ready__btn')
let blocks = document.querySelectorAll('.block--item')

let score = document.querySelector('.score__value').innerHTML

let rand_colors = []
let selected_colors = []

compareArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }

  return true
}

getRandomColors = (score) => {
  for (let i = 0; i < score + 1; i++) {
    rand_colors.push(COLOURS[Math.floor(Math.random() * COLOURS.length)])
  }

  return rand_colors
}

disableButton = () => {
  setTimeout(() => {
    go_button.removeAttribute('disabled')
  }, rand_colors.length * 800);
}

onload = addOnClick = () => {
  blocks.forEach(Blocks => Blocks.addEventListener('click', () => {
    selected_colors.push(Blocks.id)
    if (selected_colors.length === rand_colors.length) {
      if (!compareArrays(selected_colors, rand_colors)) {
        alert(false)
        selected_colors.length = 0
        return false
      }

      alert(true)
      selected_colors.length = 0
    }
  }, false))
}

go_button.onclick = getBlocks = () => {
  go_button.setAttribute('disabled', true)
  getRandomColors(score)

  for (let i = 0; i < rand_colors.length; i++) {
    (() => {
      setTimeout(() => {
        document.getElementsByClassName(rand_colors[i])[0].classList.add('block_display')
        setTimeout(() => {
          document.getElementsByClassName(rand_colors[i])[0].classList.remove('block_display')
        }, 400);
      }, i * 800)
    })(i)
  }
  disableButton()
}





