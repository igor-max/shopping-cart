<template>
  <div class="home">
    <header-page :showCart="true" />
    <phone-list />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import HeaderPage from "@/components/Header";
import PhoneList from "@/components/PhoneList";

export default {
  methods: {
    ...mapActions(["setData"]),
  },
  components: {
    HeaderPage,
    PhoneList
  },
  created() {
    this.setData();   // 加载首页时获取localstorage的数据并赋值到store中
  },
};
</script>
