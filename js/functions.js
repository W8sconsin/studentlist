/* function that controls menu button and related behavior */
    function clickMenu(x) {
        x.classList.toggle("change");
        $("ul.dropdown.menu").toggle();
    }
/*function to show outline around box*/
	 $(document).ready(function() {
    $(".class-list").hover(
        function() { $(this).addClass("Hover"); },
        function() { $(this).removeClass("Hover"); }
    	);
	});    