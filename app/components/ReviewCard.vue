<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
    name: string;
    role: string;
    review: string;
    ratingText?: string;
    verified?: boolean;
    avatars: string[];
}>();
</script>

<template>
    <div class="bg-white p-8 relative cursor-pointer">
        <!-- Rating + Verified -->
        <div class="flex items-center gap-3 mb-3">
            <div class="bg-green-500 text-white text-xs px-3 py-1 rounded-sm font-semibold">
                {{ ratingText ?? "5 Stars" }}
            </div>

        </div>

        <!-- Name + Role -->
        <div class="mb-3">
            <h3 class="font-semibold text-lg">{{ name }}</h3>
            <p class="text-sm text-gray-500">{{ role }}</p>
        </div>

        <!-- Review text -->
        <p class="text-gray-900 leading-relaxed mb-6 max-w-2xl">
            {{ review }}
        </p>

        <!-- Avatars -->
        <div class="flex items-center">
            <div v-for="(img, index) in avatars" :key="index"
                class="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                <img :src="img" class="w-full h-full object-cover" />
            </div>
        </div>
    </div>
</template>
