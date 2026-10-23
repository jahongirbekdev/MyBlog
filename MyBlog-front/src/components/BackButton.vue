<script setup>
const goBack = () => {
    window.history.back();
}
</script>

<template>
    <button class="back-button" @click="goBack">
        <img src="@/assets/icons/back.svg" alt="Chiqish" />
    </button>
</template>

<style scoped>
.back-button {
    width: 40px;
    height: 40px;
    border-radius: 100px;
    background: rgba(244, 244, 244, 1);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.back-button img {
    width: 16px;
    height: 16px;
}
</style>