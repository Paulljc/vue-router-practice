import Vue from 'vue'

const mutations = {
  initItems(state, payload) {
    state.toDoList = payload.data
  },
  completeItem(state, payload) {
    const newItem = Object.assign({}, payload.data, { isCompleted: !payload.data.isCompleted })
    Vue.set(state.toDoList, state.toDoList.findIndex(v => v.id === payload.data.id), newItem)
  },
  editItem(state, payload) {
    state.toDoList.forEach(item => {
      if (item.id === payload.data.id) {
        item.content = payload.data.content;
      }
    });
  },
  deleteItem(state, payload) {
    state.toDoList.splice(state.toDoList.indexOf(payload.data), 1)
  },
  createNewItem(state, payload) {
    state.toDoList.unshift(payload.data)
  },
  changeCategory(state, payload) {
    state.status = payload.data
  }
}

export default mutations