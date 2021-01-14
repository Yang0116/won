<template>
  <div class="product-show center">
    <!-- 商品展示模块 -->
    <item-title bigTitle="产品展示" smallTitle="produce"></item-title>
    <ul class="gobtn-ul">
      <li v-for="(item, index) in this.productGobtnText" :key="index">
        <product-gobtn :btnMessage="item" :clickEvent="categoryBtn"></product-gobtn>
      </li>
    </ul>
    <!-- 每个商品板块 -->
    <div class="product-contain">
      <i-prodect-item
        v-for="(item, index) in this.showProductList"
        :key="index"
        :img="item.img"
        :title="item.title"
      ></i-prodect-item>
    </div>
    <!-- 底部翻页模块2 -->
    <div class="product-bottom">
      <div class="bottom-local">
        <div @click="prebtn" :class="{ hide: leftIsHide }">
          <bottom-btn>
            <i class="fa fa-long-arrow-left" aria-hidden="true" slot="one"></i>
            <i class="fa fa-long-arrow-left" aria-hidden="true" slot="two"></i>
          </bottom-btn>
        </div>
        <div @click="nextbtn" :class="{ hide: rightIsHide }">
          <bottom-btn>
            <i class="fa fa-long-arrow-right" aria-hidden="true" slot="one"></i>
            <i class="fa fa-long-arrow-right" aria-hidden="true" slot="two"></i>
          </bottom-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemTitle from "../itemTitle/itemTitle.vue"; //标题
import BottomBtn from "../pagebtn/bottom-btn.vue"; //底部按钮
import IProdectItem from "../product/IProdect-item.vue"; //商品展示板块
import ProductGobtn from "../product/product-gobtn.vue"; //导航按钮
export default {
  name: "IProdect-show",
  data() {
    return {
      productGobtnText: ["全部", "床品", "沙发", "椅凳", "柜架", "桌子"],
      //后端传递商品列表
      productList: [],
      showProductList: [],
      // 表示当前数据第几个
      productIndex: 0,
      //表示当前页数
      thisPage: 1,
      //右按钮是否禁用
      rightHide: false,
      
    };
  },
  computed: {
    pageCount() {
      //分页总页数
      return Math.ceil(this.productListLength / 8);
    },
    productListLength() {
      //全部商品长度
      return this.productList.length;
    },
    leftIsHide(){
      //左按钮是否禁用
      return this.thisPage <= 1;
    },
    rightIsHide(){
      //右按钮是否禁用
      return this.thisPage == this.pageCount;
    }
  },
  components: {
    ItemTitle,
    ProductGobtn,
    IProdectItem,
    BottomBtn,
  },
  methods: {
    //基础数据全部制空
    setnull(){
      this.productList=[];
      this.showProductList=[];
      // 表示当前数据第几个
      this.productIndex= 0;
      //表示当前页数
      this.thisPage= 1;
      //右按钮是否禁用
      this.rightHide= false;
    },
    //获取商品
    getProduct(category) {
      this.$axios.get("/index/getProduct?category="+category).then((data) => {
        this.productList = data.data;
        this.showAllProduct();
      });
    },
    //显示全部商品
    showAllProduct() {
      this.productIndex = 0;
      this.showProductList = this.productList.slice(
        this.productIndex,
        this.productIndex + 8
      );
    },
    // 下一页按钮 0 8 9 16
    nextbtn() {
      this.productIndex += 8;
      this.thisPage++;
      this.showProductList = this.productList.slice(
        this.productIndex,
        this.productIndex + 8
      );
      if (this.thisPage == this.pageCount) {
        this.rightHide = true;
      }
    },
    // 上一页按钮 0 8 9 16
    prebtn() {
      if (this.thisPage == this.pageCount) {
        this.leftHide = true;
      }
      this.productIndex -= 8;
      this.thisPage--;
      this.showProductList = this.productList.slice(
        this.productIndex,
        this.productIndex + 8
      );
      
    },
    //分类按钮事件
    categoryBtn(category){
      this.setnull();
      this.getProduct(category);
    }
  },
  mounted() {
    this.getProduct("all");
  },
};
</script>

<style scoped>
.gobtn-ul {
  text-align: center;
  padding: 10px 0;
  width: 46%;
  height: 35px;
  margin: 5px auto;
  display: flex;
  justify-content: space-around;
}
.product-show {
  text-align: center;
  width: 100%;
  background: white;
  text-align: center;
  clear: both;
  padding: 55px 0;
}

.product-contain {
  width: 100%;
  height: 434px;
  clear: both;
  overflow: hidden;
}

.product-bottom {
  width: 100%;
  height: 32px;
  float: left;
  margin-top: 10px;
  position: relative;
}

.bottom-local {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.bottom-local > * {
  float: left;
}
</style>