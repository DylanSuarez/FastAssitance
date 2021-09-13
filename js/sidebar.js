const d = document;



export const sidebarCollapse = function (btnSidebar) {
  
  const home = d.querySelector(".sidebar");
  
  d.addEventListener("click", e => {
    if (e.target.matches(btnSidebar)) {
      home.classList.toggle("sidebar-collapse");
    };
  });

};