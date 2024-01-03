<template>
    <BreadCrumbs />
    <RouterView>
        <template #default="{ Component }">
            <KeepAlive v-if="Component" :max="3">
                <component :is="Component" />
            </KeepAlive>
        </template>
    </RouterView>
</template>

<script setup lang="ts">
import BreadCrumbs from './components/BreadCrumbs.vue';
</script>

<style lang="scss"></style>
