<template>
    <div class="accordion">
        <div class="accordion-header" @click="toggleAccordion">
            <span class="accordion-title">{{ title }}</span>
            <span class="accordion-icon">
                <svg class="w-4 h-4" :class="{ 'transform rotate-180': isOpen }" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </span>
        </div>
        <div v-if="isOpen" class="accordion-content">
            <slot></slot>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        title: String,
        content: String,
    },
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        toggleAccordion() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>
  
<style scoped>
.accordion {
    border: 0.3px solid black;
    border-radius: 0.9rem;
    overflow: hidden;
}

.accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.3rem 1rem;
    cursor: pointer;
}

.accordion-title {
    font-weight: bold;
}

.accordion-icon {
    transition: transform 1s ease-in-out;
}

.accordion-content {
    border-top: 0.1px solid;
    padding: 0.9rem 1rem;
}
</style>
  