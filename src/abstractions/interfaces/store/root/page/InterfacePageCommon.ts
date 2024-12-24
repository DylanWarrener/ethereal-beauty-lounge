export interface IRootPageCommonState {
  meta: IRootMetaState;
  navigation: IRootNavigationState;
  menu: IRootMenuState;
  dialog: IRootDialogState;
}
/* Meta */
interface IRootMetaState {
  prefix: string;
  title: string;
}
/* Navigation */
interface IRootNavigationState {
  mobile: {
    drawer: boolean;
  };
}
/* Menu */
interface IRootMenuState {
  bag: {
    drawer: boolean;
    items: IRootMenuBagItemState[];
  };
}
export interface IRootMenuBagItemState {
  id: number;
  img: {
    src: string;
    alt: string;
  };
  name: string;
  size: string;
  quantity: number;
  price: number;
  inStock: boolean;
  deleting: boolean;
}
interface IRootDialogState {
  deleteConfirm: IRootDialogDeleteConfirmState;
}
interface IRootDialogDeleteConfirmState {
  drawer: boolean;
}
