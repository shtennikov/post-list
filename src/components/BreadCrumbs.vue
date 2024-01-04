<template>
    <nav class="breadcrumbs">
        <span v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumbs__item">
            <RouterLink :to="{ name: crumb.routeName }">
                {{ crumb.label }}
            </RouterLink>
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

<style scoped lang="scss">
.breadcrumbs {
    display: flex;
    padding: 10px 0;
    max-width: fit-content;
    font-size: 14px;
    color: $accent-color;

    &__item:not(:last-child):after {
        padding: 0 5px;
        content: '/';
        color: $text-primary-color;
    }
}

.router-link-exact-active {
    color: $text-primary-color;
    cursor: initial;
}
</style>
