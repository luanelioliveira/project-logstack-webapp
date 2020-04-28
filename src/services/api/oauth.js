import http from '../config/http'

const endpoint = '/oauth'

const getToken = login => http.get(`${endpoint}/token`, {
  params: {
    grant_type: 'password',
    username: login.email,
    password: login.password
  },
  auth: {
    username: process.env.VUE_APP_CLIENT_ID,
    password: process.env.VUE_APP_SECRET_ID
  }
})

const signup = user => http.post(`${endpoint}/signup`, user)

const self = token => http.get(`${endpoint}/self`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export default {
  getToken,
  signup,
  self
}
