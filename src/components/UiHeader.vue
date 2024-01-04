<template>
    <header class="header">
        <UiContainer>
            <UiNavBar />
        </UiContainer>
    </header>
</template>

<script setup lang="ts">
import UiContainer from './UiContainer.vue';
import UiNavBar from './UiNavBar.vue';
</script>

<style scoped lang="scss">
.header {
    padding: 20px 100px;
}
</style>
