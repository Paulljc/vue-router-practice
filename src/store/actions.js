
import axios from "axios";

const baseUrl = "http://localhost:3001/todos"

const actions = {
  initItems({commit}) {
    axios.get(baseUrl)
    .then( function(res) {
      commit('initItems', {data: res.data})
    })
  },
  completeItem({commit}, payload) {
    commit('completeItem', payload)
  },
  editItem({dispatch}, payload) {
    axios.put(`${baseUrl + "/" + payload.data.id}`, payload.data.item).then(() => { dispatch('initItems') })
  },
  deleteItem({dispatch}, payload) {
    axios.delete(`${baseUrl + "/" + payload.data.id}`, payload.data).then(() => { dispatch('initItems') })
  },
  createNewItem({dispatch}, payload) {
    axios.post(baseUrl, payload.data).then(() => { dispatch('initItems') })
  },
  changeCategory({commit}, payload) {
    commit('changeCategory', payload)
  }
}

export default actions