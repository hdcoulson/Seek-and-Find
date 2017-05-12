const game = {
shapes: [
  {
    name: 'circle',
    color: 'red',
    photo: 'images/circle-red.png',
    id: 'circle-red',
    found: false
  },
  {
    name: 'circle',
    color: 'yellow',
    photo: 'images/circle-yellow.png',
    id: 'circle-yellow',
    found: false
  },
  {
    name: 'circle',
    color: 'blue',
    photo: 'images/circle-blue.png',
    id: 'circle-blue',
    found: false
  },
  {
    name: 'triangle',
    color: 'red',
    photo: 'images/triangle-red.png',
    id: 'triangle-red',
    found: false
  },
  {
    name: 'triangle',
    color: 'yellow',
    photo: 'images/triangle-yellow.png',
    id: 'triangle-yellow',
    found: false
  },
  {
    name: 'triangle',
    color: 'blue',
    photo: 'images/triangle-blue.png',
    id: 'triangle-blue',
    found: false
  },
  {
    name: 'square',
    color: 'yellow',
    photo: 'images/square-yellow.png',
    id: 'square-yellow',
    found: false
  },
  {
    name: 'square',
    color: 'red',
    photo: 'images/square-red.png',
    id: 'square-red',
    found: false
  },
  {
    name: 'square',
    color: 'blue',
    photo: 'images/square-blue.png',
    id: 'square-blue',
    found: false
  }
]
}

function renderShape(shape){
  const $shape = document.createElement('img')
  $shape.classList.add('shape')
  $shape.setAttribute('id', shape.id)
  $shape.setAttribute('src', shape.photo)
  $shape.setAttribute('name', shape.name)
  $shape.setAttribute('color', shape.color)

  return $shape
}

game.shapes.forEach(function(shape) {
  const $gameBody = document.querySelector('#game-body')
  $gameBody.appendChild(renderShape(shape))
})

function renderTargetShape(shape){
  const $targetImage = document.createElement('img')
  $targetImage.setAttribute('id','target-image')
  $targetImage.setAttribute('name', shape.name)
  $targetImage.setAttribute('src', shape.photo)

  return $targetImage
}

const $instructions = document.querySelector('#instructions')
const $target = document.querySelector('#target')
const $randomShape = game.shapes[Math.floor(Math.random() * game.shapes.length)]
$instructions.innerHTML = 'Find all the' + ' ' + $randomShape.name + 's:'
$target.appendChild(renderTargetShape($randomShape))
