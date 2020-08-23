<template>
  <div class="cart">
    <header-page :showBack="true" />
    <card-list />
    <total-panel />
  </div>
</template>

<script>
import HeaderPage from "@/components/Header";
import CardList from "@/components/CardList";
import TotalPanel from "@/components/TotalPanel";
import {mapActions} from "vuex";
export default {
  components: {
    HeaderPage,
    CardList,
    TotalPanel,
  },
  methods: {
    ...mapActions(['setData'])
  },
  created() {
    this.setData(); // 加载首页时获取localstorage的数据并赋值到store中
  },
};
</script>

<style scoped lang="scss">
.cart {
  padding-top: 0.44rem;
}
</style>
