<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const layoutComponent = computed(() => route.meta.layout)
</script>

<template>
    <component :is="layoutComponent">
        <router-view />
    </component>
</template>
