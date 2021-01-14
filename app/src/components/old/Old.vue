<template>
    <div class="old">
        <banner :img="this.banner.img" :title="this.banner.title"></banner>
        <div class="center">
            <son-navbar :navbarArray="SonNavbar"></son-navbar>
            <div class="about-main">
                <item-title bigTitle="关于我们" smallTitle="about us"></item-title>
                <div class="about-section">
                    <el-row>
                        <el-col :span="7" class="about-img">
                            <img src="~@/assets/img/about1.jpg" alt="关于我们" title="关于我们">
                        </el-col>
                        <el-col :span="17" class="about-content">
                            <p>实木家具公司于1999年创建于中国长沙，这十多年来一直致力于实木家具的生产的销售，销售主要包括实木座椅/沙发系列、、卧室实木床柜系列、家具实木凳椅产品系列等约100个产品。</p>
                        <p>为了让更多的顾客成为实木家具公司的品牌布道者，实木家具公司的一个重要策略就是销售梦想而不是产品。为了做到这一点，实木家具公司不仅提供广泛、设计精美、实用、低价的产品，而且也把产品跟公益事业进行联姻。</p>
                        <p>实木家具公司还有一个独特的策略，采用一体化品牌模式的品牌，即拥有品牌、设计及销售渠道。在产品品牌上，实木家具公司把公司的2万多种产品，分为三大系列：实木家具办公、家庭储物、儿童实木凳椅。在实木家具公司品牌的强势支撑下，100多种产品均建立了自己的品牌。从Sandomon（桑德蒙）沙发到Expedit（埃克佩迪）书柜</p>
                        </el-col>
                    </el-row>
                </div>
                   <el-row class="main-bottom">
                        <el-col :span="24">
                            <p class="bottom-about">实木家具公司的真正核心是让顾客成为品牌传播者，而非硬性的广告宣传。就像湖南申报一家媒体评价实木家具公司的评语：它不仅仅是一个店，它是一个宗教；它不是在卖家具，它在为你搭起一个梦想。实木家具公司深谙口碑传播之道，并进行着看似原始、笨拙，实则高效、完美的运作。实木家具公司就是这种品牌宗教的教会，分布于湖南省内各县市，实木家具公司的员工就是这种品牌宗教的神职人员，在经过系统的培训和价值熏陶后，他们把一套生活态度、价值格调传达给教民，那些每年1百万多进入实木家具公司的顾客.</p>
                        </el-col>
                    </el-row>
                <div class="about-bottom-img">
                    <ul>
                        <li v-for="(item,index) in aboutImg" :key="index">
                            <div class="bottom-img"><img :src="item" alt=""></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from '../banner/Banner'
import ItemTitle from '../itemTitle/itemTitle.vue'
import SonNavbar from '../navbar/Son-navbar.vue'
export default {
    name:"old",
    data(){
        return{
            banner:{
                img:require("@/assets/img/banner/olderBanner.jpg"),
                title:"品牌故事",
            },
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
            aboutImg:[
                require("@/assets/img/about2.png"),
                require("@/assets/img/about3.png"),
                require("@/assets/img/about4.png"),
            ]
        }
    },
    components:{
        Banner,
        SonNavbar,
        ItemTitle,
    }
}
</script>

<style scoped>
.about-main{
    padding: 60px 0;
}

.about-section{
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    border: 1px solid #ccc;
    line-height:35px;
    transition: all .5s;
    color: #464646;
}

.about-section:hover{
    color: black;
    background: #e4eaec;
    border-color: #e4c17e;
}

.about-img img{
    width: 100%;
}

.about-content{
    padding-left: 5px;
}

.about-content p{
    text-indent: 2rem;
}

.bottom-about{
    color: #464646;
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 12px;
    padding: 20px 0 10px;
    line-height: 1.5;
    border-bottom: 1px #b19898 solid;
}

.about-bottom-img{
    
}

.about-bottom-img >ul{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.about-bottom-img li{
    flex: 1;
    padding: 10px;
    overflow: hidden;
    border: 1px solid #e4eaec;
}

.about-bottom-img li:nth-child(-n+2){
    border-right: 0px;
}

.about-bottom-img li:hover img{
    transform: scale(1.15);
}

.about-bottom-img img{
    width: 100%;
    transition: all .5s;
}

.bottom-img{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>