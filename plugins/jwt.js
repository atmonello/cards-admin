import Vue from "vue";
import jwt from "jsonwebtoken";

Vue.use(jwt);
Vue.prototype.$jwt = jwt;
