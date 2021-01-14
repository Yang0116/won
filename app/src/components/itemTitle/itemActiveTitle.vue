<template>
  <h4 class="title">{{title}}</h4>
</template>

<script>
export default {
    name:"itemActiveTitle",
    props:{
        title:String,
    }
}
</script>

<style scoped>
.title{
    width: 100%;
    float: left;
    padding-left: 5px;
    font-weight: 400;
    text-align: left;
    color: #848484;
    line-height: 1.5;
    margin-top: 10px;
}

.title::after{
    content: "";
    display: block;
    width: 0%;
    height: 1px;
    background: #e4c17e;
    margin-top: 20px;
    transition:all .5s;
}



</style>