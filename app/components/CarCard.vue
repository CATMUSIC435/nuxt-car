<script setup lang="ts">
import { NuxtImg } from "#components";

interface CarCardProps {
    image: string;
    title: string;
    description?: string;
    miles: number;
    fuel: string;
    transmission: string;
    year: number;
    price: number;
    badge?: string;
}

defineProps<CarCardProps>();
</script>

<template>
    <div class="rounded-2xl overflow-hidden shadow-sm flex flex-col gap-2 hover:shadow-xl transition">

        <!-- Image -->
        <div class="relative">
            <NuxtImg :src="image" class="w-full h-40 object-cover rounded-xl" />
            <!-- Badge + Save icon -->
            <div class="absolute top-0 left-0 w-full">
                <div class="w-full pt-2 px-2">
                    <div class="flex justify-between items-center">
                        <span v-if="badge" class="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                            {{ badge }}
                        </span>

                        <button
                            class="w-8 h-8 flex justify-center items-center bg-gray-100 rounded-full hover:bg-gray-200 transition">
                            <Icon name="mdi:bookmark-outline" size="18" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="p-4 flex flex-col gap-2">
            <!-- Title -->
            <h3 class="font-bold text-md">{{ title }}</h3>
            <p v-if="description" class="text-sm text-gray-500 truncate">
                {{ description }}
            </p>

            <!-- Info row -->
            <div class="grid grid-cols-2 gap-1 text-gray-600 text-xs">
                <div class="flex items-center gap-1">
                    <Icon name="mdi:speedometer" size="18" />
                    <span>{{ miles }} Miles</span>
                </div>
                <div class="flex items-center gap-1">
                    <Icon name="mdi:gas-station" size="18" />
                    <span>{{ fuel }}</span>
                </div>
                <div class="flex items-center gap-1">
                    <Icon name="mdi:car-shift-pattern" size="18" />
                    <span>{{ transmission }}</span>
                </div>
                <div class="flex items-center gap-1">
                    <Icon name="mdi:calendar" size="18" />
                    <span>{{ year }}</span>
                </div>
            </div>

            <!-- Price + Details -->
            <div class="py-2 px-2">
                <div class="h-[1px] w-full bg-gray-200"></div>
            </div>
            <div class="flex items-center justify-between">
                <span class="font-bold text-lg">${{ formatNumber(price) }}</span>
                <NuxtLink to="#" class="text-blue-600 text-sm hover:underline flex gap-1 font-light">
                    <span>View Details</span>
                    <IconArrowUpRight :size="20" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
