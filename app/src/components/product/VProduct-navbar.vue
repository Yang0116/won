<template>
  <div class="vproduct-navbar">
      <div class="center">
          <div class="navbar-left">
              <ul class="navbar-ul">
                  <li v-for="(value,key,index) in navbarGo" @click="showOtherProeduct(key)" :key="index">
                      {{key}}
                  </li>
              </ul>
          </div>
          <div class="navbar-right">
             <search text="搜索商品"></search>
          </div>
      </div>
  </div>
</template>

<script>
import search from '../search/search.vue'
export default {
  components: { search },
    name:"vproduct-navbar",
    props:{
        navbarGo:Object
    },
    methods:{
        showOtherProeduct(category){
            this.$parent.categoryBtn(category);
        }
    }
}
</script>

<style scoped>
.vproduct-navbar{
    width: 100%;
    height: 52px;
    line-height: 52px;
}

.vproduct-navbar a,.vproduct-navbar li{
  color: #90939b;
}

.navbar-left{
    float: left;
}

.navbar-ul li{
    padding: 0 10px;
}

.navbar-ul li:hover {
    color: #e4c17e;
}

.navbar-right{
    width: 200px;
    line-height: 1.15;
    float: right;
    position: relative;
    padding-top: 10px;
}

</style>