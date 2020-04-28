<template>
  <div id="alerts">
    <v-alert
      v-for="alert in alerts"
      :key="alert.id"      
      :color="alert.isVisualized ? 'grey lighten-3' : alert.log.detail.level | levelColor" 
      :icon="alert.log.detail.level | levelIcon"            
      text dense prominent border="left"
    >
      <v-row align="center" no-gutters>
        <v-col cols="9">
          <h3 class="headline font-weight-bold">{{ alert.trigger.name }}</h3>
          <span>{{ alert.createdDate | date }}</span>   
        </v-col>
        <v-col cols="3" class="text-right">
          <v-btn 
            v-if="!alert.isVisualized"
            :color="alert.log.detail.level | levelColor" 
            fab dark x-small depressed 
            @click="btnVisualized(alert.id)"
          >
            <v-icon dark>mdi-check</v-icon>
          </v-btn>
                
        </v-col>
      </v-row>        
      <v-row>  
        <v-col>
          <div>
            {{ alert.trigger.message }}
          </div>
        </v-col>
      </v-row>      
      <v-row>  
        <v-col>
          <div>
            <v-btn 
              :color="alert.isVisualized ? 'grey lighten-3' : alert.log.detail.level | levelColor"                
              :to="`/logs/${alert.log.id}`"
              outlined small 
            >
              View Log Detail
            </v-btn>
          </div>
        </v-col>
      </v-row>  
    </v-alert>  
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['alerts'],
  data () {
    return {
        dialog: false
    }
  },
  computed: {
    ...mapGetters('application', ['isLoading'])
  },
  methods: {
    ...mapActions('alerts', ['setViewById']),
    btnVisualized (id) {
      this.setViewById(id)
    }
  }
}
</script>