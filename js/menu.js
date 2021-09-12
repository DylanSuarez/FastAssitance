const d = document;




export const menuHamburger = function (btnSvg, btnPath, menuHam) {
  
  const menu = d.querySelector(menuHam);
  
  d.addEventListener("click", e => {
    if (e.target.matches(btnSvg) || e.target.matches(btnPath)) {
      menu.classList.toggle("hamburger");
    };
  });

};