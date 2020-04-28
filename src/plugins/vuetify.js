import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import light from './theme-light'
import dark from './theme-dark'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    themes: { light, dark }
  }
})
