<template>
    <button 
    type="button" :class="changeClass"
        @click="$emit('click')">

        <UIcon v-if="icon" :name="icon" :size="sizeIcon" :class="classIcon"/>

        <span v-if="label">{{ label }}</span>
    </button>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{ icon: string; label: string; sizeIcon?:number ; className?: string;classIcon?: string }>(),{className: '', classIcon: '', sizeIcon: 5})
defineEmits(['click'])

const changeClass = props.className + "flex flex-col items-center gap-2 py-3 px-4 text-center w-full hover:shadow border border-gray-200 rounded-lg cursor-pointer hover:shadow transition-all duration-200 delay-100 ease-linear"
</script>
