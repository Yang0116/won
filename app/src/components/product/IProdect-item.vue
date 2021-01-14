<template>
  <div class="prodect-item" >
      <!-- 首页产品展示 -->
        <prodect-img-show :img="img"></prodect-img-show>
        <item-active-title :title="this.title"></item-active-title>
      
  </div>
</template>

<script>
import itemActiveTitle from '../itemTitle/itemActiveTitle.vue'
import ProdectImgShow from './prodectImg-show.vue'
export default {
  components: { itemActiveTitle, ProdectImgShow },
    name:"IProdect-item",
    props:{
        img:String,
        title:String,
    },
    data(){
        return {
            fater:"prodect-item",
        }
    },
}
</script>

<style scoped>
.prodect-item{
    width: 270px;
    float: left;
    border-bottom: 1px solid #ededed;
    margin: 10px;
}

.prodect-item:hover .title::after{
    width: 100%;
}

.prodect-item:hover >>>.black{
    top: 0%;
}

.prodect-item:hover >>>.img-show img{
    transform: scale(1.15);
}
</style>