const d = document;



export const sidebarCollapse = function (btnSidebar) {
  
  const contenido = d.querySelector(".contenido_container");
  const header = d.querySelector(".header-home");
  const sidebar = d.querySelector(".sidebar");
  
  d.addEventListener("click", e => {
    if (e.target.matches(btnSidebar)) {
      sidebar.classList.toggle("sidebar-collapse");
      header.classList.toggle("header-home-collapse");
      contenido.classList.toggle("contenido_container-collapse");
    };
  });

};