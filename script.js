////////////////////////////////////////////////////////////
//                   TOGGLE DARK MODE                     //
////////////////////////////////////////////////////////////


$(document).ready(function () {
   $(color).click(function () {
        $('h2').toggleClass('dark');
    });
});



////////////////////////////////////////////////////////////
//                 BUTTON COLOR CYCLES                    //
////////////////////////////////////////////////////////////

var colors = ["#fffc59", "#5afc8e", "#ff5959"];

function setColor(el) {
    el.colorIdx = el.colorIdx || 0;
    el.style.backgroundColor = colors[el.colorIdx++ % colors.length];
}


//      $('#reset').click(function () {
//          $('button').css('background-color', colors[2]);
//      })
//  });
// To add reset button
// use following in HTML:
// <button id="reset" title="Reset progress">Reset</button>
