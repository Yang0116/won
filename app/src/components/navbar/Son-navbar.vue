<template>
  <div class="son-navbar">
      <div class="center">
        <ul class="son-ul son-center">
            <li v-for="(item,index) in navbarArray" :key="index" :class="{haveson:item.isSon==true}">
                <a :href="item.href">{{ item.text }}</a>
                <ul v-if="item.isSon" class="son-second-ul">
                    <li v-for="(son,Sonindex) in item.sonList" :key="navbarArrayLength+Sonindex">
                        <a :href="son.href">{{ son.text }}</a>
                    </li>
                </ul>
            </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:"son-navbar",
    props:{
        navbarArray:Array,
    },
    computed:{
        navbarArrayLength:function(){
            return this.navbarArray.length;
        }
    }
}
</script>

<style scoped>
.son-navbar{
    width: 100%;
    height: 40px;
    line-height: 40px;
    position: relative;
}

.son-navbar a{
    color: #90939b;
}

.son-ul>li{
    position: relative;
    padding:0 15px;
}

.son-second-ul{
    position: absolute;
    width: 180%;
    right: 0;
    background: white;
    box-shadow: 0 3px 12px rgba(0,0,0,.05);
    border: 1px solid #e4eaec;
    display: none;
    transition: all .5s;
}

.son-second-ul li{
    width: 100%;
    text-align: center;
}
.son-second-ul li:hover{
    background-color: #a0a0a0;
}

.son-second-ul li:hover a{
    color: #FFF;
}

.haveson::after{
    content: "";
    display: block;
    width: 5px;
    height: 5px;
    border-top: 1px solid #666;
    border-right: 1px solid #666;
    transform:rotate(-45deg) translateY(-50%);
    position: absolute;
    right: 0;
    top: 50%;
    transition: all .5s;
}

.haveson:hover::after{
    transform:translateY(-50%) rotate(135deg);
}

.haveson:hover .son-second-ul{
    display: block;
}


</style>