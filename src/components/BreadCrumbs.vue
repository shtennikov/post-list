<!-- Breadcrumbs.vue -->
<template>
    <nav class="breadcrumbs">
        <span v-for="(crumb, index) in breadcrumbs" :key="index">
            &gt;
            <RouterLink :to="{ name: crumb.routeName }">{{ crumb.label }}</RouterLink>
        </span>
    </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import type { Breadcrumbs } from '../types/Breadcrumbs.interface';

const route = useRoute();

const breadcrumbs = computed(() => {
    const crumbsFromRoute = route.meta.breadcrumbs as Breadcrumbs[];
    const crumbs = crumbsFromRoute?.map((c) => {
        let label;

        if (c.routeName === 'post') {
            label = `${c.label} №${route.params.postId}`;
        } else {
            label = c.label;
        }

        return {
            label,
            routeName: c.routeName,
        };
    });

    return crumbs;
});
</script>

<style scoped>
.breadcrumbs {
    font-size: 14px;
    margin: 10px 0;
}

.router-link-exact-active {
    color: #333;
    text-decoration: none;
    cursor: initial;
}
</style>
