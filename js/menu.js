const d = document;




export const menuHamburger = function (btn) {
  
  
  d.addEventListener("click", e => {
    if (e.target.matches(btn)) {
      const menu = d.querySelector(".menu")
      console.log("hola");
      menu.classList.toggle("hamburger");
    };
  });
};