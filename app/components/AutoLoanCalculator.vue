<script setup lang="ts">
import { ref, computed } from "vue";

const price = ref(10000);
const interest = ref(10);
const years = ref(3);
const down = ref(5000);

// Công thức tính monthly payment
const monthly = computed(() => {
  const principal = price.value - down.value;
  const monthlyRate = interest.value / 100 / 12;
  const totalMonths = years.value * 12;

  if (monthlyRate === 0) return principal / totalMonths;

  return (
    (principal *
      monthlyRate *
      Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );
});
</script>

<template>
  <div class="mx-auto">
    <h2 class="text-2   xl font-bold mb-2">Auto Loan Calculator</h2>
    <p class="text-gray-500 mb-6 text-xs">
      Use this car payment calculator to estimate monthly payments on your next new or used auto loan.
    </p>

    <!-- Form -->
    <div class="grid grid-cols-2 gap-4 md:gap-6 mb-6">
      <!-- Price -->
      <div>
        <label class="block text-sm text-gray-600 mb-1">Price ($)</label>
        <input
          type="number"
          v-model.number="price"
          class="w-full border rounded-lg px-3 py-2"
        />
      </div>

      <!-- Interest -->
      <div>
        <label class="block text-sm text-gray-600 mb-1">Interest Rate (%)</label>
        <input
          type="number"
          v-model.number="interest"
          class="w-full border rounded-lg px-3 py-2"
        />
      </div>

      <!-- Loan Term -->
      <div>
        <label class="block text-sm text-gray-600 mb-1">Loan Term (year)</label>
        <input
          type="number"
          v-model.number="years"
          class="w-full border rounded-lg px-3 py-2"
        />
      </div>

      <!-- Down Payment -->
      <div>
        <label class="block text-sm text-gray-600 mb-1">Down Payment ($)</label>
        <input
          type="number"
          v-model.number="down"
          class="w-full border rounded-lg px-3 py-2"
        />
      </div>
    </div>

    <!-- Calculate Button -->
    <button
      class="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
    >
      Calculate →
    </button>

    <!-- Output -->
    <div class="mt-6 text-center">
      <p class="text-gray-500 text-sm mb-1">Estimated Monthly Payment</p>
      <p class="text-3xl font-bold text-blue-600">
        ${{ formatNumber(monthly) }}
      </p>
    </div>
  </div>
</template>
