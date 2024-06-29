import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import authService from '../services/AuthService'

Vue.use(Vuex)

const currentToken = localStorage.getItem('token')
const currentUser = JSON.parse(localStorage.getItem('user'));

if (currentToken != null) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

export default new Vuex.Store({
  state: {
    token: currentToken || '',
    user: currentUser || {}
  },
  mutations: {
    SET_AUTH_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    LOGOUT(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.token = '';
      state.user = {};
      axios.defaults.headers.common = {};
    }
  },
  actions: {
    login({ commit }, { user, isAdmin }) {
      const loginService = isAdmin ? 'adminLogin' : 'userLogin';
      return authService[loginService](user)
        .then(response => {
          if (response.status === 200) {
            commit("SET_AUTH_TOKEN", response.data.token);
            commit("SET_USER", response.data.user);
          }
          return response;
        });
    }
  }
})
