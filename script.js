var navbarDropdown = document.getElementById('navbarDropdown');
var navbarDropdownMenu = document.querySelector('.dropdown-menu');

navbarDropdown.addEventListener("mouseover", function () {
    if (navbarDropdown.getAttribute('class') === 'nav-link dropdown-toggle fs-5') {

        navbarDropdown.setAttribute('class', 'nav-link dropdown-toggle fs-5 show');
        navbarDropdown.setAttribute('aria-expanded', true);
        navbarDropdownMenu.setAttribute('class', 'dropdown-menu show');
    }else{

        navbarDropdown.setAttribute('class', 'nav-link dropdown-toggle fs-5');
        navbarDropdown.setAttribute('aria-expanded', false);
        navbarDropdownMenu.setAttribute('class', 'dropdown-menu');
    }
});
