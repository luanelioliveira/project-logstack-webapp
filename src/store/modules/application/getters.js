const leftDrawer = (state) => {
  return state.leftDrawer
}

const isDark = (state) => {
  return state.dark
}

const isLoading = (state) => {
  return state.loading
}

const currentUser = (state) => {
  return state.currentUser
}

const token = (state) => {
  return state.token
}

const isAuthenticated = (state) => {
  return !!state.token
}

const error = (state) => {
  return state.error
}

export default {
  leftDrawer,
  isDark,
  isLoading,
  currentUser,
  token,
  isAuthenticated,
  error
}
