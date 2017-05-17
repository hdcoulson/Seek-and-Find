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
    },
    {
      name: 'star',
      color: 'red',
      photo: 'images/star-red.png',
      id: 'star-red',
      found: false
    },
    {
      name: 'star',
      color: 'yellow',
      photo: 'images/star-yellow.png',
      id: 'star-yellow',
      found: false
    },
    {
      name: 'star',
      color: 'blue',
      photo: 'images/star-blue.png',
      id: 'star-blue',
      found: false
    },
    {
      name: 'hexagon',
      color: 'blue',
      photo: 'images/hexagon-blue.png',
      id: 'hexagon-blue',
      found: false
    },
    {
      name: 'hexagon',
      color: 'yellow',
      photo: 'images/hexagon-yellow.png',
      id: 'hexagon-yellow',
      found: false
    },
    {
      name: 'hexagon',
      color: 'red',
      photo: 'images/hexagon-red.png',
      id: 'hexagon-red',
      found: false
    }
  ],
  level: 1
}

function foundStatus(shape) {
  if(shape.found == false) {
    return shape
  }
}

function sampleShape(shapes) {
  const $filteredShapes = shapes.filter(foundStatus)
  const $randomShape = $filteredShapes[Math.floor(Math.random() * $filteredShapes.length)]
  return $randomShape
}

function createShape(shape){
  const $shape = document.createElement('img')
  $shape.classList.add('shape')
  $shape.setAttribute('id', shape.id)
  $shape.setAttribute('src', shape.photo)
  $shape.setAttribute('name', shape.name)
  $shape.setAttribute('color', shape.color)

  return $shape
}

game.shapes.forEach(function(shape) {
  const $gameBody = document.querySelector('#game')
  $gameBody.appendChild(createShape(shape))
})

function createSampleShape(shape) {
  const $sampleShape = document.createElement('img')
  $sampleShape.setAttribute('id', 'sample-image')
  $sampleShape.setAttribute('name', shape.name)
  $sampleShape.setAttribute('src', shape.photo)

  return $sampleShape
}

function createInstructions(shape) {
  const $instructions = document.createElement('h3')
  $instructions.setAttribute('id', 'find-shape')
  $instructions.textContent = 'Find all the' + ' ' + shape.name + 's:'
  return $instructions
}

function indexPosition(shapes, id) {
  for (i = 0; i < shapes.length; i++) {
    if (shapes[i].id === id) {
      return [ i ]
    }
  }
}

function resetHiddenShapes(matches) {
  const $shapes = game.shapes
  if (matches.length === 3) {
    for (i = 0; i < $shapes.length; i++) {
      matches[i].found = false
    }
  }
  return $shapes
}

function matchedShapes(shapes, name) {
  const foundShapes = []
  shapes.forEach(function(shape) {
    if (shape.name === name && shape.found == true) {
      foundShapes.push(shape)
    }
  })
  return foundShapes
}

function newShape(foundShapes) {
  const $shapes = game.shapes
  const $instructions = document.querySelector('#instructions')
  const $findShape = document.querySelector('#find-shape')
  const $sampleShape = document.querySelector('#sample-shape')
  const $sampleImage = document.querySelector('#sample-image')
  if (foundShapes.length === 3) {
    $instructions.removeChild($findShape)
    $sampleShape.removeChild($sampleImage)
    const $shape = createSampleShape(sampleShape($shapes))
    return $shape
  }
}
