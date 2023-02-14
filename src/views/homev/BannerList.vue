<template>
    <div>
      <!-- <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in state.images" :key="image">
          <img :src="image.pic" alt="">
        </van-swipe-item>
      </van-swipe> -->
    </div>
</template>
<!-- 这个是直接引用组件不需要在注册 -->
<script lang="ts">
import { defineComponent } from 'vue'
import { Swipe } from 'vant';
export default defineComponent({
  name: 'BannerList',
  components: {
    Swipe
    // 注册组件
  },
  setup() {
    // 生成Banner Images List ，用于轮播使用
    const images = [
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    ];
    return { images };
  }
})
</script>
