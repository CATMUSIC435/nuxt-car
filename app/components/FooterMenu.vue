<script setup lang="ts">
interface MenuItem {
    label: string
    href: string
}

interface Props {
    title: string
    items: MenuItem[]
}

defineProps<Props>()
</script>

<template>
    <div class="text-white space-y-3">
        <h3 class="font-semibold text-lg mb-4">{{ title }}</h3>

        <ul class="space-y-2">
            <li v-for="item in items" :key="item.href">
                <NuxtLink :to="item.href" class="text-sm text-gray-300 hover:text-white transition">
                    {{ item.label }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>