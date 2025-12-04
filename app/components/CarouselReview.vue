<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

defineProps<{
  items: {
    name: string;
    role: string;
    review: string;
    verified?: boolean;
    ratingText?: string;
    avatars: string[];
  }[];
}>();
</script>

<template>
  <Swiper
    :modules="[Autoplay, Navigation, Pagination]"
    :loop="true"
    :autoplay="{ delay: 3500, disableOnInteraction: false }"
    :space-between="40"
    :pagination="{ clickable: true }"
    navigation
    class="py-10"
  >
    <SwiperSlide v-for="(item, index) in items" :key="index">
      <ReviewCard
        :name="item.name"
        :role="item.role"
        :review="item.review"
        :verified="item.verified"
        :ratingText="item.ratingText"
        :avatars="item.avatars"
      />
    </SwiperSlide>
  </Swiper>
</template>
