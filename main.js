const game = {
  shapes: [
    {
      name: 'circle',
      color: 'red',
      photo: 'images/circle-red-3d.png',
      id: 'circle-red',
      found: false
    },
    {
      name: 'circle',
      color: 'yellow',
      photo: 'images/circle-yellow-3d.png',
      id: 'circle-yellow',
      found: false
    },
    {
      name: 'circle',
      color: 'blue',
      photo: 'images/circle-blue-3d.png',
      id: 'circle-blue',
      found: false
    },
    {
      name: 'triangle',
      color: 'red',
      photo: 'images/triangle-red-3d.png',
      id: 'triangle-red',
      found: false
    },
    {
      name: 'triangle',
      color: 'yellow',
      photo: 'images/triangle-yellow-3d.png',
      id: 'triangle-yellow',
      found: false
    },
    {
      name: 'triangle',
      color: 'blue',
      photo: 'images/triangle-blue-3d.png',
      id: 'triangle-blue',
      found: false
    },
    {
      name: 'square',
      color: 'yellow',
      photo: 'images/square-yellow-3d.png',
      id: 'square-yellow',
      found: false
    },
    {
      name: 'square',
      color: 'red',
      photo: 'images/square-red-3d.png',
      id: 'square-red',
      found: false
    },
    {
      name: 'square',
      color: 'blue',
      photo: 'images/square-blue-3d.png',
      id: 'square-blue',
      found: false
    },
    {
      name: 'star',
      color: 'red',
      photo: 'images/star-red-3d.png',
      id: 'star-red',
      found: false
    },
    {
      name: 'star',
      color: 'yellow',
      photo: 'images/star-yellow-3d.png',
      id: 'star-yellow',
      found: false
    },
    {
      name: 'star',
      color: 'blue',
      photo: 'images/star-blue-3d.png',
      id: 'star-blue',
      found: false
    },
    {
      name: 'pentagon',
      color: 'blue',
      photo: 'images/pentagon-blue-3d.png',
      id: 'pentagon-blue',
      found: false
    },
    {
      name: 'pentagon',
      color: 'yellow',
      photo: 'images/pentagon-yellow-3d.png',
      id: 'pentagon-yellow',
      found: false
    },
    {
      name: 'pentagon',
      color: 'red',
      photo: 'images/pentagon-red-3d.png',
      id: 'pentagon-red',
      found: false
    }
  ],
  level: 1
}

function foundShape(shape) {
  if(shape.found == false) {
    return shape
  }
}

function sampleShape(shapes) {
  const $filteredShapes = shapes.filter(foundShape)
  const $randomShape = $filteredShapes[Math.floor(Math.random() * $filteredShapes.length)]
  return $randomShape
}

function createShape(shape) {
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
  $sampleShape.setAttribute('color', 'random')

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
  const $shape = createSampleShape(sampleShape($shapes))
  return $shape
}

function removeHidden() {
  const $gameBody = document.querySelector('#game')
  const $circleRed = document.querySelector('#circle-red')
  const $circleBlue = document.querySelector('#circle-blue')
  const $circleYellow = document.querySelector('#circle-yellow')
  const $triangleRed = document.querySelector('#triangle-red')
  const $triangleBlue = document.querySelector('#triangle-blue')
  const $triangleYellow = document.querySelector('#triangle-yellow')
  const $squareRed = document.querySelector('#square-red')
  const $squareBlue = document.querySelector('#square-blue')
  const $squareYellow = document.querySelector('#square-yellow')
  const $starRed = document.querySelector('#star-red')
  const $starBlue = document.querySelector('#star-blue')
  const $starYellow = document.querySelector('#star-yellow')
  const $pentagonRed = document.querySelector('#pentagon-red')
  const $pentagonBlue = document.querySelector('#pentagon-blue')
  const $pentagonYellow = document.querySelector('#pentagon-yellow')

  $gameBody.removeChild($circleRed)
  $gameBody.removeChild($circleBlue)
  $gameBody.removeChild($circleYellow)
  $gameBody.removeChild($triangleRed)
  $gameBody.removeChild($triangleBlue)
  $gameBody.removeChild($triangleYellow)
  $gameBody.removeChild($squareRed)
  $gameBody.removeChild($squareBlue)
  $gameBody.removeChild($squareYellow)
  $gameBody.removeChild($starRed)
  $gameBody.removeChild($starBlue)
  $gameBody.removeChild($starYellow)
  $gameBody.removeChild($pentagonRed)
  $gameBody.removeChild($pentagonBlue)
  $gameBody.removeChild($pentagonYellow)
}

function nextShape(foundShapes) {
  const $instructions = document.querySelector('#instructions')
  const $findShape = document.querySelector('#find-shape')
  const $sampleShape = document.querySelector('#sample-shape')
  const $sampleImage = document.querySelector('#sample-image')
  const $matches = event.target.name
  const $shapes = game.shapes
  const $found = foundStatus(found($shapes))
  if (foundShapes.length === 3 && $found === false) {
    const $newSampleShape = newShape(matchedShapes($shapes, $matches))
    $instructions.removeChild($findShape)
    $sampleShape.removeChild($sampleImage)
    $instructions.appendChild(createInstructions($newSampleShape))
    $sampleShape.appendChild($newSampleShape)
  }
}
function found(shapes) {
  const foundShapes = []
  shapes.forEach(function(shape) {
    if (shape.found == true ) {
      foundShapes.push(shape)
    }
  })
  var length = foundShapes.length
  return length
}

function foundAll(length) {
  if (length < 15) {
    return length
  }
  else {
    return 0
  }
}

function foundStatus(length) {
  if (length >= 14) {
    return true
  }
  else {
    return false
  }
}

function resetGame(shapes) {
  const $gameView = document.querySelector('#game-view')
  const $playAgain = document.querySelector('#play-again')
  const $foundStatus = foundStatus(foundAll(found(shapes)))
  const $shapes = game.shapes
  if ($foundStatus === true) {
    $gameView.classList.add('hidden')
    $playAgain.classList.remove('hidden')
    removeHidden()
    $shapes.forEach(function(shape) {
      shape.found = false
      const $gameBody = document.querySelector('#game')
      $gameBody.appendChild(createShape(shape))
    })
  }
}
