// install image zoom effect
window.onload = addEventToFigureImg();

function addEventToFigureImg() {
  var htmlFigures = document.getElementsByTagName("img");
  
  for (var i = 0; i < htmlFigures.length; i++) {
    htmlFigures[i].addEventListener("click", function() {
      this.classList.toggle("effect-zoom");
    }, false);
  }
}