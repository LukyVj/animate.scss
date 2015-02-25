
var img = document.getElementsByTagName('img')
img.forEach.call(document.querySelectorAll("a"), function(el) {
  el.addEventListener("click", function() {
   this.classList.toggle("animated");
  });
});