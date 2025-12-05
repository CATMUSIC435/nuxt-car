<script setup lang="ts">
interface Props {
  heading: string
  description?: string
  align?: 'left' | 'center' | 'right'
  headingClass?: string
  descriptionClass?: string
}

withDefaults(defineProps<Props>(), {
  align: 'left',
  headingClass: 'text-2xl font-bold',
  descriptionClass: 'text-sm text-gray-500'
})
</script>

<template>
  <div :class="['flex flex-col', {
    'text-left': align === 'left',
    'text-center': align === 'center',
    'text-right': align === 'right'
  }]">
    
    <!-- Heading -->
    <h2 :class="headingClass">
      {{ heading }}
    </h2>

    <!-- Description -->
    <p v-if="description" :class="['mt-1', descriptionClass]">
      {{ description }}
    </p>

  </div>
</template>
