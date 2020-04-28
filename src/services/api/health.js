import http from '../config/http'

const endpoint = '/actuator'

const check = () => http.get(`${endpoint}/health`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

export default {
  check
}
