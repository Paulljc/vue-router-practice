import Filter from '../../utils/filter'

const getters = {
  itemFilters: state => {
    return Filter[state.status](state.toDoList);
  }
}

export default getters