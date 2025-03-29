import { gql } from 'apollo-angular';

export const UPLOADAVATAR = gql`
  mutation UploadAvatar($file: Upload!) {
    uploadAvatar(file: $file) {
      avatarLink
    }
  }
`;
