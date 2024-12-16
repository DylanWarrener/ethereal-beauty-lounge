import type IFirebaseAuthUser from '~/abstractions/interfaces/user/auth';

export default interface IFirebaseAuthState {
  user: IFirebaseAuthUser;
}
