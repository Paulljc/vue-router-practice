import request from '../utils/request'

export const addTodo = (todo) => {
  return request({
    url: '/',
    method: 'post',
    data: todo
  })
}

export const getTodos = () => {
  return request({
    url: '/',
    method: 'get'
  })
}

export const deleteTodo = (id) => {
  return request({
    url: `/${id}`,
    method: 'delete'
  })
}

export const updateTodo = (id, todo) => {
  return request({
    url: `/${id}`,
    method: 'put',
    data: todo
  })
}