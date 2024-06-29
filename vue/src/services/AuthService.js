import axios from 'axios';

export default {
  userLogin(user) {
    return axios.post('/login', user);
  },

  adminLogin(admin) {
    return axios.post('/login', admin);
  },

  register(user) {
    return axios.post('/register', user);
  }
}
