/* function that controls menu button and related behavior */
    function clickMenu(x) {
        x.classList.toggle("change");
        $("ul.dropdown.menu").toggle();
    }     

/* function that closes menu when clicking outside of menu */
	$(document).click(function(e) {
        if ($(e.target).is('ul.dropdown.menu, ul.dropdown.menu *, .menu-icon-container, .menu-icon-container *')) {
            if($("#elmentid").is(':hidden')){
                $("ul.dropdown.menu").show();
            }
        }else{
        	$("ul.dropdown.menu").hide();
        }
    });
