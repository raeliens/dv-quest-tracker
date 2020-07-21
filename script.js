////////////////////////////////////////////////////////////
//                   TOGGLE DARK MODE                     //
////////////////////////////////////////////////////////////


$(document).ready(function () {
   $(color).click(function () {
        $('h1').toggleClass('h1-dark');
        $('h2').toggleClass('h2-dark');
        $('button').toggleClass('btn-dark');
        $('.town').toggleClass('town-dark');
    });
});



////////////////////////////////////////////////////////////
//                 BUTTON COLOR CYCLES                    //
////////////////////////////////////////////////////////////

var colors = ["#fea758", "#8dc73f", "#d85e5d"];

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



////////////////////////////////////////////////////////////
//                      HEART TOGGLE                      //
////////////////////////////////////////////////////////////

$(function() {
 
  $(".chat").on("click", function() {
    $(this).toggleClass("chatted");
  });
}); 