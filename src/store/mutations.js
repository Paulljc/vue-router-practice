import Vue from 'vue'
import mutationType from './mutationType'

const mutations = {
  [mutationType.INIT_ITEMS](state, payload) {
    state.toDoList = payload.data
  },
  [mutationType.COMPLETE_ITEM](state, payload) {
    const newItem = Object.assign({}, payload.data, { isCompleted: !payload.data.isCompleted })
    Vue.set(state.toDoList, state.toDoList.findIndex(v => v.id === payload.data.id), newItem)
  },
  [mutationType.CHANGE_CATEGORY](state, payload) {
    state.status = payload.data
  }
}

export default mutations