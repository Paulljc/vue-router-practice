import mutationType from './mutationType'
import { addTodo, deleteTodo, updateTodo, getTodos } from '../apis/todolist'

const actions = {
  async initItems({commit}) {
    const res = await getTodos();
    commit(mutationType.INIT_ITEMS, {data: res.data})
  },
  completeItem({commit}, payload) {
    commit(mutationType.COMPLETE_ITEM, payload)
  },
  async editItem({dispatch}, payload) {
    await updateTodo(payload.data.id, payload.data.item)
    dispatch('initItems')
  },
  async deleteItem({dispatch}, payload) {
    await deleteTodo(payload.data.id)
    dispatch('initItems')
  },
  async createNewItem({dispatch}, payload) {
    await addTodo(payload.data)
    dispatch('initItems')
  },
  changeCategory({commit}, payload) {
    commit(mutationType.CHANGE_CATEGORY, payload)
  }
}

export default actions