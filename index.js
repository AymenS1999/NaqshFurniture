window.addEventListener('scroll', function(){
	const header = document.querySelector('header');
	header.classList.toggle("sticky", window.scrollY > 100);
	for(i=0; i<document.querySelectorAll('.sub-menu').length; i++)
		document.querySelectorAll('.sub-menu')[i].classList.toggle("sub-menu-onScroll", window.scrollY > 100);
});


$(document).ready(function() {
  var counters = $(".counter");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 0);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(4000, counter[j], j);
  }
});