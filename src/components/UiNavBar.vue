<template>
    <nav class="nav">
        <ul class="nav-list">
            <li class="nav-item">
                <RouterLink :to="{ name: 'index' }">
                    <h1 class="logo">POSTS</h1>
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.nav-list {
    display: flex;
}

.logo {
    font-size: 1.2em;
    padding: 10px 0;
    text-transform: uppercase;
    color: $accent-color;
}
</style>
