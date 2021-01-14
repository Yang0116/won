<template>
  <div class="prodectImg-show">
      <div class="img-show">
        <img :src="img" width="100%" alt="">
        <div class="black"></div>
      </div>
  </div>
</template>

<script>
export default {
    name:"prodectImg-show",
    props:{
        img:String,
    },
    data(){
        return {

        }
    }
}
</script>

<style scoped>

.img-show{
    width: 100%;
    height: 165px;
    position: relative;
    overflow: hidden;
}

.img-show img{
    transition: all .5s;
}

.black{
    width: 100%;
    height: 100%;
    background: black;
    position: absolute;
    top: -100%;
    left: 0;
    transition: all .5s;
    opacity: .5;
}

.black::before{
    content: "+";
    width: 45px;
    height: 45px;
    border-radius: 50%;
    color: white;
    border: solid white 1px;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    text-align: center;
    line-height: 45px;
    transform: translate(-50%,-50%);
}

.black-display{
    top: 0;
}
</style>