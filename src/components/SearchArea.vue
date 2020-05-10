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