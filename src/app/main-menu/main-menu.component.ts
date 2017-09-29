import { Component, OnInit }       from '@angular/core';
import { MenuItem, MenuItemAlign } from './menu-item';

const MENUITEMS: MenuItem[] = [
  { align: MenuItemAlign.Left, page: 'index', title: 'Ínicio' },
  { align: MenuItemAlign.Left, page: 'about', title: 'A Empresa'},
  { align: MenuItemAlign.Left, page: 'products', title: 'Produtos' },
  { align: MenuItemAlign.Left, page: 'contact', title: 'Contato' },
  { align: MenuItemAlign.Right, page: 'login', title: 'Login' },
  { align: MenuItemAlign.Right, separator: true },
  { align: MenuItemAlign.Right, page: 'singup', title: 'Cadastrar' }
]

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html'
})
export class MainMenuComponent implements OnInit {
  menuitems = MENUITEMS;
  isNavbarCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  getLeftMenuItems() {
    return this.menuitems.filter(item => item.align === MenuItemAlign.Left);
  }

  getRightMenuItems() {
    return this.menuitems.filter(item => item.align === MenuItemAlign.Right);
  }
}
