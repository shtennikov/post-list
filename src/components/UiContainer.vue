<template>
    <div class="container">
        <slot />
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
    margin: auto;
    padding: 0 15px;
    max-width: $content-width;
}
</style>
