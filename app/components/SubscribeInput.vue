<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

const emit = defineEmits<{
  (e: 'submit', email: string): void
}>()

const handleSubmit = () => {
  emit('submit', email.value)
}
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="w-full max-w-xl bg-[#1a2036] rounded-full flex items-center px-6 py-3 space-x-3"
  >
    <input
      v-model="email"
      type="email"
      placeholder="Your email address"
      class="flex-1 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none text-sm"
    />

    <button
      type="submit"
      class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm transition"
    >
      Sign Up
    </button>
  </form>
</template>
