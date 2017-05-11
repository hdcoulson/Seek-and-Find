const shapes = [
  {
    name: 'circle',
    color: 'red',
    photo: 'images/circle-red.png',
    id: 'circle-red'
  },
  {
    name: 'circle',
    color: 'yellow',
    photo: 'images/circle-yellow.png',
    id: 'circle-yellow'
  },
  {
    name: 'circle',
    color: 'blue',
    photo: 'images/circle-blue.png',
    id: 'circle-blue'
  },
  {
    name: 'triangle',
    color: 'red',
    photo: 'images/triangle-red.png',
    id: 'triangle-red'
  },
  {
    name: 'triangle',
    color: 'yellow',
    photo: 'images/triangle-yellow.png',
    id: 'triangle-yellow'
  },
  {
    name: 'triangle',
    color: 'blue',
    photo: 'images/triangle-blue.png',
    id: 'triangle-blue'
  },
  {
    name: 'square',
    color: 'yellow',
    photo: 'images/square-yellow.png',
    id: 'square-yellow'
  },
  {
    name: 'square',
    color: 'red',
    photo: 'images/square-red.png',
    id: 'square-red'
  },
  {
    name: 'square',
    color: 'blue',
    photo: 'images/square-blue.png',
    id: 'square-blue'
  }
]

function renderShape(shape){
  const $shape = document.createElement('img')
  $shape.classList.add('shape')
  $shape.setAttribute('id', shape.id)
  $shape.setAttribute('src', shape.photo)
  $shape.setAttribute('name', shape.name)
  $shape.setAttribute('color', shape.color)

  return $shape
}

shapes.forEach(function(shape) {
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

const $randomShape = shapes[Math.floor(Math.random() * shapes.length)]
const $target = document.querySelector('#target')
const $instructions = document.querySelector('#instructions')
$instructions.innerHTML = 'Find all the' + ' ' + $randomShape.name + 's:'
$target.appendChild(renderTargetShape($randomShape))
