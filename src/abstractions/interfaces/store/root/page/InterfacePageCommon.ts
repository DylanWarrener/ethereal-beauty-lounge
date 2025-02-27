export interface IRootPageCommonState {
  meta: IRootMetaState;
  navigation: IRootNavigationState;
  menu: IRootMenuState;
  dialog: IRootDialogState;
  service: IRootServiceState;
}

/* ---------- META ---------- */
interface IRootMetaState {
  prefix: string;
  title: string;
}

/* ---------- NAVIGATION ---------- */
interface IRootNavigationState {
  mobile: {
    drawer: boolean;
  };
}

/* ---------- MENU ---------- */
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

/* ---------- DIALOG ---------- */
interface IRootDialogState {
  deleteConfirm: IRootDialogDeleteConfirmState;
}
interface IRootDialogDeleteConfirmState {
  drawer: boolean;
}

/* ---------- SERVICES ---------- */
export interface IRootServiceState {
  categories: IRootServiceCategory[];
  treatments: IRootServiceTreatments[];
}
export interface IRootServiceCategory {
  image: string;
  category: string;
  note: string;
}
export interface IRootServiceTreatments {
  title: string;
  includes?: string;
  price: {
    consultation: number;
    treatment: string[];
    selected: number;
  };
  time: number;
  treatmentCategory: number;
}
