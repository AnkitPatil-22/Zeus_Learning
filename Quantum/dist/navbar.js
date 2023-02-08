"use strict";
const subMenus = document.querySelectorAll(".nav-submenu");
subMenus.forEach((menu) => {
    let anchor = menu.querySelector("a");
    anchor.addEventListener("click", () => showSubMenu(menu));
});
function showSubMenu(cur_menu) {
    subMenus.forEach((menu) => {
        if (menu !== cur_menu) {
            menu.classList.remove("active");
        }
    });
    cur_menu.classList.toggle("active");
}
//# sourceMappingURL=navbar.js.map