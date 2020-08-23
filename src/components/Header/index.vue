<template>
  <header class="header">
    <back-comp :showBack="showBack" />
    <h1>小米手机</h1>
    <cart-comp :showCart="showCart" />
  </header>
</template>

<script>
import CartComp from "./Cart";
import BackComp from "./Back";
export default {
  props: {
      showBack: Boolean,
      showCart: Boolean
  },
  components: {
    CartComp,
    BackComp,
  },
};
</script>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: .44rem;
    background-color: #FF6704;
    color: #fff;
    font-size: .18rem;
}
</style>
