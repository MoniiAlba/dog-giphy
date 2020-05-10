<template>
  <v-app>
    <navbar />
    <v-content>
      <search-area />
    </v-content>
  </v-app>
</template>

<script>
import navbar from './components/navbar';
import SearchArea from './components/SearchArea';

export default {
  name: 'App',

  components: {
    navbar,
    SearchArea
  },

  data: () => ({
    //
  }),
};
</script>
