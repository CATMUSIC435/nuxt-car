<script setup lang="ts">
import { NuxtImg } from "#components";

interface NewCardProps {
    image: string;
    title: string;
    article?: string;
    link: string;
    date?: string;
    className?: string;
    badge?: string;
}

const props = defineProps<NewCardProps>();
const classNameChange = (props.className || '') + 'rounded-2xl overflow-hidden flex flex-col gap-2 hover:shadow-sm transition duration-200 ease-linear';
</script>

<template>
    <div :class="classNameChange">

        <!-- Image -->
        <div class="relative">
            <NuxtImg :src="image" class="w-full h-56 object-cover rounded-xl" />
            <!-- Badge + Save icon -->
            <div class="absolute top-0 left-0 w-full">
                <div class="w-full pt-2 px-2">
                    <div class="flex justify-between items-center">
                        <span v-if="badge" class="bg-white text-gray-600 text-xs px-3 py-1 rounded-full">
                            {{ badge }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-4 py-1 flex flex-col">
            <div class="flex gap-2 text-xs text-gray-400">
                <span v-if="article">{{ article }}</span>
                <span v-if="date">{{ date }}</span>
            </div>
            <!-- Title -->
            <NuxtLink :to="link" class="text-gray-600 text-sm hover:underline flex gap-1 font-light">
                <span class="font-bold text-md">{{ title }}</span>
            </NuxtLink>
        </div>
    </div>
</template>
