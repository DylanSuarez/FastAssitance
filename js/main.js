const d = document;



import {menuHamburger} from "./menu.js";
import {sidebarCollapse} from "./sidebar.js"

d.addEventListener('DOMContentLoaded', (e) => {
  
  menuHamburger(".btn_menu img", ".menu");
  sidebarCollapse(".btn-sidebar img");

});