<template>
    <img class="icon" :alt="icon" :src="iconSrc" />
</template>

<script lang="ts">
import { computed } from 'vue';
import WebSite from '../assets/icons/website-icon.svg';
import Phone from '../assets/icons/phone-icon.svg';
import Email from '../assets/icons/email-icon.svg';

const ICONS = {
    website: WebSite,
    phone: Phone,
    email: Email,
} as const;

type IconTypes = keyof typeof ICONS;

interface IProps {
    icon: IconTypes;
}
</script>

<script setup lang="ts">
const props = defineProps<IProps>();
const iconSrc = computed(() => ICONS[props.icon]);
</script>

<style scoped>
.icon {
    display: block;
    width: 35px;
    height: 35px;
}
</style>
