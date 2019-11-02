const TOKEN = "SIGNED_IN";

export default {
  requestAuth(email: string, password: string) {
    return new Promise((resolve: (value?: string) => void, reject) => {
      resolve(TOKEN);
    });
  },

  requestAuthOut() {
    return new Promise((resolve: (value?: boolean) => void, reject) => {
      resolve(true);
    });
  }
};
