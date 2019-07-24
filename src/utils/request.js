import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:3001/todos',
  timeout: 5000,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

service.interceptors.response.use(
  response => response,
  error => {
    alert(error.message)
    return Promise.reject(error)
  }
)

export default service