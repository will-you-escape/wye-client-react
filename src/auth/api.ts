const TOKEN = "SIGNED_IN";

export default {
  requestAuth(email: string, password: string) {
    return new Promise((resolve, reject) => {
      resolve(TOKEN);
    });
  },

  requestAuthOut() {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }
};
