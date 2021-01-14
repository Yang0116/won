<template>
  <div class="inews-item">
      <el-row>
          <el-col :span="8">
              <img :src="img" width="100%" alt="" srcset="">
          </el-col>
          <el-col :span="16">
              <div class="news-info">
                <p class="time color84">{{ time }}</p>
                <item-active-title :title="title"></item-active-title>
                <p class="content color84">{{ content }}</p>
              </div>
          </el-col>
        
      </el-row>
  </div>
</template>

<script>
import itemActiveTitle from '../itemTitle/itemActiveTitle.vue'
export default {
  components: { itemActiveTitle },
    name:"inews-item",
   props:{
       img:String,
        time:String,  
        title:String,
        content:String
   }
}
</script>

<style scoped>
 .inews-item:hover .title::after{
    width: 100%;
}

.inews-item{
    margin: 20px 15px 0 0;
}

.inews-item:nth-child(-n+2){
    margin-top: 40px;
}

.news-info{
    padding-left: 10px;
}

.content{
    width: 100%;
    clear: both;
    margin-top: 5px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 13px;
    margin-top: 20px;
}

.news-info h4{
    padding-left: 0;
    height: 30px;
    padding-bottom: 15px;
}
.news-info h4::after{
    width: 5%;
    margin-top: 15px;
}
</style>