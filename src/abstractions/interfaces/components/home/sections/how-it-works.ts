import type {
  IRootServiceCategory,
  IRootServiceTreatments,
} from '@/abstractions/interfaces/store/root/page/InterfacePageCommon';

export interface IHowItWorksData {
  steps: IHowItWorksStepsData[];
}
export interface IHowItWorksStepsData {
  type: string;
  col: IHowItWorksStepCol;
  card?: IHowItWorksStepCard;
  icon?: IHowItWorksStepIcon;
}

/* ---------- COLUMN ---------- */
export interface IHowItWorksStepCol {
  class: string;
  default: string;
  lg?: string;
}

/* ---------- CARD ---------- */
export interface IHowItWorksStepCard {
  numberIcon: string;
  title: string;
  icon: string;
  input: {
    type: string;
    select?: IHowItWorksStepInputSelect;
  };
  content: {
    type: string;
    carousel?: {
      items: IRootServiceTreatments[];
    };
  };
}
export interface IHowItWorksStepInputSelect {
  items: IRootServiceCategory[];
  value: string;
}

/* ---------- ICON ---------- */
export interface IHowItWorksStepIcon {
  class: string;
  pointer: string;
}
