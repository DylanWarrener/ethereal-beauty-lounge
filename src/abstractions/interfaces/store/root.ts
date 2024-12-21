export interface IRootState {
  meta: IMetaState;
  navigation: INavigationState;
}
interface IMetaState {
  prefix: string;
  title: string;
}
interface INavigationState {
  mobile: INavigationMobileState;
}
interface INavigationMobileState {
  drawer: boolean;
}
