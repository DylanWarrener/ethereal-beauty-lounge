export default interface IFirebaseFirestoreUser {
  user: IFirebaseFirestoreUserData;
}
export interface IFirebaseFirestoreUserData {
  title: string | null;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: number | null;
}
