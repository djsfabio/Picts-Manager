const urlBack = "https://pictsmanager.loca.lt/";
// const urlBack = "http://localhost:8080/";

export default urlBack;

export let usernameGlobal = "";

export function eraseUsername(username) {
  usernameGlobal = username;
}

export let privacyUserGlobal = "";

export function erasePrivacyUser(privacy) {
  privacyUserGlobal = privacy;
}

export let mailUserGlobal = "";

export function eraseMailUser(mail) {
  mailUserGlobal = mail;
}

export let passwordUserGlobal = "";

export function erasePasswordUser(password) {
  passwordUserGlobal = password;
}

export let albumsUserGlobal = "";

export function eraseAlbumsUser(albums) {
  albumsUserGlobal = albums;
}
