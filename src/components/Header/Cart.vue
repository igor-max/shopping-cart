<template>
  <router-link to="/cart" v-if="showCart" class="cart">购物车{{ totalCount }}</router-link>
</template>

<script>
import { mapState } from "vuex";
import { setCartDataLocalStorage } from "@/util";
export default {
  props: {
    showCart: Boolean,
  },
  computed: {
    ...mapState(["totalCount", "totalPrice", "cartData"]),
  },
  updated() {
    // localStorage.setItem('totalCount', this.totalCount);
    // localStorage.setItem('totalPrice', this.totalPrice);
    // localStorage.setItem('cartData', JSON.stringify(this.cartData));
    setCartDataLocalStorage({
      totalCount: this.totalCount,
      totalPrice: this.totalPrice,
      cartData: this.cartData,
    });
  },
};
</script>

<style scoped lang="scss">
.cart {
  position: absolute;
  right: 0.15rem;
  top: 0.15rem;
  font-size: 0.14rem;
  color: #fff;
}
</style>
