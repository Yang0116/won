<template>
  <div>
      <h3>{{bigTitle}}</h3>
      <p class="small">{{smallTitle}}</p>
  </div>
</template>

<script>
export default {
    name:'itemTitle',
    props:{
        bigTitle:String,
        smallTitle:String,
    }
}
</script>

<style scoped>
h3{
    color: #444;
    text-align: center;
    font-weight: 400;
}

.small{
    text-align: center;
    margin-top: 10px;
    color: #848484;
}

.small::before,.small::after{
    content: "";
    display: inline-block;
    width: 25px;
    height: 1px;
    background: #848484;
    margin: 3px 5px;
}
</style>