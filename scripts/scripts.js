// install lightbox function on load
window.onload = function () {
  addEventToFigureImg()
};

// lightbox
function addEventToFigureImg() {
  // add event to all #project figure elements
  var htmlFigures = document.getElementById("project").getElementsByTagName("figure");
  
  for (var i = 0; i < htmlFigures.length; i++) {
    htmlFigures[i].addEventListener("click", function() {
      
      // toggle zoom and add lightbox effect
      this.classList.toggle("effect-zoom");
      document.documentElement.classList.add("not-a-modal-background");
      
      // center view
      this.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
      
      // count zoom effects
      var effectCount = document.getElementsByClassName("effect-zoom");

      // if there are no zoom effects
      if (effectCount.length <= 0) {
        // then remove lightbox 
        document.documentElement.classList.remove("not-a-modal-background");
      }

      // if there are more than 1 effects
      else if (effectCount.length > 1) {
        // then find all effects
        for (var i = 0; i < htmlFigures.length; i++) {
          // remove zoom
          htmlFigures[i].classList.remove("effect-zoom");
        }
        // toggle zoom
        this.classList.toggle("effect-zoom");
      };
      
    }, false);
  }
}