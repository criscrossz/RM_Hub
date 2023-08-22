<template>
    <div>
        <ul>
            <li v-for="item in filteredItems" :key="item.id">
                    <a @click="showItem(item)"><div class="rounded-lg w-full hover:shadow-md hover:bg-blue-400 hover:text-white border p-3">{{ item.title }}</div></a>
            </li>
        </ul>
        <div v-if="selectedItem && selectedItem.relatedLinks.length">
            <h3 class="mt-4 font-semibold">Related Links</h3>
            <ul>
                <li v-for="link in selectedItem.relatedLinks" :key="link.id">
                    <a :href="link.url" class="text-blue-500 hover:underline">{{ link.title }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        filteredItems: Array,
        showItem: Function
    },
    computed: {
        selectedItem() {
            return this.$root.selectedItem;
        }
    }
};
</script>
  
<style scoped>
/* Customize sidebar styles */

/* Style item box */
.item-box {
    transition: box-shadow 0.4s, border-color 0.2s;
   
}
</style>
  