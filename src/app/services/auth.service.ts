export class AuthService {
  isAuth = false;
  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          this.isAuth = true;
          resolve(true);
        }, 4000);
      }
    );
  }

  signOut() {
    this.isAuth = false;
  }

}
