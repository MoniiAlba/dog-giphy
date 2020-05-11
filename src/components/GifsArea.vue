<template>
    <div class="gifs-area">
        <v-container class="hidden-lg-and-up" >
            <v-row>
                <v-col
                    cols="12"
                    sm="4"
                    lg="3"
                    v-for="(gif, index) in gifs"
                    :key=index
                >
                    <gifcard 
                        :gifSrc = gif.images.fixed_height.url
                        :gifTitle = gif.title  />
                </v-col>
            </v-row>
        </v-container>
        <gifcard 
            class="hidden-md-and-down"
            v-for="(gif, index) in gifs"
            :key=index
            :gifSrc = gif.images.fixed_height.url
            :gifTitle = gif.title  />
    </div>
</template>

<script>
import gifcard from './GifCard'
export default {
    components: {
        gifcard
    },
    computed: {
        gifs(){
            console.log('searching for gifs')
            return this.$store.getters.gifs
        }
    }
}
</script>

<style scoped>
    .gifs-area{
        display: flex;
        justify-content: space-evenly;
    }

</style>