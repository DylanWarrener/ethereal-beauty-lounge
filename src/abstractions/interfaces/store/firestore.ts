import type IFirestoreUserState from '@/abstractions/interfaces/user/firestore';

export default interface IFirestoreState {
  user: IFirestoreUserState;
}
