const d = document;




export const menuHamburger = function (btn, menuHam) {
  
  
  d.addEventListener("click", e => {
    const menu = d.querySelector(menuHam);
    if (e.target.matches(btn)) {
      menu.classList.toggle("hamburger");
    };
  });

  
};