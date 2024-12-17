export interface IRootState {
  meta: IMetaState;
  appBar: IAppBarState;
}
interface IMetaState {
  prefix: string;
  title: string;
}
interface IAppBarState {
  drawer: boolean;
}
