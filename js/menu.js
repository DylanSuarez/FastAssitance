const d = document;




export const menuHamburger = function (btn, menuHam) {
  
  const menu = d.querySelector(menuHam);
  
  d.addEventListener("click", e => {
    if (e.target.matches(btn)) {
      menu.classList.toggle("hamburger");
    };
  });

};