const alerts = (state) => {
  return state.alerts
}

const alertsNotViewed = (state) => {
  return state.alerts.filter((alert) => { return alert.isVisualized === false })
}

const alertsViewed = (state) => {
  return state.alerts.filter((alert) => { return alert.isVisualized === true })
}

export default {
  alerts,
  alertsNotViewed,
  alertsViewed
}
