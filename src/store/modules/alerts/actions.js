import AlertsService from '@/services/api/alerts.js'

const getAlerts = ({ commit }) => {
  commit('application/SET_LOADING', true, { root: true })
  AlertsService.findAll()
    .then((response) =>{
      let alerts = response.data
      alerts.sort(function(a, b) {
        return new Date(b.createdDate) > new Date(a.createdDate) ? 1 : -1
      });
      commit('SET_ALERTS', response.data)
      commit('application/SET_LOADING', false, { root: true })
    })
    .catch(() => {
      commit('application/SET_LOADING', false, { root: true })
      commit('application/SET_ERROR', true, { root: true })
    })  
}

const setViewById = ({ commit }, id) => {
  commit('application/SET_LOADING', true, { root: true })
  AlertsService.viewById(id)
  .then(() => {    
    commit('SET_VIEW', id)
    commit('application/SET_LOADING', false, { root: true })
  })
  .catch(() => {
    commit('application/SET_LOADING', false, { root: true })
  })  
}

export default {
  getAlerts,
  setViewById
}
