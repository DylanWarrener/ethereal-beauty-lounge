export default interface IAuthState {
    user: IAuthUser;
}
interface IAuthUser {
    isSignedIn: false;
    uid: null;
    displayName: null;
    email: null;
    emailVerified: false;
    photoURL: null;
    isAnonymous: false;
    joinedOn: null;
}