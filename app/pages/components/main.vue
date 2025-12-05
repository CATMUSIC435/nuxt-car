<script setup lang="ts">
import { NuxtImg } from '#components'
import { ref } from 'vue'

const handleClick = (index: number = 0) => {
    alert('Clicked!' + index)
}

const handleEmail = (email: string) => {
    console.log('User email:', email)
}

const containerRef = ref(null)
const slides = ref(Array.from({ length: 10 }))
const active = ref('info')
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

const tabs = [
    { label: 'Recent Cars', value: 'info' },
    { label: 'Featured Cars', value: 'images' },
    { label: 'Popular Cars', value: 'map' }
]
</script>

<template>
    <div>
        <div>
            <div class="h-screen md:h-full w-screen relative overflow-hidden">
                <div class="absolute md:relative top-0 left-0 h-full">
                    <NuxtImg src="/images/Cayenne-Turbo-Electric.jpg" class="md:w-full w-auto h-full object-cover" />
                </div>
                <div class="pb-20 relative md:absolute top-0 left-0 w-full  ">
                    <div class="px-4 md:px-8 py-6">
                        <div class="flex justify-between w-full relative">
                            <div class="hidden md:flex gap-4">
                                <TextIcon v-for="dataItem in items" :key="dataItem" :item="dataItem"
                                    icon="mdi-light:chevron-down" text="Lorem ipsum"
                                    class-name="text-white flex-row-reverse text-sm font-light" size="text-md" />
                            </div>
                            <div class="md:absolute md:-top-6 md:left-[50%] md:-translate-x-[50%]">
                                <div class="absolute top-0 left-0">
                                    <div class="w-12 h-12 md:w-20 md:h-20">
                                        <NuxtImg src="/images/illustration.png" alt="logo" class="w-full h-full" />
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <button class="px-4 py-2">
                                    <TextIcon icon="mdi-light:account" text="Sign in"
                                        class-name="text-white text-sm font-light" size="text-md" />
                                </button>
                                <button class="px-4 py-2 rounded-full border border-white text-white">
                                    Submit Listing
                                </button>
                            </div>
                        </div>

                        <div class="pt-16">
                            <div
                                class="w-[fit-content] grid grid-cols-2 px-6 md:px-6 py-6 md:py-2 rounded-md md:rounded-full border border-white md:flex  gap-6 md:gap-4 mx-auto">

                                <TextIcon v-for="dataItem in items" :key="dataItem" :item="dataItem"
                                    icon="mdi-light:chevron-down" text="Lorem ipsum"
                                    class-name="text-white flex-row-reverse text-sm font-light  gap-4" size="text-md" />
                                <TextIcon icon="mdi-light:magnify" text="Search"
                                    class-name="col-span-2 justify-center text-gray-900 flex-row-reverse text-sm font-light px-12 py-3 rounded-full bg-white gap-2"
                                    size="1em" />
                            </div>
                        </div>

                        <div class="pt-36">
                            <div class="flex flex-col gap-8 text-white text-center w-full">
                                <p class="text-sm font-light">We make finding the right car simple</p>
                                <h2 class="text-4xl md:text-7xl font-extrabold">Search Less. Live More.</h2>
                                <div class="w-[fit-content] flex  gap-2 md:gap-8 justify-center w-full">
                                    <TextIcon icon="mdi-light:format-wrap-top-bottom" text="View Inventory"
                                        class-name=" text-gray-900 flex-row-reverse text-sm font-light px-12 py-3 rounded-full bg-white gap-2"
                                        size="2em" />
                                    <TextIcon icon="mdi-light:format-wrap-top-bottom" text="Contact Us"
                                        class-name=" text-white  flex-row-reverse text-sm font-light px-12 py-3 rounded-full border border-white gap-2"
                                        size="2em" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mx-auto max-w-6xl">
            <div class="px-4 md:px-8 lg:px-0">
                <div class="py-8">
                    <div class="pb-4">
                        <HeaderSection icon="mdi-light:format-wrap-top-bottom" text="View all" label="Browse by Type"
                            class-name-icon="flex-row-reverse text-sm font-light px-12 py-3 rounded-full border border-white gap-2"
                            size="2em" />
                    </div>
                    <div class="grid grid-cols-2 md:flex gap-4 justify-center">
                        <div class="max-20" v-for="dataItem in items" :key="dataItem" :item="dataItem">
                            <IconButton icon="i-lucide-lightbulb" class-icon="size-5 text-gray-400" :size-icon="20"
                                label="lightbulb" @click="handleClick(1)" />
                        </div>
                    </div>
                </div>

                <div class="py-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
                        <div>
                            <div class="grid grid-cols-2 gap-4 md:gap-0">
                                <div class="flex flex-col items-end gap-4 md:gap-12">
                                    <div class="w-full md:w-[80%]">
                                        <NuxtImg src="/images/Cayenne-Turbo-Electric.jpg"
                                            class="w-full h-full object-cover rounded-lg" />
                                    </div>
                                    <div class="w-full md:w-[60%]">
                                        <NuxtImg src="/images/Cayenne-Turbo-Electric.jpg"
                                            class="w-full h-full object-cover rounded-lg" />
                                    </div>
                                </div>
                                <div class="flex justify-end">
                                    <div class="w-full md:w-5/6 h-full bg-center bg-cover rounded-lg"
                                        style="background-image: url(/images/Cayenne-Turbo-Electric.jpg);">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-2 md:px-16 flex flex-col gap-4">
                            <h2 class="text-2xl font-bold">
                                Get A Fair Price For Your
                                Car Sell To Us Today
                            </h2>
                            <p>Get A Fair Price For Your
                                Car Sell To Us Today</p>
                            <div class="mt-4 flex flex-col gap-1">
                                <TextIcon v-for="itemCustoms in items" :key="dataItem" :item="dataItem"
                                    icon="mdi-light:format-wrap-top-bottom"
                                    text="We are the UK’s largest provider, with more patrols in more places"
                                    class-name=" text-gray-600 text-sm font-light gap-2" size="2em" />
                            </div>
                        </div>
                    </div>

                </div>

                <div class="py-8">
                    <div class="grid grid-cols-2 gap-4 md:flex md:justify-center md:gap-16 text-center">
                        <div class="w-full md:w-30" v-for="dataItem in items" :key="dataItem" :item="dataItem">
                            <HeadingDescription heading="890M" description="CARS FOR SALE" align="center" />
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
                    <div class="pb-4">
                        <HeaderSection icon="mdi-light:format-wrap-top-bottom" text="View all"
                            label="Explore All Vehicles"
                            class-name-icon="flex-row-reverse text-sm font-light px-12 py-3 rounded-full border border-white gap-2"
                            size="2em" />
                    </div>
                    <Tabs v-model="active" :tabs="tabs">
                        <template #default="{ active }">

                            <div v-if="active === 'info'">
                            </div>

                            <div v-if="active === 'images'">
                            </div>

                            <div v-if="active === 'map'">
                            </div>

                        </template>
                    </Tabs>
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
            <div class="px-4 md:px-0 py-8 md:py-20 bg-blue-600">
                <div class="max-w-6xl mx-auto">
                    <h2 class="text-2xl text-white pb-4 md:pb-6 font-bold">Lorem ipsum dolor sit.</h2>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
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
                    <div class="pb-4">
                        <HeaderSection icon="mdi-light:format-wrap-top-bottom" text="View all" label="Our Team"
                            class-name-icon="flex-row-reverse text-sm font-light px-12 py-3 rounded-full border border-white gap-2"
                            size="2em" />
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 overflow-x-hidden">
                        <TeamCard v-for="dataItem in items" :key="dataItem" :item="dataItem" image="/images/photo.jpeg"
                            title="Toyota Camry New" description="3.5 D5 PowerPulse Momentum 5dr AWD." />
                    </div>

                </div>

                <div class="py-8">
                    <div>
                        <div class="max-w-sm">
                            <h2 class="text-4xl font-bold text-gray-600">What our
                                customers say</h2>
                        </div>
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

                <div class="py-8">
                    <div class="pb-4">
                        <HeaderSection icon="mdi-light:format-wrap-top-bottom" text="View all" label="Latest Blog Posts"
                            class-name-icon="flex-row-reverse text-sm font-light px-12 py-3 rounded-full border border-white gap-2"
                            size="2em" />
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        <NewCard v-for="dataItem in itemCustoms" :key="dataItem" :item="dataItem"
                            image="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg" article="article"
                            date="November 22, 2023" title="Toyota Camry New" link="#" badge="Great Price" />
                    </div>

                </div>

            </div>
        </div>

        <div>
            <div class="h-full md:h-screen w-screen relative overflow-hidden">
                <div class="h-full absolute md:relative top-0 left-0 z-0">
                    <NuxtImg src="/images/Shelby-Super-Snake.jpg" class="w-full h-full object-cover" />
                </div>
                <div class="relative md:absolute md:top-[20%] md:left-[10%] px-4 py-20 px:px-0 md:py-0 z-1">
                    <div
                        class="px-8 py-6 rounded-xl bg-white hover:shadow transition duration-150 ease-initial max-w-md">
                        <AutoLoanCalculator />
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-[#020617] w-full">
            <div class="px-4 py-12 md:px-0 md:py-20">
                <div class="w-full mx-auto max-w-6xl text-white">
                    <div class="flex flex-col md:flex-row justify-between pb-8 gap-4">
                        <div class="flex flex-col gap-1">
                            <h3 class="text-xl font-bold">Join CarHut</h3>
                            <p>Receive pricing updates, shopping tips & more!</p>
                        </div>
                        <div>
                            <SubscribeInput @submit="handleEmail" />
                        </div>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-y-4">
                        <FooterMenu v-for="dataItem in items" :key="dataItem" :item="dataItem" title="Company" :items="[
                            { label: 'About Us', href: '/about' },
                            { label: 'Blog', href: '/blog' },
                            { label: 'Services', href: '/services' },
                            { label: 'FAQs', href: '/faqs' },
                            { label: 'Terms', href: '/terms' },
                            { label: 'Contact Us', href: '/contact' }
                        ]" />
                        <div class="col-span-2 md:col-span-1 flex flex-col gap-2">
                            <div>
                                <h3 class="text-lg">Our Mobile App</h3>
                               <div  class="mt-4 flex md:flex-col gap-2">
                                 <PlatformButton icon="logos:app-store" smallText="Download on the" bigText="App Store"
                                    href="https://apple.com/app-store" />
                                <PlatformButton icon="logos:app-store" smallText="Download on the" bigText="App Store"
                                    href="https://apple.com/app-store" />
                               </div>

                            </div>
                            <div>
                                <h3 class="text-lg">Connect With Us</h3>

                                <div class="mt-4 flex justify-center gap-8">
                                    <Icon v-for="dataItem in items" :key="dataItem" :item="dataItem"
                                        name="mdi-light:gift" class="inline-block" size="2em" />
                                </div>
                            </div>
                        </div>
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