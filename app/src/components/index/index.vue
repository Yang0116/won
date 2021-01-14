<template>
  <div >
      <rotaion id="rotaion" :rotainList="imgList"></rotaion>
        <i-prodect-show></i-prodect-show>
        <i-about></i-about>
        <i-news></i-news>
    </div>
</template>

<script>
// 轮播图模块
import Rotaion from "../rotation/rotaion";
import IAbout from './IAbout.vue';
import INews from './INews.vue';
import IProdectShow from './IProdect-show.vue';
export default {
    name:"index",
    data(){
        return {
            //轮播图路径列表
            imgList:[
                {id:1,url:require('@/assets/img/rotaion1.jpg')},
                {id:2,url:require('@/assets/img/rotaion2.jpg')},
            ],
         
        }
    },
    components:{
        Rotaion,
        IProdectShow,
        IAbout,
        INews,
        
    }
}
</script>

<style>
#index{
    width: 100%;
}
#rotaion{
    width: 100%;
    float: left;
}


</style>