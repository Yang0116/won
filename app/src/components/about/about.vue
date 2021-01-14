<template>
  <div class="about">
     <banner title="招商加盟/联系我们" :img="require('@/assets/img/banner/aboutBanner.jpg')"></banner>
      <son-navbar :navbarArray="SonNavbar"></son-navbar>
    <div class="main">
        <item-title bigTitle="联系我们" smallTitle="Contact Us"/>
        <div class="center">
            <div class="introduction">
                <p>实木家具公司于1999年创建于中国长沙，这十多年来一直致力于实木家具的生产的销售，销售主要包括实木座椅/沙发系列、、卧室实木床柜系列、家具实木凳椅产品系列等约100个产品。为了让更多的顾客成为实木家具公司的品牌布道者，实木家具公司的一个重要策略就是销售梦想而不是产品。为了做到这一点，实木家具公司不仅提供广泛、设计精美、实用、低价的产品，而且也把产品跟公益事业进行联姻。</p>
            </div>
            <div class="contact">
                <el-row>
                <el-col :span="12">
                   <div class="contact-item">
                        <p class="cantact-item-title">客户服务</p>
                        <ul class="contact-ul first-ul">
                            <li>联系电话：666-888-8888</li>
                            <li>联系电话：666-888-8888</li>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="contact-item">
                        <p class="cantact-item-title">招商加盟</p>
                        <ul class="contact-ul">
                            <li>联系人：赵先生 / 张女士</li>
                            <li>Email：zhaoshanghezuo@web.net</li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Banner from '../banner/Banner.vue'
import ItemTitle from '../itemTitle/itemTitle.vue'
import SonNavbar from '../navbar/Son-navbar.vue'
export default {
  components: { Banner, ItemTitle, SonNavbar },
    name:"about",
    data(){
        return {
             SonNavbar:[
                {
                    href:"#",
                    text:"品牌故事"
                },
                {
                    href:"#",
                    text:"招商加盟",
                    isSon:true,
                    sonList:[{
                        href:"#",
                        text:"品牌故事"
                    },
                    {
                        href:"#",
                        text:"招商加盟",
                    },
                    {
                        href:"#",
                        text:"联系我们"
                    }]
                },
                {
                    href:"#",
                    text:"联系我们"
                }
            ],
        }
    }
}
</script>

<style scoped>
.main{
    padding: 30px 0;
}

.introduction{
    padding: 30px;
    text-indent: 2rem;
    line-height: 1.5;
    font-size: 13px;
    color: rgb(63, 63, 63);
    border-bottom: 1px solid #cccccc;
}

.contact-item{
    width: 100%;
    height: 100%;
}

.contact{
    margin-top: 20px;
    background-color: rgba(243, 247, 249, 0.3);
    font-size: 13px;
    padding: 10px 20px 30px;
}

.contact:hover{
    background: #e4eaec;
}

.contact ul{
    padding-left: 30px;
    height: 100px;
    border-right: 1px solid #e4eaec;
}

.contact ul li{
    clear: both;
    margin-top: 30px;
    list-style-type: square;
}

.first-ul{
    border-right:1px solid #e4eaec ;
}

.cantact-item-title{
    padding-left: 10px;
}
</style>