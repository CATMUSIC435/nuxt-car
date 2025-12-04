<script setup lang="ts">
import Main from '~/pages/components/main.vue'

</script>
<template>
    <div class="w-screen overflow-hidden">
        <div>
            <Suspense>
                <Main />
            </Suspense>
        </div>
    </div>
</template>