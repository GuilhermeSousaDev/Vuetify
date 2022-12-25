import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      { title: 'Go to Shopping', isCompleted: false },
      { title: 'Sleep', isCompleted: false },
    ],
  },
  getters: {
  },
  mutations: {
    addTask(state, payload) {
      state.tasks.push(payload);
    }
  },
  actions: {
  },
  modules: {
  }
})
