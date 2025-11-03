(function () {
  const _btn = document.getElementById("mobile-menu-toggle");
  const _menu = document.getElementById("mobile-menu");
  const openIcon = document.getElementById("hamburger-open");
  const closeIcon = document.getElementById("hamburger-close");
  if (!_btn || !_menu) return;
  const btn = _btn;
  const menu = _menu;

  function lock() {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }
  function unlock() {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  function openMenu() {
    menu.classList.remove("hidden");
    menu.classList.remove("mobile-menu-close");
    menu.classList.add("mobile-menu-open");
    btn.setAttribute("aria-expanded", "true");
    if (openIcon) openIcon.style.display = "none";
    if (closeIcon) closeIcon.style.display = "";
    lock();
    document.addEventListener("keydown", onKey);
  }

  function closeMenu() {
    // animate out, then hide
    menu.classList.remove("mobile-menu-open");
    menu.classList.add("mobile-menu-close");
    menu.addEventListener("animationend", function onEnd() {
      menu.classList.add("hidden");
      menu.removeEventListener("animationend", onEnd);
    });
    btn.setAttribute("aria-expanded", "false");
    if (openIcon) openIcon.style.display = "";
    if (closeIcon) closeIcon.style.display = "none";
    unlock();
    document.removeEventListener("keydown", onKey);
  }

  function onKey(e) {
    if (e && e.key === "Escape") closeMenu();
  }

  btn.addEventListener("click", function () {
    if (menu.classList.contains("hidden")) openMenu();
    else closeMenu();
  });
  menu.addEventListener("click", function (e) {
    if (e.target === menu) closeMenu();
  });
})();
