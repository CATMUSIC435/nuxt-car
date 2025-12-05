<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

interface TabItem {
  label: string
  value: string
}

interface Props {
  tabs: TabItem[]
  modelValue: string
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const activeTabEl = ref<HTMLElement | null>(null)
const underlineStyle = ref({
  width: '0px',
  left: '0px'
})

const setUnderline = async () => {
  await nextTick()
  if (!activeTabEl.value) return
  underlineStyle.value = {
    width: activeTabEl.value.offsetWidth + 'px',
    left: activeTabEl.value.offsetLeft + 'px'
  }
}

onMounted(setUnderline)

const selectTab = (value: string, el: HTMLElement) => {
  emit('update:modelValue', value)
  activeTabEl.value = el
  setUnderline()
}
</script>

<template>
  <div class="w-full">
    <!-- Tabs Header -->
    <div class="relative flex border-b border-gray-200">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        ref="tabButtons"
        class="px-4 py-2 text-sm font-medium relative"
        :class="props.modelValue === tab.value ? 'text-blue-600' : 'text-gray-500'"
        @click="(e) => selectTab(tab.value, e.target as HTMLElement)"
      >
        {{ tab.label }}
      </button>

      <!-- Underline Animation -->
      <div
        class="absolute bottom-0 h-[2px] bg-blue-600 transition-all duration-300"
        :style="underlineStyle"
      ></div>
    </div>

    <!-- Tabs Content -->
    <div class="mt-4">
      <slot :active="modelValue"></slot>
    </div>
  </div>
</template>
