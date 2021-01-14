<template>
<div>
    <header-sub></header-sub>
    <router-view key="main"></router-view>
    <footer-sub></footer-sub>
</div>
</template>

<script>
import HeaderSub from './components/header/header-sub'
import FooterSub from './components/footer/footer-sub'
import Index from './components/index/index'
export default {
    components:{
        HeaderSub,
        FooterSub,
        Index,
    }
}
</script>

<style>
@import url('./assets/css/normalize.css');
@import url("./assets/other/font-awesome.min.css");
*{
    margin: 0 auto;
    padding: 0;
}

.center{
    max-width: 1200px;
}

li{
    list-style: none;
    float: left;
}

a{
    text-decoration: none;
}

  h1{
    float: left;
    display: inline-block;
    margin: 0;
  }

  header{
      margin:  0;
  }
  ul{
      margin: 0;
      padding: 0;
  }

  .color84{
      color: #848484 !important;
  }

  .son-center{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
.hide{
    display: none;
}
</style>