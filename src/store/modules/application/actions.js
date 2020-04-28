const setLeftDrawer = ({ commit }, payload) => {
  commit('SET_LEFT_DRAWER', payload)
}

const setDark = ({ commit }, payload) => {
  commit('SET_DARK', payload)
}

const setLoading = ({ commit }, payload) => {
  commit('SET_LOADING', payload)
}

const setCurrentUser = ({ commit }, payload) => {
  commit('SET_CURRENT_USER', payload)
}

const clearCurrentUser = ({ commit }) => {
  commit('CLEAR_CURRENT_USER')
}

const setToken = ({ commit }, payload) => {
  commit('SET_TOKEN', payload)
}

const setError = ({ commit }, payload) => {
  commit('SET_ERROR', payload)
}

const clearError = ({ commit }) => {
  commit('CLEAR_ERROR')
}

export default {
  setLeftDrawer,
  setDark,
  setLoading,
  setCurrentUser,
  clearCurrentUser,
  setToken,
  setError,
  clearError
}
