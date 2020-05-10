<template>
    <div class="search-container">
        <div class="search-bar">
            <v-text-field
                v-model="searchGif"
                outlined
                autofocus
                loading="showLoading"
                append-icon="fas fa-search"
                @keyup.enter="search"
                >
            </v-text-field>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data: () => {
        return {
            showLoading: false,
            searchGif: 'Dog'
        } 
    },
    methods: {
        search() {
            this.showLoading = true
            console.log(this.searchGif)
            let results = ''
            this.$store.dispatch('getGiphs', this.searchGif).then(resp => console.log(resp))
            
            
        }
    }
    
}
</script>

<style scoped>
  .search-container{
      margin: 40px;      
  }

  .search-bar{
      width: 25%;
  }
</style>