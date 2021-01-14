<template>
  <footer>
      <div class="center">
        <div class="footer-top">
            <ul>
                <li class="link-title">友情链接</li>
                <li><a href=""><img src="@/assets/img/friendlink1.png" alt=""></a>/</li>
                <li><a href=""><img src="@/assets/img/friendlink2.png" alt=""></a>/</li>
                <li><a href=""><img src="@/assets/img/friendlink3.png" alt=""></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>实木家具公司 版权所有 2016-2018</p>
        </div>

      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer{
    background: #221f1e;
    width: 100%;   
}
.footer-top{
    width: 100%;
    height: 80px;
    color: white;
    line-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 3px;
    border-bottom: 1px solid white;
}

.footer-top img{
    width: 100px;
    vertical-align: middle;
}

.link-title{
    font-weight: 600;
    color: #e4c17e;
}


.footer-bottom{
    padding: 10px 0;
    text-align: center;
    width: 100%;
    line-height: 35px;
    color: #fdfdfd;
    font-size: 12px;
}
</style>