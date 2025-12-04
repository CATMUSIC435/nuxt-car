<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps<{ error: NuxtError }>();
const statusCode = error.statusCode.toString();

</script>

<template>
  <main class="h-screen flex justify-center items-center flex-col container">
    <h1 class="text-4xl font-extrabold mb-4">{{ statusCode }}</h1>
    <DevOnly>
      <p class="mt-4">
        {{ error }}
      </p>
    </DevOnly>
  </main>
</template>