<template>
    <header class="header">
        <UiContainer>
            <UiNavBar />
        </UiContainer>
    </header>
</template>

<script setup lang="ts">
import { UiContainer, UiNavBar } from './index';
</script>

<style scoped lang="scss">
.header {
    padding: 20px 0;
}
</style>
