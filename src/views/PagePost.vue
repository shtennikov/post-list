<template>
    <div>Пост № {{ postId }}</div>
</template>

<script setup lang="ts">
defineProps<{ postId: number }>();
</script>

<style scoped lang="scss"></style>
