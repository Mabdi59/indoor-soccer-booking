import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import UserLogin from '../views/UserLogin.vue'
import AdminLogin from '../views/AdminLogin.vue'
import Logout from '../views/Logout.vue'
import Register from '../views/Register.vue'
import AdminDashboard from '../views/AdminDashboard.vue'
import store from '../store/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/user-login",
      name: "user-login",
      component: UserLogin,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/admin-login",
      name: "admin-login",
      component: AdminLogin,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/admin-dashboard",
      name: "admin-dashboard",
      component: AdminDashboard,
      meta: {
        requiresAuth: true,
        requiresAdmin: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const requiresAdmin = to.matched.some(x => x.meta.requiresAdmin);

  if (requiresAuth && store.state.token === '') {
    next("/user-login");
  } else if (requiresAdmin && store.state.user.role !== 'ROLE_ADMIN') {
    next("/user-login");
  } else {
    next();
  }
});

export default router;
