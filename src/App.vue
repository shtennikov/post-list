<template>
    <BreadCrumbs />
    <RouterView>
        <template #default="{ Component }">
            <KeepAlive v-if="Component" :max="2" exclude="PagePost">
                <component :is="Component" />
            </KeepAlive>
        </template>
    </RouterView>
</template>

<script setup lang="ts">
import BreadCrumbs from './components/BreadCrumbs.vue';
</script>

<style lang="scss">
body {
    background-color: $main-background;
}
</style>
