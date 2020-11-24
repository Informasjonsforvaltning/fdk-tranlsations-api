import { gql } from 'apollo-server';

export default gql`
  enum Document {
    dcat_ap_no_validator
  }

  enum Language {
    nb
    nn
    en
  }

  enum TextDirection {
    ltr
    rtl
  }
`;
