$(document).ready(function() {
  $('#logo').click(function() {
    $('#game-view').addClass('hidden')
    $('#homepage').removeClass('hidden')
  })
})

document.addEventListener('click', function(event) {
  const $targetImage = document.querySelector('#target-image')
  const $homepage = document.querySelector('#homepage')
  const $gameView = document.querySelector('#game-view')
  const $play = document.querySelector('#play')
  const $logo = document.querySelector('#logo')
  const $matches = event.target.name
  const $shapes = game.shapes
  const $index = indexPosition($shapes, event.target.id)

  if (event.target === $play) {
    $homepage.classList.add('hidden')
    $gameView.classList.remove('hidden')
    renderTargetImage()
  }
  else if (event.target.name !== $targetImage.name) {
    if (event.target.classList.value === 'shape') {
      event.target.classList.add('shake-chunk')
    }
    else {
      return
    }
  }
  else if (event.target.id !== 'target-image') {
    event.target.classList.add('hidden')
    $shapes[$index].found = true
    newShape(matchedShapes($shapes, $matches))
  }
  // else if (event.target === $logo) {
  //   $gameView.classList.add('hidden')
  //   $homepage.classList.remove('hidden')
  //   $homepage.classList.add('container')
  // }
})
