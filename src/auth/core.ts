import authStorage from "./storage";
import authAPI from "./api";

export default {
  login: function(email, password) {
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

  logout: function(callback) {
    return new Promise((resolve, reject) => {
      if (this.loggedOut(() => {})) {
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

  loggedOut: function(callback) {
    return authStorage.loggedOut(() => {});
  }
};
