import http from '../config/http'

const endpoint = '/api/v1/users'

const findAll = token => http.get(endpoint, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export default {
  findAll
}
