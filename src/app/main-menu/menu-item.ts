export enum MenuItemAlign {
  Left,
  Right
}

export class MenuItem {
  align?: MenuItemAlign = MenuItemAlign.Left;
  separator?: boolean = false;
  page?: string;
  title?: string;
}
