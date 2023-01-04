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
    updateTask(state, { id, title }) {
      state.tasks = state.tasks.map(task => task.id === id ? {...task, title } : task);
    }
  },
  actions: {
  },
  modules: {
  }
})
