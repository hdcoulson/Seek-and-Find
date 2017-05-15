$(document).ready(function() {
  $("#level-1-button").click(function() {
    $("#landing-page").addClass("hidden")
    $("#shapes-game-view").removeClass("hidden")
    //insert target image function here
    generateTargetImage()
  })
})

$(document).ready(function() {
  $("#back-button").click(function() {
    $("#shapes-game-view").addClass("hidden")
    $("#landing-page").removeClass("hidden")
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
    console.log(event.target.name)
    const matches = event.target.name
    const shapesArray = game.shapes
    const index = findArrayPosition(shapesArray, event.target.id)
    shapesArray[index].found = true

    console.log(resetHiddenShapes(matchedShapes(shapesArray, matches)))

    }
  }
})
