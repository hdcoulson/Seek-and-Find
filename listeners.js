$(document).ready(function() {
  $("#level-1-button").click(function() {
    $("#landing-page").addClass("hidden")
    $("#shapes-game-view").removeClass("hidden")
  })
  $(document).ready(function() {
    $("#back-button").click(function() {
      $("#shapes-game-view").addClass("hidden")
      $("#landing-page").removeClass("hidden")
    })
  })
  $(document).ready(function() {
    $(".shape").click(function() {
      $(this).toggle("fade")
    })
  })
})
