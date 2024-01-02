<template>
    <nav class="nav">
        <ul>
            <li class="nav__link">
                <RouterLink :to="{ name: 'index' }">Главная</RouterLink>
            </li>
            <li class="nav__link">
                <RouterLink :to="{ name: 'posts' }">Список постов</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
