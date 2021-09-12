const d = document;



import {menuHamburger} from "./menu.js";
import {sidebarCollapse} from "./sidebar.js"

d.addEventListener('DOMContentLoaded', (e) => {
  
  menuHamburger(".btn_menu svg", ".btn_menu path", ".menu");
  sidebarCollapse(".btn-sidebar img");

});