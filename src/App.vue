<template>
  <v-app>
    <navbar />
    <v-content>
      <search-area />
      <gifs-area />
    </v-content>
  </v-app>
</template>

<script>
import navbar from './components/navbar';
import SearchArea from './components/SearchArea';
import GifsArea from './components/GifsArea';

export default {
  name: 'App',

  components: {
    navbar,
    SearchArea,
    GifsArea
  },

  data: () => ({
    //
  }),
};
</script>
