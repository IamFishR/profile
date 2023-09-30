document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu-icon'),
        menu_dropdown = document.querySelector('.menu-dropdown'),
        is_menu_visible = window.getComputedStyle(menu);

    const toggleMenu = (e) => {
        if (menu_dropdown.style.display === 'none') {
            menu_dropdown.style.display = 'flex';
        } else {
            menu_dropdown.style.display = 'none';
        }
    }

    if (is_menu_visible.display === 'flex') {
        menu_dropdown.style.display = 'none';
    }

    menu.addEventListener('click', toggleMenu)
});