const TOKEN = 'SIGNED_IN';

export default {
  requestAuth(email, password) {
    return new Promise((resolve, reject) => {
      resolve(true, TOKEN);
    });
  },

  requestAuthOut() {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }
};
