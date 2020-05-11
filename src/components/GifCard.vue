<template>
    <div class="gif-container">
         <v-card>
            <v-img
                :src="gifSrc"
                >
            </v-img>
            <v-card-title class="gif-title" v-text="gifTitle"></v-card-title>
        </v-card>
    </div>
</template>

<script>
export default {
    props:{
        gifSrc: {
            type: String,
            required: true
        },
        gifTitle: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
    .gif-container{
        width: 100%;
    }

    .gif-title {
        color: #159dc6;
    }

    @media (min-width: 1264px) {
        .gif-container{
            width: 18%;
        }
    }
</style>