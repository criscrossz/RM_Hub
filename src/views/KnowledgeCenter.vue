<template>
    <div class='pb-12'>
        <div class='relative'>
            <img class="w-full brightness-50 h-full lg:h-full object-cover" :src="Heropic" alt="RMO Hub Logo" />
            <div class='absolute grid lg:grid-cols-2 top-1/3 lg:left-32 left-16'>
                <div class='cols-span-1'>
                    <h1 class='text-4xl font-bold text-white pb-4'><span class="text-oranges">Knowledge</span> Center</h1>
                    <p class="text-white text-lg">Be a Risk Management savvy with our knowledge center.</p>

                </div>
            </div>
        </div>
    </div>
    <div className='p-12'>
        <h1 className='text-center pb-12 text-4xl font-bold'>How can we help you?</h1>
        <div className='px-80 pb-12'>
            <Searchbar @filter="updateFilter"></Searchbar>
        </div>
        <div className='grid grid-cols-2 gap-4 px-8'>
            <div class="text-md font-semibold">
                <Sidebar :filtered-items="filteredItems" :show-item="showItem"></Sidebar>
            </div>
            <div>
                <p v-if="selectedItem" class="text-md font-base border-1 shadow- p-4">{{ selectedItem.content }}</p>
                <ul v-if="selectedItem && selectedItem.relatedLinks.length" class="box col-span-2 p-8 rounded-lg">
                    <h1 class="pb-4 text-2xl font-bold">Related Links: </h1>
                    <li v-for="link in selectedItem.relatedLinks" :key="link.id">
                        <a :href="link.url" target="_blank" class="underline text-BCM">{{ link.title }}</a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
import Searchbar from '../components/ReusableComponent/Searchbar.vue'
import Sidebar from '../components/ReusableComponent/Sidebar.vue'
import itemsData from '../assets/data/items.json'
import axios from 'axios';

export default {
    components: {
        Searchbar,
        Sidebar,
        itemsData,
    },
    mounted() {
        this.get()
    },
    data() {
        return {
            Heropic: "src/assets/images/databasehero.png",
            items: [],
            filteredItems: [],
            selectedItem: null
        };
    },
    methods: {
        async get() {
            let contents = [];
            await axios.post('http://127.0.0.1:8082/api/datas/', {
                config: {
                    action: 'read',
                    table: 'knowledge_center',
                    select: ['id', 'title', 'content']
                }
            }).then(response => {
                response.data.data.forEach((element) => {
                    axios.post('http://127.0.0.1:8082/api/datas/', {
                        config: {
                            action: 'read',
                            table: 'kc_related_links',
                            where: [
                                ['kc_id', '=', element.id]
                            ]
                        }
                    }).then(response => {
                        this.items = [{
                            'id': element.id,
                            'title': element.title,
                            'content': element.content,
                           'relatedLinks': response.data.data
                    }];
                    }).catch(error => {
                        console.error('Error:', error);
                    });
                });
            }).catch(error => {
                console.error('Error:', error);
            });

        },
        updateFilter(query) {
            this.filteredItems = this.items.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase())
            );
        },
        showItem(item) {
            this.selectedItem = item;
        },
        clearSelectedItem() {
            this.selectedItem = null;
        }
    }
};
</script>

<style>
.sidebar-box {
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    padding: 1rem;
}

.main-content-box {
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    padding: 1rem;
    background-color: #ffffff;
}
</style>