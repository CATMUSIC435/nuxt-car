<script setup lang="ts">
import { NuxtImg } from "#components";

interface TeamCardProps {
    image: string;
    title: string;
    description?: string;
}

defineProps<TeamCardProps>();
</script>

<template>
    <div class="rounded-2xl overflow-hidden group">
        <NuxtImg :src="image" class="w-full h-56 object-cover rounded-xl hover:shadow-xl transition duration-150 ease-linear" />
        <div class="mt-1 p-2 flex flex-col gap-1">
            <!-- Title -->
            <h3 class="font-bold text-md">{{ title }}</h3>
            <p v-if="description" class="text-sm text-gray-500 truncate">
                {{ description }}
            </p>
        </div>
    </div>
</template>
