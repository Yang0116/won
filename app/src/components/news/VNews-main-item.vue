<template>
  <div class="vnews-main-item">
      <el-row >
          <el-col :span="5">
            <img :src="img" alt="">
          </el-col>
          <el-col :span="19" class="item-right">
            <h4>{{title}}</h4>
            <p class="content">{{content}}</p>
            <div class="item-bottom">
                <span>{{ time }}</span>
                <span>
                    <i class="fa fa-eye eye"></i>
                    {{ count }}
                </span>
                <span>{{ user }}</span>
            </div>
          </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
    name:"vnews-main-item",
    props:{
        img:String,
        title:String,
        content:String,
        time:String,
        count:Number,
        user:String,
    }
}
</script>

<style scoped>
.vnews-main-item{
    background: white;
    padding: 20px;
}

.vnews-main-item:hover h4{
    color: #e4c17e;
}


img{
    width: 100%;
}

.item-right{
    padding-left: 10px;
}

h4{
    font-size: 22px;
    margin-bottom: 23px;
    font-weight: 400;
    color: #464646;
    transition: all .5s;
}
.content{
    color: #6a6a6a;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 18px;
    white-space: nowrap;
}

.item-bottom{
    color: #a3afb7;
    font-size: 12px;
}

.item-bottom span{
    display: inline-block;
    padding: 5px;
}

.eye{
    font-size: 14px;
}
</style>