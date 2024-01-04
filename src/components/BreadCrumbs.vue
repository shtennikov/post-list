<template>
    <nav class="breadcrumbs">
        <span v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumbs__item">
            <RouterLink :to="crumb.to">
                {{ crumb.label }}
            </RouterLink>
        </span>
    </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import type { Breadcrumb } from '../types/Breadcrumbs.interface';

const route = useRoute();

const breadcrumbs = computed(() => {
    const currentRouteBreadcrumbs = (route.meta.breadcrumbs as Breadcrumb[]) || Function;

    if (currentRouteBreadcrumbs instanceof Function) {
        return currentRouteBreadcrumbs(route);
    }

    return currentRouteBreadcrumbs;
});
</script>

<style scoped lang="scss">
.breadcrumbs {
    display: flex;
    padding: 10px 0;
    margin-bottom: 20px;
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
