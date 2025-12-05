<script setup lang="ts">
interface Props {
  href?: string
  icon?: string          // tên icon nuxt-icon
  smallText?: string     // dòng nhỏ "Get it on"
  bigText?: string       // dòng lớn "Google Play"
}

const props = withDefaults(defineProps<Props>(), {
  href: "#",
  icon: "logos:google-play-icon",
  smallText: "Get it on",
  bigText: "Google Play"
})
</script>

<template>
  <NuxtLink
    :to="props.href"
    class="flex items-center space-x-3 bg-[#1a2036] hover:bg-[#222a44]
           transition rounded-lg px-4 py-2 w-fit"
  >
    <Icon :name="props.icon" size="28" />

    <div class="text-left leading-tight">
      <p class="text-[10px] text-gray-300">{{ props.smallText }}</p>
      <p class="text-sm font-semibold text-white">{{ props.bigText }}</p>
    </div>
  </NuxtLink>
</template>
