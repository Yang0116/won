<template>
    <div class="btn">
      <div class="one"><slot name="one"></slot></div>
      <div class="two"><slot name="two"></slot></div>
    </div>
</template>

<script>
export default {
    name:"bottom-btn"
}
</script>

<style scoped>

.btn{
  color: #333;
  width: 50px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: #dfdfdf 1px solid;
  float: left;
  margin: 0 10px;
  position: relative;
  overflow: hidden;
}

.btn i{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  transition: all .5s;
}

.btn .one i{
  top: -50%;
}

.btn:hover .one>i{
  top: 50%;
}
.btn:hover .two>i{
  top: 150%;
}

</style>