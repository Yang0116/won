<template>
  <div class="banner" :style="style">
      <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
    name:"banner",
    props:{
        img:String,
        title:String,
    },
    computed:{
        style(){
            return 'background:url('+this.img+')';
        }
    }
}
</script>

<style scoped>
.banner{
    width: 100%;
    height: 260px;
    background-size:100% 270px !important;
    overflow: hidden;
    position: relative;
}

h2{
    position: absolute;
    top: 50%;
    left: 50%;
    color: white;
    font-size: 40px;
    font-weight: 400;
    transform: translate(-50%,-50%);
}
</style>