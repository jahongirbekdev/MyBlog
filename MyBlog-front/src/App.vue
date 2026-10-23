<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheArticle from "@/pages/TheArticle.vue";
import {useRoute} from "vue-router";

const route = useRoute()
</script>

<template>
    <TheHeader />
    <TheArticle v-if="route.path === '/'" />
    <router-view />
</template>

<style scoped>

</style>
