<template>
  <div class="v-news">
      <banner title="新闻中心" :img="require('@/assets/img/banner/newsBanner.jpg')"></banner>
      <v-news-main/>
  </div>
</template>

<script>
import Banner from '../banner/Banner.vue'
import VNewsMain from './VNews-main.vue'
export default {
  components: { Banner, VNewsMain },
    name:"VNews"
}
</script>

<style>

</style>