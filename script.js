window.addEventListener('load', function() {
  var count = 1;
  document.querySelectorAll('button').forEach(function(a) {
    a.addEventListener('click', setColor)
  })

  var col = ["#fffc59", "#5afc8e", "#ff5959"];

  function setColor() {
    this.dataset.count = this.dataset.count >= 0 ? ++this.dataset.count : 0;
    this.style.backgroundColor = col[this.dataset.count % col.length]
  }

// sorry i dont know how to code this in pure js
// instead ive just coded this part in jQuery
// maybe one day we can clean this up & make her toggle

$(document).ready(function() {
    $(color).click(function() {
        $('h2').attr('style','color: black;');
        $(color).attr('style','color: black;');
    });
});
}, false);
