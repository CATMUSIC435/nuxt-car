<script setup lang="ts">

interface Props {
    label: string;
    icon: string;            // tên icon, VD: "material-symbols:add"
    text: string;
    size?: string;           // text size, VD: "text-lg"
    className?: string;
    classNameIcon?: string;
}

withDefaults(defineProps<Props>(), {
    iconPosition: 'left',
    size: 'text-sm',
    gap: 'gap-2',
    className: '',
    classNameIcon: '',
})

</script>

<template>
    <div :class="['flex justify-between', className]">
        <h3 class="font-bold text-xl">{{ label }}</h3>
        <div :class="['flex items-center text-black', classNameIcon]">
            <Icon :name="icon" class="inline-block" :size="size" />
            <span>{{ text }}</span>
        </div>
    </div>
</template>
