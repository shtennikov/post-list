<template>
    <ul>
        <li>{{ author.name }}</li>
        <li>{{ author.email }}</li>
        <li>{{ author.phone }}</li>
        <li>{{ author.website }}</li>
    </ul>
</template>

<script setup lang="ts">
import type { User } from '../types/User.interface';

defineProps<{ author: User }>();
</script>

<style scoped></style>
