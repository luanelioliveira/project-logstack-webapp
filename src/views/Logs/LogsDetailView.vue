<template>
  <v-container grid-list-xs>
  
    <v-title-page>Log Overview</v-title-page>

    <div id="top" v-if="isLoading">
      <div class="d-flex justify-center pa-10" >
        <v-progress-circular indeterminate :size="70" color="primary" ></v-progress-circular>
      </div>
    </div>  

    <div id="content" v-else>

      <v-row no-gutters class="pt-5">
        <v-col cols="12">

          <v-card class="pa-10">

            <v-row no-gutters class="pt-5">
              <v-col cols="10">
                <span class="title font-weight-bold">Summary</span><br />
                <p class="subtitle-1">{{ log.title }}</p>
              </v-col>
              <v-col class="text-right" cols="2">
                <v-btn style="pointer-events: none" class="no-click" dark large depressed :color="log.detail.level | levelColor">
                  {{ log.detail.level.toLowerCase() }}
                </v-btn>
              </v-col>
            </v-row>            

            <v-row no-gutters class="pt-5">
              <v-col cols="3">
                <span class="title font-weight-bold">Application Name</span><br />
                <p class="subtitle-1">{{ log.application.name }}</p>
              </v-col>
              <v-col cols="3">
                <span class="title font-weight-bold">Host</span><br />
                <p class="subtitle-1">{{ log.application.host }} ({{ log.application.host }})</p>
              </v-col>
              <v-col cols="3">
                <span class="title font-weight-bold">Environment</span>
                <p class="subtitle-1">{{ log.application.environment | environment }}</p>
              </v-col>
              <v-col cols="3">
                <span class="title font-weight-bold">Owner</span><br />
                <p class="subtitle-1">{{ log.createdBy.fullName }}</p>
              </v-col>              
            </v-row>

            <v-row no-gutters class="pt-5">
              <v-col cols="12">
                <span class="title font-weight-bold">Description</span>
                <v-card flat class="grey lighten-3 mt-2 pa-5">
                  <p class="subtitle-2 font-weight-bold">{{ log.detail.timestamp | date }} </p>
                  <pre>{{ log.detail.content }}</pre>            
                </v-card>
              </v-col>
            </v-row>

            <v-row no-gutters class="pt-5">
              <v-col cols="12">
                <v-btn dark depressed color="secondary" @click="btnBackPage()">
                  Back
                </v-btn>
              </v-col>
            </v-row>

          </v-card>
        </v-col>
      </v-row>

    </div>
  
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LogService from '@/services/api/logs.js'
import router from '@/router/index'

export default {
  props: ['id'],
  name: 'LogsDetailView',
  data () {
    return {
      log: {
        id: '',
        title: '',
        detail: {
          timestamp: '',
          content: '',
          level: ''        
        },
        application: {
          name: '',
          host: '',
          ip: '',
          environment: ''
        },
        createdBy: {
          fullName: '',
          email: ''
        }
      }
    }
  },
  mounted() {
    this.initialize()
  },
  computed: {
    ...mapGetters('application', ['isLoading'])
  },
  methods: {
    ...mapActions('application', ['setLoading']),
    initialize () {
      this.getLog()
    },
    btnBackPage () {
      router.go(-1)
    },
    getLog () {
      this.setLoading(true)
      LogService.findById(this.id)
        .then(response => {
          this.log = {
            id: response.data.id,
            title: response.data.title,
            detail: {
              content:  response.data.detail.content,
              timestamp: response.data.detail.timestamp,
              level: response.data.detail.level        
            },
            application: {
              name: response.data.application.name,
              host: response.data.application.host,
              ip: response.data.application.ip,
              environment: response.data.application.environment
            },
            createdBy: {
              id: response.data.createdBy.id,
              fullName: response.data.createdBy.fullName,
              email: response.data.createdBy.email
            }
          }          
          this.setLoading(false)
        })
        .catch(() => {
          this.setLoading(false)
        })
    }
  }  
}
</script>
