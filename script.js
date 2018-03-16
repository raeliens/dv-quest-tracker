  $(document).ready(function() {
  var count = 1;
  document.querySelectorAll('button').forEach(function(a) {
    a.addEventListener('click', setColor)
  })

  var col = ["#fffc59", "#5afc8e", "#ff5959"];

  function setColor() {
    this.dataset.count = this.dataset.count >= 0 ? ++this.dataset.count : 0;
    this.style.backgroundColor = col[this.dataset.count % col.length]
  }
}, false);

 
  $(document).ready(function() {
    $(color).click(function() {
      $('h2').toggleClass('dark');
    });
  });
