import authStorage from "./storage";
import authAPI from "./api";

export default {
  login: function(email: string, password: string) {
    return new Promise((resolve, reject) => {
      if (this.loggedIn()) {
        resolve(true);
      }
      authAPI
        .requestAuth(email, password)
        .then(data => {
          return authStorage.save(data);
        })
        .then(() => {
          resolve(true);
        })
        .catch(() => {
          reject();
        });
    });
  },

  logout: function() {
    return new Promise((resolve, reject) => {
      if (this.loggedOut()) {
        resolve(true);
      }
      authAPI
        .requestAuthOut()
        .then(() => {
          return authStorage.delete();
        })
        .then(() => {
          resolve(true);
        })
        .catch(() => {
          reject();
        });
    });
  },

  loggedIn: function() {
    return authStorage.loggedIn();
  },

  loggedOut: function() {
    return authStorage.loggedOut();
  }
};
