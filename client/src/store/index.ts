import Vue from "vue";
import Vuex from "vuex";
import { apiGetService, apiPostService } from '@/util/api';

Vue.use(Vuex);

export const CALCULATE_PI = `CALCULATE_PI`
export const GET_PI = `GET_PI`
export const SET_PI = `SET_PI`
export const RESET_PI_CALCULATION = `RESET_PI_CALCULATION`

export default new Vuex.Store({
  state: {
    pi: {
      currentPi: 0,
      lastUpdated: null,
    },
  },
  mutations: {
    [SET_PI] (state, pi) {
      state.pi = pi
    }
  },
  actions: {
    [RESET_PI_CALCULATION] ({ commit }, payload) {
      apiPostService(`/pi/reset`, payload)
    },
    [CALCULATE_PI] ({ commit }, payload) {
      apiPostService(`/pi/calculate`, payload)
    },
    async [GET_PI] ({ commit }, payload) {
      const result = await apiGetService(`/pi`, payload)
      commit(SET_PI, result.data);
    }
  },
  modules: {}
});
