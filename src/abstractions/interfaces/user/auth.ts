export default interface IFirebaseAuthUser {
  isLoggedIn: boolean;
  auth: IFirebaseAuthUserData;
}
export interface IFirebaseAuthUserData {
  uid: string | null;
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
  photoURL: string | null;
  isAnonymous: boolean;
  joinedOn: string | null;
}
