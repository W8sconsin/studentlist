/* function that controls menu button and related behavior */
    function clickMenu(x) {
        x.classList.toggle("change");
        $("ul.dropdown.menu").toggle();
    }