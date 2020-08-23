<template>
  <div class="phone-item">
    <div class="img-wrap">
      <img :src="item.imgSrc" :alt="item.phone_name" />
    </div>
    <div class="info-wrap">
      <p class="phone-name">{{ item.phone_name }}</p>
      <p class="slogan">{{ item.slogan }}</p>
      <p class="price">￥{{ item.default_price }}</p>
      <p class="button">
        <button @click="addCart(item, 'plus')">加入购物车</button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {
    item: Object,
  },
  methods: {
    ...mapActions(["setTotal", 'setCartData']),
    addCart(item, type) {
      this.setTotal({
        price: item.default_price,
        type,
      });
      this.setCartData({   // set cart data
          id: Number(item.id),  
          img: item.imgSrc,
          name: item.phone_name,     
          price: Number(item.default_price),     
          slogan: item.slogan,  
          type
      });
    }
  },
};
</script>

<style scoped lang="scss">
.phone-item {
  position: relative;
  display: flex;
  flex-direction: row;
  height: 1.2rem;
  border-bottom: 1px solid #ddd;
  background-color: #fff;

  .img-wrap {
    width: 1.2rem;
    height: 1.2rem;
    border-right: 1px solid #ddd;
  }

  .info-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1.2rem;
    padding: 0.1rem 0.1rem 0.1rem 1.3rem;
    box-sizing: border-box;

    .phone-name {
      color: #000;
      font-size: 0.16rem;
    }

    .slogan {
      margin-top: 0.15rem;
      color: #999;
      font-size: 0.12rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .price {
      margin-top: 0.15rem;
      color: #ff6704;
      font-size: 0.14rem;
    }

    .button {
      margin-top: 0.05rem;

      button {
        float: right;
        width: 0.8rem;
        height: 0.2rem;
        font-size: 0.12rem;
        border: 1px solid #ff6704;
        color: #ff6704;
        border-radius: 0.02rem;
        background-color: #fff;
      }
    }
  }
}
</style>
