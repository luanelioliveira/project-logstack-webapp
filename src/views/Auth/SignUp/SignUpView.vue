<template>
  <v-container fill-height>
    <v-layout align-center>
      <v-flex>
        <v-card class="pa-6 mx-auto elevation-10" max-width="500" :dark="isDark">
          <v-card-title>
            <v-logo class="display-1" />
          </v-card-title>
          <v-card-text>
            <span class="grey--text headline">Create your LogStack Account</span><br>
          </v-card-text>
          <v-card-text>
            <v-form @submit.prevent="register" autocomplete="off">
              <v-text-field
                outline
                v-model="data.email"
                name="email"
                label="Email Address"
                type="text">
              </v-text-field>
              <v-text-field
                outline
                v-model="data.fullName"
                name="fullName"
                label="Full Name"
                type="text">
              </v-text-field>
              <v-text-field
                outline
                name="password"
                v-model="data.password"
                label="Password"
                type="password"
              >
              </v-text-field>
              <v-btn depressed block x-large color="primary" :disabled="!isValidForm()" type="submit" :loading="isLoading">Submit</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <span class="pt-4">
              <span class="pt-4 grey--text subtitle-2">
                <span class="pr-4">Already have an account?</span>
                <span><v-btn small text to="/sign-in"> Sign in here</v-btn></span>
              </span>
            </span>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SignUpView',
  data () {
    return {
      data: {
        email: '',
        fullName: '',
        password: ''
      },
      showPassword: false,
      alert: false
    }
  },
  computed: {
    ...mapGetters('application', ['isLoading']),
    ...mapGetters('application', ['isDark'])
  },
  methods: {
    ...mapActions('authentication', ['signUp']),
    register () {
      this.signUp(this.data)
    },
    isValidForm () {
       if (!this.data.email || this.data.email == '' || this.data.email.lenght < 5) return false
       if (!this.data.password || this.data.password == '' || this.data.password.lenght < 5) return false
       return true
    }
  }
}
</script>
