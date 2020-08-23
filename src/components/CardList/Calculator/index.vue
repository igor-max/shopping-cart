<template>
    <div class="calculator">
        <button @click="setCartItem(id, price, 'minus')">-</button>
        <input type="text" :value="totalCount" readonly />
        <button @click="setCartItem(id, price, 'plus')">+</button>
    </div>
</template>

<script>
import {mapState, mapActions} from "vuex";
export default {
    props: {
        totalCount: Number,
        id: Number,
        price: Number
    },
    methods: {
        ...mapActions(['setTotal', 'setCartData']),
        setCartItem(id, price, type) {
            this.setTotal({id, price, type});
            this.setCartData({
                id,
                price,
                type
            });
        }
    }
};
</script>

<style scoped lang="scss">
.calculator {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    button {
      width: .2rem;
      height: .2rem;
      border: .01rem solid #999;
      border-radius: 50%;
      font-size: .14rem;
      line-height: .08rem;
      background-color: #fff;
    }
    input {
      width: .2rem;
      height: .2rem;
      font-size: .12rem;
      border: .01rem solid #999;
      text-align: center;
      margin: 0 .1rem 0;
    }
  }
</style>
