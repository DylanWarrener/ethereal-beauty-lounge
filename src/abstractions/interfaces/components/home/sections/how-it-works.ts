export interface IHowItWorksComponentData {
  steps: IHowItWorksComponentStepsData[];
}
export interface IHowItWorksComponentStepsData {
  type?: string;
  col: {
    class: string;
    default: string;
    md?: string;
  };
  card?: {
    numberIcon: string;
    title: string;
    icon: string;
    input: {
      type: string;
      select?: {
        items: string[];
        value: string;
      };
    };
  };
  icon?: {
    class: string;
    pointer: string;
  };
}
