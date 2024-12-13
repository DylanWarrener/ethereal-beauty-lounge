import type IFirebaseFirestoreUser from '@/abstractions/interfaces/user/firebaseFirestore';

export default interface IFirestoreState {
  user: IFirebaseFirestoreUser;
}
