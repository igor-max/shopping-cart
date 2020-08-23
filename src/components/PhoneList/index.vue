<template>
  <div class="phone-list">
    <phone-item v-for="item in phoneData" :key="item.id" :item="item" />
  </div>
</template>

<script>
import PhoneItem from "./Item";
import { mapState } from "vuex";
export default {
  components: {
    PhoneItem,
  },
  computed: {
      ...mapState(['phoneData'])
  }
};
</script>

<style scoped lang="scss">
  .phone-list {
    padding-top: .44rem;
  }
</style>
