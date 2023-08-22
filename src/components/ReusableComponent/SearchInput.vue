<template>
    <div class="max-w-md">
        <div class="relative flex items-center w-80 h-10 rounded-md focus-within:shadow-2xl shadow-xl bg-white">
            <div class="grid place-items-center h-full w-12 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>

            <input v-model="searchText" @input="$emit('input', searchText)"
                class="peer h-full w-full text-sm text-gray-700 pr-2" type="text" id="search"
                placeholder="What are you looking for.." />
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        value: String,
    },
    data() {
        return {
            searchText: this.value,
        };
    },
};
</script>
  
<style scoped>
/* Add your styles here */
</style>
  