<script setup>

</script>

<template>
    <header class="row mx-auto p-4 text-black flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <div>
            <h1 class="text-3xl ">MYBlog.uz</h1>
            <h2 class="text-sm whitespace-nowrap">G'oyalaringiz bilan bo'lishing</h2>
        </div>

        <ul class="text-xl flex flex-col gap-3 md:flex-row md:space-x-6 md:gap-0">
            <li>
                <router-link to="/" class="cursor-pointer hover:text-gray-500">Bosh sahifa</router-link>
            </li>
            <li class="cursor-pointer hover:text-gray-500">Maqolalar</li>
            <li class="cursor-pointer hover:text-gray-500">Shaxsiy kabinet</li>
            <li class="cursor-pointer hover:text-gray-500">Kirish</li>
            <li class="cursor-pointer hover:text-gray-500">Chiqish</li>
        </ul>
    </header>
</template>

<style scoped>
.row {
    margin: 20px;
    background-color: rgba(128, 128, 128, 0.5);
    color: black;
    border-radius: 10px;
    font-family: 'Inter', sans-serif;
}
</style>
