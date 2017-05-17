$(document).ready(function() {
  $('#logo').click(function() {
    $('#game-view').addClass('hidden')
    $('#homepage').removeClass('hidden')
  })
})

document.addEventListener('click', function(event) {
  const $sampleImage = document.querySelector('#sample-image')
  const $homepage = document.querySelector('#homepage')
  const $gameView = document.querySelector('#game-view')
  const $play = document.querySelector('#play')
  const $logo = document.querySelector('#logo')
  const $matches = event.target.name
  const $shapes = game.shapes
  const $index = indexPosition($shapes, event.target.id)
  const $instructions = document.querySelector('#instructions')
  const $sampleShape = document.querySelector('#sample-shape')

  if (event.target === $play) {
    $homepage.classList.add('hidden')
    $gameView.classList.remove('hidden')
    const $shape = createSampleShape(sampleShape($shapes))
    $sampleShape.appendChild($shape)
    $instructions.appendChild(createInstructions($shape))
  }
  else if (event.target.name !== $sampleImage.name) {
    if (event.target.classList.value === 'shape') {
      event.target.classList.add('shake-chunk')
    }
    else {
      return
    }
  }
  else if (event.target.id !== 'sample-image') {
    event.target.classList.add('hidden')
    $shapes[$index].found = true

    const $newSampleShape = newShape(matchedShapes($shapes, $matches))
    $instructions.appendChild(createInstructions($newSampleShape))
    $sampleShape.appendChild($newSampleShape)
  }
  // else if (event.target === $logo) {
  //   $gameView.classList.add('hidden')
  //   $homepage.classList.remove('hidden')
  //   $homepage.classList.add('container')
  // }
})
