import { Component, OnInit }       from '@angular/core';
import { MenuItem, MenuItemAlign } from './menu-item';
import { MenuProviderService }     from "../services/menu-provider.service";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  providers: [MenuProviderService]
})
export class MainMenuComponent implements OnInit {
  isNavbarCollapsed = true;
  startItems: MenuItem[] = [];
  endItems: MenuItem[] = [];

  constructor(private provider: MenuProviderService) {
    provider.getItems().subscribe(item => {
      if (item.align == MenuItemAlign.Start)
        this.startItems.push(item);
      else
        this.endItems.push(item);
    });
  }

  ngOnInit() {
  }
}
