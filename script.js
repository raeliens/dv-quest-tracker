window.addEventListener('load', function () {
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


document.getElementById('change').onclick = changeColor;   

    function changeColor() {
        document.h3.style.color = "black";
        return false;
    }   
