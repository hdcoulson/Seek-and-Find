$(document).ready(function() {
  $("#play").click(function() {
    $("#homepage").addClass("hidden")
    $("#game-view").removeClass("hidden")
    //insert target image function here
    renderTargetImage()
  })
})

$(document).ready(function() {
  $("#logo").click(function() {
    $("#game-view").addClass("hidden")
    $("#homepage").removeClass("hidden")
  })
})

document.addEventListener('click', function(event) {
  const $targetImage = document.querySelector('#target-image').name
  if (event.target.name !== $targetImage) {
    if (event.target.classList.value === 'shape') {
      event.target.classList.add('shake-chunk')
    }
    else {
      return
    }
  }
  else if (event.target.name === $targetImage) {
    if (event.target.id !== 'target-image') {
    event.target.classList.add('hidden')
    //add more animations and add to score
    const $matches = event.target.name
    const $shapes = game.shapes
    const $index = position($shapes, event.target.id)
    $shapes[$index].found = true
    newShape(matchedShapes($shapes, $matches))
    }
  }
})
