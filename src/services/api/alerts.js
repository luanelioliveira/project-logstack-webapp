import http from '../config/http'

const endpoint = '/api/v1/alerts'

const findAll = () => http.get(endpoint, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

const viewById = id => http.post(`${endpoint}/${id}/view`, null, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

export default {
  findAll,
  viewById
}
