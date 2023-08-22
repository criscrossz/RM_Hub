<template>
    <div>
        <div :class="{ flex: variant === 'horizontal' }">
            <ul class="flex justify-center">
                <li v-for="(tab, index) in tabList" :key="index">
                    <label :for="`${_uid}${index}`"
                        class="cursor-pointer inline-block px-10 py-2 hover:bg-blue-200 hover:text-black rounded-full shadow-sm"
                        :class="{ 'bg-blue-500 text-white': index + 1 === activeTab }" v-text="tab"
                        @click="setActiveTab(index + 1)" />
                </li>
            </ul>

            <template v-for="(tab, index) in tabList">
                <div :key="index" v-if="index + 1 === activeTab">
                    <slot :name="`tabPanel-${index + 1}`" />
                </div>
            </template>
        </div>
    </div>
</template>
  

<script>
export default {
    props: {
        tabList: {
            type: Array,
            required: true,
        },
        variant: {
            type: String,
            required: false,
            default: () => "vertical",
            validator: (value) => ["horizontal", "vertical"].includes(value),
        },
    },
    data() {
        return {
            activeTab: 1,
        };
    },
    methods: {
        setActiveTab(tabIndex) {
            this.activeTab = tabIndex;
        },
    },

};
</script>
  
<style></style>
  