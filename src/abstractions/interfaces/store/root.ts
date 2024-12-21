export interface IRootState {
  meta: IRootMetaState;
  navigation: IRootNavigationState;
  bag: IRootBagState;
}
interface IRootMetaState {
  prefix: string;
  title: string;
}
interface IRootNavigationState {
  mobile: IRootNavigationMobileState;
}
interface IRootNavigationMobileState {
  drawer: boolean;
}
interface IRootBagState {
  items: IRootBagItemsState[];
}
export interface IRootBagItemsState {
  img: {
    src: string;
    alt: string;
  };
  name: string;
  size: string;
  quantity: number;
  price: number;
  inStock: boolean;
}
