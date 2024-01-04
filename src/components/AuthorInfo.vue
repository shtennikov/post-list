<template>
    <div class="author-info">
        <h3 class="author-info__name">{{ author.name }}</h3>
        <ul class="author-info__contact-list">
            <li class="author-info__contact">
                <UiIcon icon="email" />
                <a :href="`mailto:${author.email}`">{{ author.email }}</a>
            </li>
            <li class="author-info__contact">
                <UiIcon icon="phone" />
                <a :href="`tel:${tel}`">{{ author.phone }}</a>
            </li>
            <li class="author-info__contact">
                <UiIcon icon="website" />
                <a :href="`https://${author.website}`" target="_blank">{{ author.website }}</a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { User } from '../types/User.interface';
import UiIcon from './UiIcon.vue';

const props = defineProps<{ author: User }>();

const tel = computed(() => props.author.phone.replace(/[-\s]/g, ''));
</script>

<style scoped lang="scss">
.author-info {
    width: 100%;
    padding: 20px 30px;
    max-width: 700px;
    border: 2px solid $border-color;
    border-radius: 40px;
    color: $text-primary-color;

    &__name {
        color: $text-title-color;
        margin-bottom: 10px;
    }

    &__contact-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    &__contact {
        display: flex;
        align-items: center;
        gap: 8px;
    }
}
</style>
