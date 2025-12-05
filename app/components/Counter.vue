<script setup lang="ts">
import { useCounterStore } from '~/stores/counter'
const counter = useCounterStore()
</script>

<template>
    <div class="flex items-center gap-4 select-none">
        <!-- Nút giảm -->
        <button class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 active:scale-90 transition"
            @click="counter.decrease">
            -
        </button>

        <!-- Số có animation -->
        <transition name="fade-scale" mode="out-in">
            <span :key="counter.value" class="text-2xl font-bold w-10 text-center inline-block">
                {{ counter.value }}
            </span>
        </transition>

        <!-- Nút tăng -->
        <button class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 active:scale-90 transition"
            @click="counter.increase">
            +
        </button>
    </div>
</template>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
    transition: all 0.2s ease;
}

.fade-scale-enter-from {
    opacity: 0;
    transform: scale(0.6);
}

.fade-scale-leave-to {
    opacity: 0;
    transform: scale(1.4);
}
</style>
