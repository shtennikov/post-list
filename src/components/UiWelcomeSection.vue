<template>
    <section class="section">
        <h3 class="section__title">
            <slot name="title" />
        </h3>
        <p class="section__description">
            <slot name="description"></slot>
        </p>
        <slot name="link" />
    </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;

    padding: 55px 40px;
    max-width: 469px;
    border-radius: 60px;
    background-color: $dark-background;

    &__title {
        font-size: 48px;
        color: $text-light-color;
    }

    &__description {
        color: $text-primary-color;
    }
}
</style>
