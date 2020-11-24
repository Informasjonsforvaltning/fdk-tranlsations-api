import { gql } from 'apollo-server';

import scalars from './scalars';
import enums from './enums';

export default gql`
  ${scalars}
  ${enums}

  extend type Query {
    getTranslations(document: Document!, language: Language!): JSONObject!

    getTextDirection(language: Language!): TextDirection!
  }
`;
