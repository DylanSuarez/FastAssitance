const d = document;



export const sidebarCollapse = function (btnSidebar) {
  
  const sodebar = d.querySelector(".sidebar");
  
  d.addEventListener("click", e => {
    if (e.target.matches(btnSidebar)) {
      sodebar.classList.toggle("sidebar-collapse");
    };
  });

};