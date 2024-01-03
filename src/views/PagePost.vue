<template>
    <main>Пост № {{ postId }}</main>
</template>

<script setup lang="ts">
defineProps<{ postId: number }>();
</script>

<style scoped lang="scss"></style>
