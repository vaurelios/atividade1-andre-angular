export enum MenuItemAlign {
  Start,
  End
}

export class MenuItem {
  align?: MenuItemAlign = MenuItemAlign.Start;
  separator?: boolean = false;
  page?: string;
  title?: string;
}
