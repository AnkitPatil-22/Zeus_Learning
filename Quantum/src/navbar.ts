const subMenus = document.querySelectorAll(".nav-submenu");

subMenus.forEach((menu) => {
    let anchor: HTMLAnchorElement = menu.querySelector("a")!;
    anchor.addEventListener("click", () => showSubMenu(menu));
});

function showSubMenu(cur_menu: Element) {
    subMenus.forEach((menu) => {
        if (menu !== cur_menu) {
            menu.classList.remove("active");
        }
    });
    cur_menu.classList.toggle("active");
}
