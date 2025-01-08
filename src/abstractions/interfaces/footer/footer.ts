export default interface IFooterData {
  content: IFooterContentData;
  information: IFooterInformationData;
}
interface IFooterContentData {
  newsletter: IFooterContentNewsletterData;
  pages: IFooterContentPagesData;
  sections: IFooterContentSectionsData;
  socials: IFooterContentSocialsData;
}
interface IFooterContentNewsletterData {
  text: {
    header: string;
    consent: string;
  };
  input: {
    textfield: {
      label: string;
    };
    btn: {
      text: string;
    };
  };
}
interface IFooterContentPagesData {
  home: any;
  packages: any;
  services: any;
  products: any;
  account: any;
  basket: any;
  contact: any;
  about: any;
}
interface IFooterContentSectionsData {}
interface IFooterContentSocialsData {
  facebook: {
    url: string;
    icon: string;
  };
  instagram: {
    url: string;
    icon: string;
  };
}
interface IFooterInformationData {}
