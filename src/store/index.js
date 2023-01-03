import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {
  },
  mutations: {
    addTask(state, payload) {
      state.tasks.push(payload);
    },
    removeTask(state, payload) {
      state.tasks = state.tasks.filter(task => task.id !== payload);
    },
    updateTask(state, payload) {
      state.tasks.map(task => {
        if (task.id === payload.id) {
          return task = payload;
        } else {
          return task;
        }
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
