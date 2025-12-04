<script setup lang="ts">
import { NuxtImg } from '#components'

const handleClick = (index: number = 0) => {
    alert('Clicked!' + index)
}


const containerRef = ref(null)
const slides = ref(Array.from({ length: 10 }))
const swiper = useSwiper(containerRef, {
    effect: 'creative',
    loop: true,
    autoplay: {
        delay: 5000,
    },
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            shadow: true,
            translate: [0, 0, -400],
        },
    },
})

onMounted(() => {
    console.log(swiper.instance)
})

const items = [1, 2, 3, 4]
const itemCustoms = [1, 2, 3]
</script>

<template>
    <div class="py-20">
        <div class="mx-auto max-w-6xl">
            <div class="px-4 md:px-8 lg:px-0">
                <div class="py-8">
                    <div class="flex gap-4 justify-center">
                        <div class="max-20" v-for="dataItem in items" :key="dataItem" :item="dataItem">
                            <IconButton icon="i-lucide-lightbulb" class-icon="size-5 text-gray-400" :size-icon="20"
                                label="lightbulb" @click="handleClick(1)" />
                        </div>
                    </div>
                </div>

                <div class="py-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <CardFeature src="/images/Cayenne-Turbo-Electric.jpg" title="Lorem, ipsum dolor"
                            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, iste similique delectus laborum aut nostrum inventore?">
                            <div class="max-w-32">
                                <IconButton icon="i-lucide-lightbulb"
                                    class-name="mt-2 flex-row-reverse py-2! px-2! bg-white text-black "
                                    class-icon="text-black" :size-icon="16" label="lightbulb" @click="handleClick(1)" />
                            </div>
                        </CardFeature>
                        <CardFeature src="/images/Manthey-Kit.jpg" title="Lorem, ipsum dolor"
                            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, iste similique delectus laborum aut nostrum inventore?">
                            <div class="max-w-32">
                                <IconButton icon="i-lucide-lightbulb"
                                    class-name="mt-2 flex-row-reverse py-2! px-2! bg-white text-black "
                                    class-icon="text-black" :size-icon="16" label="lightbulb" @click="handleClick(1)" />
                            </div>
                        </CardFeature>
                    </div>
                </div>

                <div class="py-8 w-full">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <CarCard v-for="dataItem in items" :key="dataItem" :item="dataItem"
                            image="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg"
                            title="Toyota Camry New" description="3.5 D5 PowerPulse Momentum 5dr AWD." :miles="20"
                            fuel="Petrol" transmission="Automatic" :year="2023" :price="40000" badge="Great Price" />
                        <CarCard v-for="dataItem in items" :key="dataItem" :item="dataItem"
                            image="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg"
                            title="Toyota Camry New" description="3.5 D5 PowerPulse Momentum 5dr AWD." :miles="20"
                            fuel="Petrol" transmission="Automatic" :year="2023" :price="40000" badge="Great Price" />
                    </div>

                </div>
            </div>
        </div>


        <div class="py-8">
            <div class="py-8 md:py-20 bg-blue-600">
                <div class="max-w-6xl mx-auto">
                    <h2 class="text-2xl text-white pb-4 md:pb-6 font-bold">Lorem ipsum dolor sit.</h2>
                    <div class="grid grid-cols-4 gap-4 md:gap-8">
                        <FinancingCard v-for="dataItem in items" :key="dataItem" :item="dataItem"
                            icon="ph:car-simple-duotone" title="Special Financing Offers"
                            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus provident nesciunt at distinctio quos id odit numquam quisquam magnam? Illo, ratione earum itaque vel dolorem eius voluptate."
                            bgColor="bg-transparent" />

                    </div>
                </div>
            </div>
        </div>

        <div class="mx-auto max-w-6xl">
            <div class="px-4 md:px-8 lg:px-0">

                <div class="py-8">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 overflow-x-hidden">
                        <TeamCard v-for="dataItem in items" :key="dataItem" :item="dataItem" image="/images/photo.jpeg"
                            title="Toyota Camry New" description="3.5 D5 PowerPulse Momentum 5dr AWD." />
                    </div>

                </div>

                <div class="py-8">
                    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        <NewCard v-for="dataItem in itemCustoms" :key="dataItem" :item="dataItem"
                            image="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg" article="article"
                            date="November 22, 2023" title="Toyota Camry New" link="#" badge="Great Price" />
                    </div>

                </div>

                <div class="py-8">
                    <div>
                        <div class="grid grid-cols-1 md:grid-cols-2">
                            <div>

                            </div>
                            <div>
                                <div class="relative">
                                    <swiper-container ref="containerRef" :init="false">
                                        <swiper-slide v-for="(slide, idx) in slides" :key="idx">
                                            <ReviewCard name="Ali TUFAN" role="Designer" :verified="true"
                                                ratingText="5.0 ★★★★★"
                                                review="I'd suggest Macklin Motors Nissan Glasgow South to a friend because I had great service from my salesman Patrick and all of the team."
                                                :avatars="[
                                                    '/images/photo.jpeg',
                                                    '/images/photo.jpeg',
                                                    '/images/photo.jpeg'
                                                ]" />
                                        </swiper-slide>
                                    </swiper-container>

                                    <div class="absolute top-4 right-4 z-10">
                                        <div class="flex gap-2">
                                            <button @click="swiper.prev()"
                                                class="h-8 w-8 flex justify-center items-center border-[1px] border-gray-400 rounded-full text-gray-600">
                                                <Icon name="heroicons:chevron-left" class="text-gray-600" />
                                            </button>
                                            <!-- Go forward one slide -->
                                            <button @click="swiper.next()"
                                                class="h-8 w-8 flex justify-center items-center border-[1px] border-gray-400 rounded-full text-gray-600">
                                                <Icon name="heroicons:chevron-right" class="text-gray-600" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div>
            <div class="h-screen w-screen relative overflow-hidden">
                <NuxtImg src="/images/Shelby-Super-Snake.jpg" class="w-full h-full object-cover" />
                <div class="absolute top-[20%] left-[10%]">
                    <div class="px-8 py-6 rounded-xl bg-white hover:shadow transition duration-150 ease-initial max-w-md">
                        <AutoLoanCalculator />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css">
swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>