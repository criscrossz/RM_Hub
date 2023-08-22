<template>
    <div class="flex items-center justify-center h-8 bg-oranges font-semibold overflow-hidden">
        <transition-group name="slideUp" tag="div">
            <div v-for="(item, index) in items" :key="index" v-show="index === currentIndex" class="text-center text-sm py-8">
                {{ item }}
            </div>
        </transition-group>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            currentIndex: 0,
            intervalId: null,
            intervalTime: 5000, // Change this value to adjust the autoplay speed (in milliseconds)
        };
    },
    mounted() {
        this.startAutoplay();
    },
    methods: {
        startAutoplay() {
            this.intervalId = setInterval(() => {
                this.slideUp();
            }, this.intervalTime);
        },
        slideUp() {
            this.currentIndex = (this.currentIndex + 1) % this.items.length;
        },
    },
};
</script>

<style>
.slideUp-enter-active,
.slideUp-leave-active {
    transition: transform 0.4s;
}

.slideUp-enter,
.slideUp-leave-to {
    transform: translateY(100%);
}
</style>
