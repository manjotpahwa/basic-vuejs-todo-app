const ID_TOKEN_KEY = "todoApp.gAuthIDToken";
const ID_TOKEN_EXPIRY = "todoApp.gAuthIDExpiry";
const ACCOUNT_NAME_KEY = "todoApp.account_name";
export default {
  getIDToken() {
    return window.localStorage.getItem(ID_TOKEN_KEY);
  },
  getIDTokenExpiry() {
    return window.localStorage.getItem(ID_TOKEN_EXPIRY) || 0;
  },
  saveIDToken(token, expiry) {
    window.localStorage.setItem(ID_TOKEN_KEY, token);
    window.localStorage.setItem(ID_TOKEN_EXPIRY, expiry);
  },
  saveAccountName(accountName) {
    window.localStorage.setItem(ACCOUNT_NAME_KEY, accountName);
  },
  getAccountName() {
    return window.localStorage.getItem(ACCOUNT_NAME_KEY);
  },
  destroyIDToken() {
    window.localStorage.removeItem(ID_TOKEN_KEY);
  },
  Authenticate(googleUser, accountName = null) {
    if(!accountName) accountName = this.getAccountName();
    const profile = googleUser.getBasicProfile();
    const authResponse = googleUser.getAuthResponse();
    this.saveIDToken(authResponse.id_token, authResponse.expires_at);
    this.saveAccountName(accountName);

    return store.dispatch("login", {
      profile: {
        full_name: profile.getName(),
        first_name: profile.getGivenName(),
        email: profile.getEmail(),
        pic: profile.getImageUrl()
      }, accountName
    });
  },
  SaveUnregisteredUser(googleUser) {
    return store.dispatch("saveUnregisteredUserDetails", googleUser);
  }
}
