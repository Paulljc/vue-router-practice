export default {
  all: items => { return items},
  completed: items => {
   return items.filter(item => item.isCompleted)
  },
  active: items => {
   return items.filter(item => !item.isCompleted)
  }
}