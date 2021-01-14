<template>
  <div class="inews">
      <div class="center">
          <item-title bigTitle="新闻资讯" smallTitle="news"></item-title>
          <div class="news-main">
              <el-row>
                  <el-col  v-for="(item,index) in news"  :key="index" :span="12">
                    <i-news-itme
                    :img="item.img"
                    :time="item.time" 
                    :title="item.title" 
                    :content="item.content"></i-news-itme>

                  </el-col>
              </el-row>
            <el-row>
                <el-col  :span="24" class="bottom-btn">
                    <bottom-btn class="accrows-btn color84">
                        <i class="fa fa-long-arrow-right" aria-hidden="true" slot="one"></i>
                        <i class="fa fa-long-arrow-right" aria-hidden="true" slot="two"></i>
                    </bottom-btn>      

                </el-col>
            </el-row>
          </div>
      </div>
  </div>
</template>

<script>
import itemTitle from '../itemTitle/itemTitle.vue'
import INewsItme from '../news/INews-itme.vue'
import BottomBtn from '../pagebtn/bottom-btn.vue'
export default {
  name:"inews",  
   data(){
        return {
            news:[
                {
                    img:require("@/assets/upload/news1.jpg"),
                    time:"2018-09-11",  
                    title:"实木家具到底有哪些？",
                    content:"正在打算购买家具的朋友可能有这样的经历，面对淋漓满目的家具，面对A品牌说实木家具，B品牌说纯实木家具huegbvuvbhnjv hn"
                },
                {
                    img:require("@/assets/upload/news1.jpg"),
                    time:"2018-09-11",  
                    title:"实木家具到底有哪些？",
                    content:"正在打算购买家具的朋友可能有这样的经历，面对淋漓满目的家具，面对A品牌说实木家具，B品牌说纯实木家具huegbvuvbhnjv hn"
                },
                {
                    img:require("@/assets/upload/news1.jpg"),
                    time:"2018-09-11",  
                    title:"实木家具到底有哪些？",
                    content:"正在打算购买家具的朋友可能有这样的经历，面对淋漓满目的家具，面对A品牌说实木家具，B品牌说纯实木家具huegbvuvbhnjv hn"
                },
                {
                    img:require("@/assets/upload/news1.jpg"),
                    time:"2018-09-11",  
                    title:"实木家具到底有哪些？",
                    content:"正在打算购买家具的朋友可能有这样的经历，面对淋漓满目的家具，面对A品牌说实木家具，B品牌说纯实木家具huegbvuvbhnjv hn"
                }
            ]
        }
    },
  components: { itemTitle, INewsItme, BottomBtn },

}
</script>

<style scoped>
 .inews{
     padding: 60px 0;
 }

.bottom-btn{
    margin: 10px auto;
    height: 40px;
    position: relative;
}

.bottom-btn .btn{
    position:absolute;
    left: 50%;
    top: 50%;
    width: 150px;
    font-size: 20px;
    transform: translate(-65%,-20%);
}
</style>