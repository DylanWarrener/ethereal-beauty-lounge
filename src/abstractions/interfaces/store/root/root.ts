import type { IRootPageCommonState } from '@/abstractions/interfaces/store/root/page/InterfacePageCommon';
import type { IRootPageHomeState } from '@/abstractions/interfaces/store/root/page/InterfacePageHome';
import type { IRootPagePackageState } from '@/abstractions/interfaces/store/root/page/InterfacePagePackages';
import type { IRootPageServiceState } from '@/abstractions/interfaces/store/root/page/InterfacePageServices';
import type { IRootPageProductState } from '@/abstractions/interfaces/store/root/page/InterfacePageProducts';
import type { IRootPageContactState } from '@/abstractions/interfaces/store/root/page/InterfacePageContact';
import type { IRootPageAboutState } from '@/abstractions/interfaces/store/root/page/InterfacePageAbout';
import type { IRootPageBagState } from '@/abstractions/interfaces/store/root/page/InterfacePageBag';
import type { IRootPageAccountState } from '@/abstractions/interfaces/store/root/page/InterfacePageAccount';

export interface IRootState {
  page: IRootPageState;
}
interface IRootPageState {
  common: IRootPageCommonState;
  home: IRootPageHomeState;
  packages: IRootPagePackageState;
  services: IRootPageServiceState;
  products: IRootPageProductState;
  contact: IRootPageContactState;
  about: IRootPageAboutState;
  bag: IRootPageBagState;
  account: IRootPageAccountState;
}
