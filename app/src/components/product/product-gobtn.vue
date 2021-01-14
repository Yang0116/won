<template>
  <div>
      <div class="gobtn" @click="clickEvent(btnMessage)">{{btnMessage}}</div>
  </div>
</template>

<script>
export default {
    name:"product-gobtn",
    props:{
        btnMessage:String,
        clickEvent:Function,
    }
}
</script>

<style scoped>
.gobtn{
    border: #d2d2d2 1px solid;
    color: #76838f;
    padding: 8px 30px;
    margin-left: 5px;
    font-size: 12px;
}
</style>