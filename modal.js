  var numClick = 0;

  function clickCount() {
    numClick += 1;
    if ((numClick % 2) == 1) {
      $("body").css('background-color', 'gray');
      $("#modal").css("opacity", "0.1");
    } else {
      $("body").css('background-color', 'white');
      $("#modal").css("opacity", "1");
    };
  };
