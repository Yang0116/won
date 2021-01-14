<template>
  <div class="vproduct">
    <banner :img="bannerimg" title="产品中心"></banner>
    <v-product-navbar :navbarGo="navbarGo"></v-product-navbar>
    <div class="vproduct-main">
      <div class="center">
        <ul>
          <li
            class="product-item"
            v-for="(item, index) in showProductList"
            :key="index">
            <prodect-img-show :img="item.img"></prodect-img-show>
            <h4>{{ item.context }}</h4>
          </li>
        </ul>
        <div class="bottom-btn">
          <ul>
            <li
              @click="btnClick(index)"
              v-for="index of pageCount"
              :key="index"
              :class="{ active: index == thisPage }"
            >
              {{ index }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../banner/Banner.vue";
import vProductNavbar from "../product/VProduct-navbar";
import ProdectImgShow from "./prodectImg-show.vue";
export default {
  name: "vproduct",
  data() {
    return {
      navbarGo: {
        全部: "#",
        床品: "#",
        沙发: "#",
        椅凳: "#",
        柜架: "#",
        桌子: "#",
      },
       //后端传递商品列表
      productList: [],
      showProductList: [],
      // 表示当前数据第几个
      productIndex: 0,
      //表示当前页数
      thisPage: 1,
    };
  },
  methods: {
    btnClick(index) {
      this.thisPage = index;
      this.showProductList = this.productList.slice(
          //0 6 7 12
        (index-1) * 6,
        index * 6
      );
    },
    //基础数据全部制空
    setnull() {
      this.productList = [];
      this.showProductList = [];
      // 表示当前数据第几个
      this.productIndex = 0;
      //表示当前页数
      this.thisPage = 1;
      //右按钮是否禁用
      this.rightHide = false;
    },
    //显示全部商品
    showAllProduct() {
      this.productIndex = 0;
      this.showProductList = this.productList.slice(
        this.productIndex,
        this.productIndex + 6
      );
    },
    //获取商品
    getProduct(category) {
      this.$axios.get("/index/getProduct?category=" + category).then((data) => {
        this.productList = data.data;
        this.showAllProduct();
      });
    },
     //分类按钮事件
    categoryBtn(category){
      this.setnull();
      this.getProduct(category);
    }
  },
  computed: {
    bannerimg() {
      return require("@/assets/img/banner/productBanner.jpg");
    },
    pageCount() {
      //分页总页数
      return Math.ceil(this.productListLength / 8);
    },
    productListLength() {
      //全部商品长度
      return this.productList.length;
    },
  },
  components: { Banner, vProductNavbar, ProdectImgShow },
  created(){
      this.categoryBtn("全部");
  }
};
</script>

<style scoped>
.vproduct-main {
  overflow: hidden;
  background: #f2f2f2;
  width: 100%;
  padding: 60px 0;
}

.product-item {
  width: 350px;
  height: 295px;
  background: white;
  padding: 10px;
  text-align: center;
  float: left;
  margin: 15px;
}

.product-item >>> .img-show {
  height: 250px;
}

.product-item:hover >>> .black {
  top: 0;
}

.product-item h4 {
  widows: 100%;
  padding: 20px 0;
  color: #464646;
  font-weight: 400;
  text-align: left;
}

.product-item:hover h4 {
  color: #e4c17e;
}

.bottom-btn {
  clear: both;
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-top: 10px;
  text-align: center;
  position: relative;
}

.bottom-btn ul {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%，-50%);
}

.bottom-btn ul li {
  width: 40px;
  margin: 5px;
  height: 40px;
  border: 1px solid #cccccc;
  background: white;
}

.bottom-btn ul li:hover {
  border-color: #e4c17e;
  color: #e4c17e;
}

.active {
  border-color: #e4c17e !important;
  color: #e4c17e !important;
}
</style> 