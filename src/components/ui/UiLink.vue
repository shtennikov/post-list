<template>
    <RouterLink :to="to" class="link">
        <slot />
    </RouterLink>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

defineProps<{ to: RouteLocationRaw }>();
</script>

<style scoped lang="scss">
.link {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px;
    width: fit-content;
    height: fit-content;
    border: 1.5px solid transparent;
    border-radius: 15px 50px;
    background-color: $accent-color;
    color: $text-light-color;

    &:hover {
        border-color: $accent-color;
        background-color: $main-background;
        color: $accent-color;
    }
}
</style>
