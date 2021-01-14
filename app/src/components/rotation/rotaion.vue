<template>
  <!-- 轮播图 -->
<div @mouseover="stop"  @mouseleave="play">
    <transition-group
    tag="ul"
    class='rotaion-ul'
    name="fade">
        <li v-for="(item,index) in rotainList" v-if="currentindex==index" :key="item.id">
            <img :src="item.url" alt="">
        </li>
    </transition-group>
    <button class="left-btn" @click="leftBtn"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
    <button class="right-btn" @click="rightBtn"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
</div>
</template>

<script>
export default {
    name:"rotaion",
    props:{
        rotainList:Array,//轮播图列表
    },
    data(){
        return {
            currentindex:0,//当前索引
            timer:null,
        };
    },
    methods:{
        run(){
            //轮播图运动函数
            if(this.currentindex<this.rotainList.length-1){
                this.currentindex++;
            }else{
                this.currentindex=0;
            }
        },
        play(){
            //启动运动函数
            this.timer = setInterval(this.run,5000);
        },
        stop(){
            //暂停函数
            clearInterval(this.timer);
        },
        leftBtn(){
            //左按钮
             if(this.currentindex<=0){
                this.currentindex = this.rotainList.length-1;
            }else{
                this.currentindex--;
            }
            
        },
        rightBtn(){
            //右按钮
            if (this.currentindex>=this.rotainList.length-1) {
                this.currentindex=0;
            } else {
                this.currentindex++;
            }
        }
    },
    created(){
       
        this.play();
    }
}
</script>

<style scoped>
.rotaion-ul{
    width: 100%;
    height: 531px;
    position: relative;
    /* overflow: hidden; */
}

.rotaion-ul img{
    width: 100%;
    display: block;
}

.rotaion-ul li{
    position: absolute;
    top: 0;
    padding: 0;
    transition: all .8s;
}
/* 左右按钮 */
.left-btn,.right-btn{
    width: 50px;
    height: 50px;
    background: black;
    color: white;
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    outline: none;
    opacity: 0.5;
    z-index: 10;
}

.left-btn{
    left: 0;
}

.right-btn{
    right: 0;
}

.left-btn:hover,.right-btn:hover{
    opacity: 1;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
    opacity: 0
}
</style>