<template>
  <v-container fill-height>
    <v-layout align-center>
      <v-flex>
        <v-card class="pa-6 mx-auto elevation-10" max-width="500" :dark="isDark">
          <v-card-title>
            <v-logo class="display-1" />
          </v-card-title>
          <v-card-text>
            <span class="grey--text headline">Sign in to your LogStack Account</span><br>
          </v-card-text>
          <v-card-text>
            <v-form @submit.prevent="login" autocomplete="off">
              <v-text-field
                outline
                v-model="data.email"
                name="email"
                label="Email Address"
                type="text">
              </v-text-field>
              <v-text-field
                outline
                name="password"
                v-model="data.password"
                label="Password"                
                type="password">
              >
              </v-text-field>
              <v-btn depressed block x-large color="primary" :disabled="!isValidForm()" type="submit" :loading="isLoading">Submit</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <span class="pt-4">
              <span class="pt-4 grey--text subtitle-2">
                <span class="pr-4">Don't have an account?</span>
                <span><v-btn small text to="/sign-up">Sign up here</v-btn></span>
              </span>
            </span>
          </v-card-actions>
        <v-snackbar v-model="error"  multi-line>
          Email e/ou senha inválido(s)
          <v-btn color="red" text @click="clearError">Close</v-btn>
        </v-snackbar>    
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'SignInView',
  data () {
    return {
      snack: false,
      data: {
        email: '',
        password: ''
      },
      showPassword: false,
      alert: false
    }
  },
  computed: {
    ...mapGetters('application', ['isLoading']),
    ...mapGetters('application', ['isDark']),
    ...mapState('application', ['error'])
  },
  methods: {
    ...mapActions('authentication', ['signIn']),
    ...mapActions('application', ['clearError']),
    login () {
      this.signIn(this.data)
    },
    isValidForm () {
       if (!this.data.email || this.data.email == '' || this.data.email.lenght < 5) return false
       if (!this.data.password || this.data.password == '' || this.data.password.lenght < 5) return false
       return true
    }
  }
}
</script>
