<template>
    <div :class="changeClass">
        <NuxtImg :src="src" class="w-full h-auto object-cover" />
        <div class="absolute top-0 left-12 h-full">
            <div class="flex flex-col justify-center gap-1 h-full w-full">
                <h3 class="text-lg font-bold">{{ title }}</h3>
                <p class="text-sm font-light" v-if="description">{{ description }}</p>
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{ className?: string; src: string; title: string; description?: string }>(), { description: '', className: '' })
defineEmits(['click'])

const changeClass = props.className + "rounded-md md:rounded-xl overflow-hidden relative max-h-72 text-white"
</script>
