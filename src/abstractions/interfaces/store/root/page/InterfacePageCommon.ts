export interface IRootPageCommonState {
  meta: IRootMetaState;
  navigation: IRootNavigationState;
  menu: IRootMenuState;
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
    items: IRootMenuBagItemsState[];
  };
}
export interface IRootMenuBagItemsState {
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
