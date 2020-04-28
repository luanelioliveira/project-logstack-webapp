<template>
  <v-app>
    <TheToolbar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import TheToolbar from '@/components/TheToolbar.vue'

export default {
  name: 'App',
  components: {
    TheToolbar
  }
}
</script>
