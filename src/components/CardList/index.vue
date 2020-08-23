<template>
    <div class="card-list">
        <card-item v-for="item in cartData" :key="item.id" :item="item" />
    </div>
</template>   

<script>
import { mapState } from "vuex";
import CardItem from "./Item";
export default {
    components: {
        CardItem
    },
    computed: {
        ...mapState(['cartData'])
    }
};
</script>

<style scoped lang="scss">
  .cart-list {
    padding-bottom: .44rem;
  }
</style>
