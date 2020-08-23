<template>
    <div class=total-panel>
        <p class="total-price">总价： ￥{{ totalPrice }}</p>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { setCartDataLocalStorage } from "@/util";
export default {
    computed: {
        ...mapState(['totalCount', 'totalPrice', 'cartData'])
    },
    updated() {
        // localStorage.setItem('totalCount', this.totalCount);
        // localStorage.setItem('totalPrice', this.totalPrice);
        // localStorage.setItem('cartData', JSON.stringify(this.cartData));
        setCartDataLocalStorage({
            totalCount: this.totalCount,
            totalPrice: this.totalPrice,
            cartData: this.cartData
        });
    }
};
</script>

<style scoped lang="scss">
.total-panel {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: .44rem;
    padding-right: .15rem;
    box-sizing: border-box;
    background-color: #fff;
    border-top: 1px solid #ddd;

    .total-price {
      float: right;
      line-height: .44rem;
      font-size: .18rem;
      color: #f50000;
    }
  }
</style>
