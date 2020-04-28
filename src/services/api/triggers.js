import http from '../config/http'

const endpoint = '/api/v1/triggers'

const add = trigger => http.post(endpoint, trigger, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

const findAll = () => http.get(endpoint, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

const findById = id => http.get(`${endpoint}/${id}`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

const updateById = (id, trigger) => http.put(`${endpoint}/${id}`, trigger, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

const archiveById = id => http.post(`${endpoint}/${id}/archive`, null, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

const activeById = id => http.post(`${endpoint}/${id}/active`, null, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

const desactiveById = id => http.delete(`${endpoint}/${id}/active`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

export default {
  add,
  findAll,
  findById,
  updateById,
  archiveById,
  activeById,
  desactiveById
}
