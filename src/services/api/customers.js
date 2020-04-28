import http from '../config/http'

const endpoint = '/api/v1/customers'

const self = token => http.get(`${endpoint}/self`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export default {
  self
}
