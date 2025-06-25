const fakeUser = {
  username: 'admin',
  password: 'admin123',
};

export const authService = {
  login: (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === fakeUser.username && password === fakeUser.password) {
          localStorage.setItem('token', 'fake-jwt-token');
          resolve(true);
        } else {
          reject('Invalid credentials');
        }
      }, 1000);
    });
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },
};
