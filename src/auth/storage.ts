export default {
  save(data: string) {
    return new Promise((resolve, reject) => {
      localStorage.wyeToken = data;
      resolve(true);
    });
  },

  delete() {
    return new Promise((resolve, reject) => {
      delete localStorage.wyeToken;
      resolve(true);
    });
  },

  loggedIn() {
    return !!localStorage.wyeToken;
  },

  loggedOut() {
    return !localStorage.wyeToken;
  }
};
