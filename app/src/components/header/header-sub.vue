<template>
  <div>
      <header id="header" :class="{'black-background':this.height>100 || !isIndex}">
        <div class="center">
            <h1>
                <router-link to="/index">
                  <img class="logo" src="@/assets/img/logo.png" title="实木家具"/>
                </router-link>
            </h1>
            <ul class="frist-ul">
                <li><router-link to="/index">首页</router-link></li>
                <li><router-link to="/old">品牌故事</router-link></li>
                <li><router-link to="/product">产品中心</router-link></li>
                <li><router-link to="/news">行业新闻</router-link></li>
                <li class="nav-add">
                  <router-link to="/add">招商加盟&nbsp;&nbsp;</router-link>
                  <ul class="nav-second">
                    <li><router-link to="/add/have">招商条件</router-link></li>
                    <li><router-link to="/add/good">招商优势</router-link></li>
                  </ul>
                </li>
                <li><router-link to="/contact">联系我们</router-link></li>
            </ul>
        </div>
      </header>
  </div>
</template>

<script>

export default {
  name:"header-sub",
  data(){
    return{
      height:0,
      isIndex:false,
    }
  },
  methods:{
      getHeight(){
        this.height = window.pageYOffset;
      }
  },
  mounted(){
    window.addEventListener("scroll",this.getHeight)
  },
  watch:{
   $route(to,from){
      to.path.indexOf('index') != -1?this.isIndex = true:this.isIndex = false
    }
  },

}
</script>

<style scoped>
  #header{
    width: 100%;
    height: 50px;
    line-height: 60px;
    padding: 10px 0;
    z-index: 20;
    background: transparent;
    transition: all .5s;
    position: fixed;

  }

  .black-background{
    background: #464646 !important;
  }
  
  .logo{
    height:50px;
  }

  .frist-ul{
    float: right;
    line-height: 60px;
    height: 100%;
  }

  .frist-ul>li{
    position: relative;
    padding: 0 10px;
  }

  .frist-ul a{
    color: white;
  }

  .frist-ul>li>a{ 
    overflow: hidden;
    display: block;
    position: relative;
  }

  .frist-ul>li>a::before{
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background: #e4c17e;
    position: absolute;
    left: -100%;
  }

  .frist-ul>li>a:hover::before{
    left: 0%;
    transition: all .8s;
  }

  .nav-add::after{
    content: "";
    display: block;
    position:absolute;
    right: 3px;
    top: 25px;
    width: 7px;
    height: 7px;
    border-top: 1px solid white;
    border-right: 1px solid white;
    transform: rotate(-45deg);
    transition:all .5s;
  }

  .nav-add:hover::after{
    transform: rotate(135deg);
  }

.nav-second{
  width: 100%;
  background: black;
  position: absolute;
  box-shadow: 0 2px 7px;
  display: none;
  z-index: 999;
}  

.nav-second li{
  width: 100%;
  height: 30px;
  line-height: 30px;
  color: white;
  text-align: center;
  padding: 5px 0;
  top: 50px;
}

.nav-add:hover .nav-second{
  display: block;
}
</style>