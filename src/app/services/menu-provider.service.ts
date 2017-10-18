import { Injectable }              from '@angular/core';
import { Observable }              from 'rxjs/Observable';
import { AuthService }             from "../auth.service";
import { MenuItem, MenuItemAlign } from "../main-menu/menu-item";

const MENUITEMS: MenuItem[] = [
  { align: MenuItemAlign.Start, page: 'index', title: 'Ínicio' },
  { align: MenuItemAlign.Start, page: 'about', title: 'A Empresa'},
  { align: MenuItemAlign.Start, page: 'products', title: 'Produtos' },
  { align: MenuItemAlign.Start, page: 'contact', title: 'Contato' },
  { align: MenuItemAlign.End, page: 'login', title: 'Login' },
  { align: MenuItemAlign.End, separator: true },
  { align: MenuItemAlign.End, page: 'singup', title: 'Cadastrar' }
]

@Injectable()
export class MenuProviderService {
  items: MenuItem[] = MENUITEMS;

  constructor(private auth: AuthService) { }

  getItems(): Observable<MenuItem> {
    return new Observable(observer => {
      for (let item of this.items) {
        observer.next(item);
      }
    });
  }
}
