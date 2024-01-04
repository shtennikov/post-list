<template>
    <UiContainer>
        <main>
            <UiPageTitle tag="h2">Главная страница</UiPageTitle>
            <UiWelcomeSection>
                <template #title> Список постов </template>
                <template #description>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus voluptas in
                    consectetur accusamus perferendis, ratione vitae! Ex ab provident dolor
                    excepturi nemo. Impedit laudantium earum aspernatur quisquam omnis minima eaque.
                </template>
                <template #link>
                    <UiLink :to="{ name: 'posts' }">Перейти к списку постов</UiLink>
                </template>
            </UiWelcomeSection>
        </main>
    </UiContainer>
</template>

<script setup lang="ts">
import { UiContainer, UiPageTitle, UiWelcomeSection, UiLink } from '../components/ui';
</script>

<style scoped lang="scss"></style>
