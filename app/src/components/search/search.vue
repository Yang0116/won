<template>
   <div class="search">
        <input type="seach" :style="inputWidth" :placeholder="text">
        <i class="search-icon fa fa-search"></i>
    </div>
</template>

<script>
export default {
    name:"search",
    props:{
        text:String,
        width:{
            type:String,
            default:"70%"
        },
    },
    computed:{
        inputWidth(){
            return "width:" + this.width;
        }
    }
}
</script>

<style scoped>
.search{
    position: relative;
    width: 90%;
    height: 30px;
    border: solid #90939b 1px;
    border-radius: 20px;
    overflow: hidden;
}

.search input{
    float: left;
    border: none;
    line-height: 30px;
    padding-left: 10px;
    outline: none;
}

.search-icon{
    position: absolute;
    color: #90939b;
    right: 10%;
    line-height: 30px;
}
</style>