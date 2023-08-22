<template>
    <div class="mb-4 relative">
        <input v-model="searchQuery" @input="filterItems"
            class="w-full px-12 py-2 rounded bg-gray-100 focus:outline-none focus:bg-white pr-10" placeholder="Search a term or input any key words." />
        <svg class="h-6 w-6 absolute top-2 left-3 text-blue-400" fill="none" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="3" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M21 21l-4.35-4.35"></path>
            <path d="M15 10a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path>
        </svg>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            searchQuery: ''
        }
    },
    methods: {
        filterItems() {
            this.$emit('filter', this.searchQuery);
        }
    }
}
</script>

<style scoped>
/* Additional styling if needed */
</style>
