export interface INewsletterData {
  rules: INewsletterDataRules;
}
export interface INewsletterDataRules {
  notEmpty: (value: string) => string | boolean;
  isEmail: (value: string) => string | boolean;
}
