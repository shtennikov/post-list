<template>
    <component :is="tag" class="page-title">
        <slot>{{ title }}</slot>
    </component>
</template>

<script setup lang="ts">
defineProps<{ tag: string; title?: string }>();
</script>

<style scoped lang="scss">
.page-title {
    margin-bottom: 20px;
    text-align: center;
}
</style>
