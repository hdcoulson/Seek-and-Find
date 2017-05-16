$(document).ready(function() {
  $("#logo").click(function() {
    $("#game-view").addClass("hidden")
    $("#homepage").removeClass("hidden")
  })
})

document.addEventListener('click', function(event) {
  const $targetImage = document.querySelector('#target-image')
  const $play = document.querySelector('#play')
  const $homepage = document.querySelector('#homepage')
  const $gameView = document.querySelector('#game-view')
  if (event.target === $play) {
    console.log('correct')
    $homepage.classList.add("hidden")
    $gameView.classList.remove("hidden")
    $gameView.classList.add("container")
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
    const $matches = event.target.name
    const $shapes = game.shapes
    const $index = position($shapes, event.target.id)
    $shapes[$index].found = true
    newShape(matchedShapes($shapes, $matches))
    }
})
