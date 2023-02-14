<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    {{ homeData.title }}
    <Banner/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import {bottomData} from '@/static/homeData';

import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Banner from '@/views/homev/BannerList.vue'
import { def } from '@vue/shared';

// export default {

// };
export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    Banner
  },
  // name: "bottomTag",
  data() {
    return {
      homeData: bottomData,
      load: true,
      show: false,
      showMini: false
    }
  }
});
</script>
