<script setup lang="ts">
import { defineProps } from "vue";

type FinancingCardProps = {
  className?: string;
  icon: string;
  title: string;
  description: string;
  bgColor?: string;
}

const props = defineProps<FinancingCardProps>();
const classNameChange = (props.className || '') + (props.bgColor || '') + ' rounded-2xl text-white bg-blue-600'
</script>

<template>
  <div
    :class="classNameChange"
  >
    <div class="mb-2">
      <Icon :name="icon" class="text-4xl" />
    </div>

    <h3 class="text-gl font-semibold mb-2">
      {{ title }}
    </h3>

    <p class="text-sm opacity-80 leading-relaxed text-clip line-clamp-4">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
</style>
