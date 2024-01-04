<template>
    <UiHeader />
    <UiContainer v-if="route.meta.breadcrumbs">
        <BreadCrumbs />
    </UiContainer>
    <RouterView>
        <template #default="{ Component }">
            <KeepAlive v-if="Component" :max="2" exclude="PagePost">
                <component :is="Component" />
            </KeepAlive>
        </template>
    </RouterView>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import BreadCrumbs from './components/BreadCrumbs.vue';
import UiHeader from './components/UiHeader.vue';
import UiContainer from './components/UiContainer.vue';

const route = useRoute();
</script>

<style lang="scss">
body {
    background-color: $main-background;
}
</style>
