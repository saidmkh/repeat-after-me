const COLOURS = ['black', 'orange', 'yellow', 'blue', 'green',
  'red', 'purple', 'cyan', 'white']

const go_button = document.querySelector('.title-ready__btn')
const blocks = document.querySelectorAll('.block--item')

let score = document.querySelector('.score__value')
let title = document.querySelector('.title__value')

let rand_colors = []
let selected_colors = []

compareArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }

  return true
}

onload = addOnClick = () => {
  blocks.forEach(Blocks => Blocks.addEventListener('click', () => {
    selected_colors.push(Blocks.id)
    if (selected_colors.length === rand_colors.length) {
      if (!compareArrays(selected_colors, rand_colors)) {
        selected_colors.length = 0
        rand_colors.length = 0
        score.innerHTML = 1
        title.innerHTML = 'Try again'
        go_button.removeAttribute('disabled')
        return false
      }

      title.innerHTML = 'Good job! Do u wanna continue?'
      score.innerHTML = +score.innerHTML + 1
      selected_colors.length = 0
      go_button.removeAttribute('disabled')
    }
  }, false))
}

go_button.onclick = getBlocks = () => {
  go_button.setAttribute('disabled', true)
  title.innerHTML = 'Repeat after me'
  rand_colors.push(COLOURS[Math.floor(Math.random() * COLOURS.length)])

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
}





