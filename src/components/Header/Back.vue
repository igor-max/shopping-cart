<template>
    <router-link to="/" v-if="showBack" class="back">首页</router-link>
</template>

<script>
export default {
   props: {
       showBack: Boolean
   }
};
</script>

<style scoped lang="scss">
.back {
    position: absolute;
    top: .15rem;
    left: .15rem;
    font-size: .14rem;
    color: #fff;
}
</style>
