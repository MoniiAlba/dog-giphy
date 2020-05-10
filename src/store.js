import Vue from 'Vue'
import Vuex from 'Vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
    state:{

    },
    mutations: {

    },
    actions: {
        getGiphs({commit, state}, gifSearch){
            axios.get('/search?api_key=XW1HTpw6EWg9S4z8EYwbMoBy1lUOfc5o&q='+gifSearch+'&limit=5')
                .then(response => {
                    return  response.data.data
                }).catch(error => console.log(error))
        }
    },
    getters: {

    }
})