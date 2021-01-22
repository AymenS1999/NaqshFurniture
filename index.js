window.addEventListener('scroll', function(){
	const header = document.querySelector('header');
	header.classList.toggle("sticky", window.scrollY > 100);
	for(i=0; i<document.querySelectorAll('.sub-menu').length; i++)
		document.querySelectorAll('.sub-menu')[i].classList.toggle("sub-menu-onScroll", window.scrollY > 100);
});

