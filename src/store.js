import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        gifs: []
    },
    mutations: {
        setGifs(state, gifs){
            state.gifs = gifs
        }
    },
    actions: {
        searchGiphs({commit}, gifSearch){
            axios.get('/search?api_key=XW1HTpw6EWg9S4z8EYwbMoBy1lUOfc5o&q='+gifSearch+'&limit=5')
                .then(response => {
                    commit('setGifs', response.data.data)
                    console.log(response.data.data)
                }).catch(error => console.log(error))
        }
    },
    getters: {
        gifs(state){
            return state.gifs
        }
    }
})