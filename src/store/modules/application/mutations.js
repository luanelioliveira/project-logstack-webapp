const SET_LEFT_DRAWER = (state, leftDrawer) => {
  const s = state
  s.leftDrawer = leftDrawer
}

const SET_DARK = (state, dark) => {
  const s = state
  s.dark = dark
}

const SET_LOADING = (state, loading) => {
  const s = state
  s.loading = loading
}

const SET_CURRENT_USER = (state, currentUser) => {
  const s = state
  s.currentUser = currentUser
}

const CLEAR_CURRENT_USER = (state) => {
  const s = state
  s.currentUser = {
    id: '',
    fullName: '',
    email: ''
  }
}

const SET_TOKEN = (state, token) => {
  const s = state
  s.token = token
}

const CLEAR_ERROR = (state) => {
  const s = state
  s.error = false
}

const SET_ERROR = (state, error) => {
  const s = state
  s.error = error
}

export default {
  SET_LEFT_DRAWER,
  SET_DARK,
  SET_LOADING,
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER,
  SET_TOKEN,
  SET_ERROR,
  CLEAR_ERROR
}
