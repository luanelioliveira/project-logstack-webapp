const SET_ALERTS = (state, alerts) => {
  const s = state
  s.alerts = alerts
}

const SET_VIEW = (state, id) => {
  const alert = state.alerts.find(alert => {
    return alert.id === id
  })
  alert.isVisualized = true;
}


export default {
  SET_ALERTS,
  SET_VIEW
}
