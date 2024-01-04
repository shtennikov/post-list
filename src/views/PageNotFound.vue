<template>
    <UiContainer>
        <div class="not-found">
            <h1 class="not-found__title">404</h1>
            <p class="not-found__message">Страница не найдена</p>
            <UiLink :to="{ name: 'index' }">На главную</UiLink>
        </div>
    </UiContainer>
</template>

<script setup lang="ts">
import { UiContainer, UiLink } from '../components/ui';
</script>

<style lang="scss">
.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &__title {
        font-size: 6em;
        color: $text-title-color;
    }

    &__message {
        font-size: 1.5em;
        color: $text-primary-color;
    }
}
</style>
