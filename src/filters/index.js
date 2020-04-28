import Vue from 'vue'
import level from '@/domains/level'
import environment from '@/domains/environment'
import moment from 'moment'

Vue.filter('level', (value) => {
  if (!value) return ''
  return level.filter((l) => l.value === value).map((l) => { return l.text })[0]
})

Vue.filter('levelIcon', (value) => {
  if (!value) return ''
  return level.filter((l) => l.value === value).map((l) => { return l.icon })[0]
})

Vue.filter('levelColor', (value) => {
  if (!value) return ''
  return level.filter((l) => l.value === value).map((l) => { return l.color })[0]
})

Vue.filter('environment', (value) => {
  if (!value) return ''
  return environment.filter((l) => l.value === value).map((l) => { return l.text })[0]
})

Vue.filter('date', (value) => {
  if (!value) return ''
  const options = { 
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }
  const date = new Date(value)
  return date.toLocaleDateString(['pt-BR'], options)
})

Vue.filter('moment', (date) => {
  return moment(date).fromNow();
})
