<template>
  <v-app-bar app v-if="isAuthenticated" :dark="isDark">
    <v-toolbar-title to="/">
        <v-logo class="display-1" />
    </v-toolbar-title>
    <div class="flex-grow-1"></div>
    <v-toolbar-items>
      <v-btn to="/logs" text><v-icon left>mdi-chart-line-variant</v-icon>Logs</v-btn>
      <v-btn to="/alerts" text>
        <v-icon left>mdi-bell</v-icon>
        Alerts 
        <span class="ml-1" v-if="alertsNotViewed.length > 0">({{ alertsNotViewed.length }})</span>
      </v-btn>
      <v-btn to="/triggers" text><v-icon left>mdi-cogs</v-icon>Triggers</v-btn>
    </v-toolbar-items>
    <v-menu :nudge-width="350" offset-x  offset-y>
      <template v-slot:activator="{ on }">
        <v-btn dark icon v-on="on">
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-content>
          <v-list-item-title class="title">{{ currentUser.user.fullName }}</v-list-item-title>
          <v-list-item-subtitle>{{ currentUser.user.email }}</v-list-item-subtitle>
        </v-list-item-content>      
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>API Key</v-list-item-title>
            <v-list-item-subtitle>{{ currentUser.apiKey }}</v-list-item-subtitle>
          </v-list-item-content>        
        </v-list-item>
        <v-list-item>
          <v-btn small tile dark depressed color="primary" @click="logout">
            <v-icon left>mdi-exit-to-app</v-icon> Logout
          </v-btn>
          <v-btn small dark depressed outlined color="secondary" to="/logs-generate" class="ml-5">
            Generate log
          </v-btn>          
        </v-list-item>
      </v-list>
    </v-menu>    
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TheToolbar',
  computed: {
    ...mapGetters('application', ['isAuthenticated']),
    ...mapGetters('application', ['isDark']),
    ...mapGetters('application', ['currentUser']),
    ...mapGetters('alerts', ['alertsNotViewed'])
  },
  methods: {
    ...mapActions('authentication', ['signOut']),
    logout () {
      this.signOut()
    }
  }
}
</script>
