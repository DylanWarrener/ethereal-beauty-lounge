export default interface INewsletterData {
  content: {
    input: {
      textfield: {
        label: string;
      };
    };
    text: {
      consent: string;
    };
  };
}
export interface INewsletterValidationRules {
  notEmpty: (value: string) => string | boolean;
}
