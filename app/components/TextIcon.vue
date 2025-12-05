<script setup lang="ts">

interface Props {
    icon: string;            // tên icon, VD: "material-symbols:add"
    text: string;
    size?: string;           // text size, VD: "text-lg"
    className?: string;
}

withDefaults(defineProps<Props>(), {
    iconPosition: 'left',
    size: 'text-sm',
    gap: 'gap-2',
    className: '',
})

</script>

<template>
    <div :class="['flex items-center text-black', className]">
        <Icon :name="icon" class="inline-block" :size="size" />
        <span>{{ text }}</span>
    </div>
</template>
