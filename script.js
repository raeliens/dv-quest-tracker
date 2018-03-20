  $(document).ready(function () {
      $(color).click(function () {
          $('h2').toggleClass('dark');
      });
  });

  var colors = ["#fffc59", "#5afc8e", "#ff5959"];

  function setColor(el) {
      el.colorIdx = el.colorIdx || 0;
      el.style.backgroundColor = colors[el.colorIdx++ % colors.length];
  }

  $(document).ready(function () {
      $('#reset').click(function () {
          $('button').css('background-color', '#ff5959');
      })
  });

  // To add reset button
  // use following in HTML:
  // <button id="reset">Reset</button>
