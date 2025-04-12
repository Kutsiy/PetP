import { gql } from 'apollo-angular';

export const SEND_MAIL = gql`
  query SendMail {
    SendMail {
      result
    }
  }
`;
