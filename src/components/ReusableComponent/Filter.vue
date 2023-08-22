<template>
    <div class="relative inline-block">
        <select v-model="selectedOption"
            class="block appearance-none w-56 py-2 px-4 pr-8 leading-tight bg-white border border-gray-400 rounded shadow-lg focus:outline-none focus:ring focus:ring-opacity-50">
            <option value="">All</option>
            <option v-for="(item, index) in items" :key="index" :value="item">
                {{ item }}
            </option>
        </select>
        <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
            </svg>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        items: Array,
    },
    data() {
        return {
            selectedOption: '',
        };
    },
};
</script>
  
<style scoped>
/* Add Tailwind styles or custom styles here */
</style>
  