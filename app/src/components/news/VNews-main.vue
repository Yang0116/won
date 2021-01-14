<template>
  <div class="vnews-main">
      <div class="center">
          <el-row>
              <el-col :span="17">
                <v-news-main-item 
                v-for="(item,index) in showNews"
                :key="index" 
                :img="item.img" 
                :title="item.title"
                :content="item.context"
                :time="item.createtime"
                :count="item.view"
                :user="item.user"></v-news-main-item>
            </el-col>
            <el-col :offset="1" :span="6" class="main-right">
                <div class="search-container">
                    <search text="搜索新闻" width="78%"></search>
                </div>
                <h3 class="giveTitle">为你推荐</h3>
                <ul class="right-new-list">
                    <li v-for="(item,index) in giveNews" :key="index">
                        <a :href="item.href">{{ item.title }}</a>
                    </li>
                </ul>
            </el-col>
          </el-row>
          <el-row>
              <el-col :span="24">
                  <div class="pagination-container">
                    <el-pagination
                        layout="pager"
                        @current-change="changePage"
                        :current-page="thisPage"
                        :page-count="page">
                    </el-pagination>
                  </div>
              </el-col>
          </el-row>

      </div>
  </div>
</template>

<script>
import Search from '../search/search.vue'
import VNewsMainItem from './VNews-main-item.vue'
export default {
  components: { VNewsMainItem, Search },
    name:"vnews-main",
    data(){
        return {
            allNews:[
                {
                    img:require('@/assets/upload/news1.jpg'),
                    title:"实木家具到底有哪些",
                    content:"正在打算购买家具的朋友可344r567uio9567895t67uiop能有这样的经历，面对淋漓满目的家具，面对A品牌说实木家具，B品牌说纯实木家具",
                    time:"2020-09-15",
                    count:324,
                    user:"admin",
                },
                {
                    img:require('@/assets/upload/news1.jpg'),
                    title:"实木家具到底有哪些",
                    content:"正在打算购买家具的朋友可344r567uio9567895t67uiop能有这样的经历，面对淋漓满目的家具，面对A品牌说实木家具，B品牌说纯实木家具",
                    time:"2020-09-15",
                    count:324,
                    user:"admin",
                }
            ],
            showNews:[],
            giveNews:[
                {
                    title:"实木家具到底有哪些",
                    href:"#"
                },
                {
                    title:"实木家具到底有哪些",
                    href:"#"
                },
                {
                    title:"实木家具到底有哪些",
                    href:"#"
                },
                {
                    title:"实木家具到底有哪些",
                    href:"#"
                },
                {
                    title:"实木家具到底有哪些",
                    href:"#"
                },
                {
                    title:"实木家具到底有哪些",
                    href:"#"
                },
                {
                    title:"实木家具到底有哪些",
                    href:"#"
                },
                {
                    title:"实木家具到底有哪些",
                    href:"#"
                },
                {
                    title:"实木家具到底有哪些",
                    href:"#"
                },
                {
                    title:"实木家具到底有哪些",
                    href:"#"
                },
            ],
            thisPage:1,
            
        }
    },
    computed:{
        page(){
            return Math.ceil(this.allNews.length/10)
            // return 2
        }
    },
    methods:{
        //获取热点 新闻
        getHotNews(){
            this.$axios.get("/getHotNews").then((data)=>{
                this.giveNews = data.data;
            })
        },
        //获取全部新闻
        getAllNews(){
            this.$axios.get("/getAllNews").then((data)=>{
                let newsData = data.data;
                this.allNews = newsData;
                this.showNewByPage(this.page)
            })
        },
        changePage(val){
            this.thisPage = val;
            this.showNewByPage(val)
        },
        //展示数据
        showNewByPage(page){
            this.showNews = this.allNews.slice(
                (page-1) * 10,
                page * 10
            )
        }

    },
    created(){
        this.getAllNews();
        this.getHotNews();
    },
}
</script>

<style scoped>
.vnews-main{
    padding: 30px 0;
    background: #f2f2f2;
}

.main-right{
    background: white;
    padding: 10px;
}

.search-container{
    padding: 15px 0;
    border-bottom: 1px solid #cccccc;
}

.giveTitle{
    font-size: 18px;
    font-weight: 400;
    color: #6a6a6a;
    padding:20px 0 10px 0;
}

.right-new-list a{
    color: #6a6a6a;
    font-size: 15px;
}

.right-new-list li{
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid #6a6a6a;
}

.right-new-list li,.right-new-list a{
    transition: all .5s;
}

.right-new-list li:hover,
.right-new-list li:hover a,
.pagination-container>>>.active,
.pagination-container>>>li:hover{
     color: #e4c17e;
}
</style>