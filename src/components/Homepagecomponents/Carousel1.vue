<template>
    <div class="carousel">
        <transition name="slide-fade" mode="out-in">
            <div :key="currentIndex" class="carousel-inner">
                <div v-for="(item, index) in items" :key="index" class="carousel-slide" v-show="currentIndex === index">
                    <div class="image-container">
                        <img :src="item.image" alt="Carousel Image" class="w-full shadow-md h-auto">
                    </div>
                    <div class="carousel-overlay absolute inset-0 flex flex-col justify-center items-start text-white">
                        <div class="grid grid-cols-2">
                            <div class="text-start">
                                <h2 class="text-5xl font-bold pb-4">{{ item.title }}</h2>
                                <p class="text-lg pb-4">{{ item.description }}</p>
                                <a :href="item.buttonLink"
                                class="button-link inline-flex items-center border-2 p-3 h-8 rounded-md font-bold text-xs text-white uppercase hover:bg-orange-400 focus:border-blue-900 transition ease-in-out duration-100">{{
                                    item.buttonText }}</a>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <div>
            <button class="prev-button" @click="prevSlide">&lt;</button>
            <button class="next-button" @click="nextSlide">&gt;</button>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            currentIndex: 0,
            items: [
                {
                    image: 'src/assets/images/firstslide.png',
                    title: 'Accomplish more together',
                    description: 'Through our Integrated Management System, we accomplish more because of the seamless and efficient collaboration of various management systems.',
                    buttonText: 'Explore Our Programs',
                    buttonLink: '/ISO-MS', // Add the link here
                },
                {
                    image: 'src/assets/images/thirdslide.png',
                    title: 'Accelerate your Learnings',
                    description: 'Be a Risk Management champion with our carefully curated and comprehensive RM Academy.',
                    buttonText: 'VISIT RM ACADEMY',
                    buttonLink: '/RM-ACADEMY', // Add the link here
                },
                {
                    image: 'src/assets/images/getintouch.png',
                    title: 'Get in touch',
                    description: 'Got any concerns and queries about Risk Management and the work we do? Don’t hesitate to reach out to us!',
                    buttonText: 'CONTACT US',
                    buttonLink: '/send-sos', // Add the link here
                },
                // Add more items as needed
            ],
        };
    },
    mounted() {
        this.startAutoPlay();
    },
    methods: {
        startAutoPlay() {
            setInterval(this.nextSlide, 5000); // Change slide every 5 seconds
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.items.length;
        },
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        },
    },
};
</script>

<style scoped>
.carousel {
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
}

.carousel-inner {
    display: flex;

}

.carousel-slide {
    flex: 1;
    position: relative;
    height: 500px;
}

.image-container {
    position: relative;
    height: 100%;
    overflow: hidden;
}

.image-container img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.carousel-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 75px;
    text-align: center;
}

.prev-button,
.next-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    border: none;
    font-size: 35px;
    cursor: pointer;
    z-index: 1;

}

.prev-button {
    left: 10px;
}

.next-button {
    right: 10px;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.2s;

}
</style>
