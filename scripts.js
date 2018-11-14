const COLOURS = ['black', 'orange', 'yellow', 'blue', 'green',
  'red', 'purple', 'cyan', 'white']

const go_button = document.querySelector('.title-ready__btn')
const blocks = document.querySelectorAll('.block--item')

let score = document.querySelector('.score__value')
let title = document.querySelector('.title__value')

let rand_colors = []
let selected_colors = []

document.documentElement.classList.add('can-touch')

compareArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }

  return true
}

handleShowColor = (block) => {
  block.childNodes[1].classList.add('block_display')

  setTimeout(() => {
    block.childNodes[1].classList.remove('block_display')
  }, 300);
}

disableBlocks = () => {
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].classList.add('disabled')
  }
}

enableBlocks = () => {
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].classList.remove('disabled')
  }
}

onload = addOnClick = () => {
  blocks.forEach(Blocks => Blocks.addEventListener('click', () => {
    handleShowColor(Blocks)

    selected_colors.push(Blocks.id)

    if (selected_colors.length === rand_colors.length) {
      if (!compareArrays(selected_colors, rand_colors)) {
        selected_colors.length = 0
        rand_colors.length = 0
        score.innerHTML = 1
        title.innerHTML = 'Try again'
        go_button.removeAttribute('disabled')

        disableBlocks()
        return false
      }

      title.innerHTML = 'Good job! Continue?'
      score.innerHTML = +score.innerHTML + 1
      selected_colors.length = 0
      go_button.removeAttribute('disabled')

      disableBlocks()
    }
  }, false))

  disableBlocks()
}

go_button.onclick = getBlocks = () => {
  disableBlocks()

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

  setTimeout(() => {
    enableBlocks()
  }, rand_colors.length * 800);
}





