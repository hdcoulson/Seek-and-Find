document.addEventListener('click', function(event) {
  const $sampleImage = document.querySelector('#sample-image')
  const $homepage = document.querySelector('#homepage')
  const $gameView = document.querySelector('#game-view')
  const $play = document.querySelector('#play')
  const $replay = document.querySelector('#replay')
  const $playAgain = document.querySelector('#play-again')
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
  else if (event.target === $replay) {
    $playAgain.classList.add('hidden')
    $gameView.classList.remove('hidden')
  }
  else if (event.target.name !== $sampleImage.name && event.target.classList.value === 'shape') {
    event.target.classList.remove('shake-chunk')
    event.target.classList.add('shake-chunk')
  }
  else if (event.target.id !== 'sample-image' && event.target.tagName === 'IMG') {
    $shapes[$index].found = true
    event.target.classList.add('hidden')
    nextShape(matchedShapes($shapes, $matches))
    resetGame($shapes)
  }
})
