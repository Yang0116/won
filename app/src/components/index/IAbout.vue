<template>
    <div class="about">
        <div class="center">
            <el-row>
                <el-col :span="8">
                    <img src="@/assets/img/about1.jpg" width="349" alt="" srcset="">
                </el-col>
                <el-col :span="16">
                    <div class="right">
                    <h4>关于我们</h4>
                    <p class="english color84">About me</p>
                    <p class="content color84">实木家具公司于1999年创建于中国长沙，这十多年来一直致力于实木家具的生产的销售，销售主要包括实木座椅/沙发系列、、卧室实木床柜系列、家具实木凳椅产品系列等约100个产品。为了让更多的顾客成为宜家的品牌布道者，实木家具公司的一个重要策略就是销售梦想而不是产品。为了做到这一点，实木家具公司不仅提供广泛、设计精美、实用、低价的产品</p>
                    <bottom-btn class="accrows-btn color84">
                        <i class="fa fa-long-arrow-right" aria-hidden="true" slot="one"></i>
                        <i class="fa fa-long-arrow-right" aria-hidden="true" slot="two"></i>
                    </bottom-btn>      
                </div>
                </el-col>
            </el-row>

        </div>
    </div>
 
</template>

<script>
import bottomBtn from '../pagebtn/bottom-btn.vue'
export default {
  components: { bottomBtn },
    name:"iabout",
}
</script>

<style scoped>
.about{
    background: #f0f0f0;
    padding: 70px 0;
}

h4{
    font-size: 24px;
    font-weight: 400;
}

.english{
    padding: 20px 0;
}

.content{
    line-height: 1.5;
}

.accrows-btn{
    width: 150px;
    font-size: 22px;
    margin-top: 10px;
}
</style>