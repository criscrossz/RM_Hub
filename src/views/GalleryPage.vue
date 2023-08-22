<template>
    <div class='pb-12' id="oshcert">
    <div class='relative'>
      <img class="w-full brightness-50 h-full lg:h-80 object-cover" :src="Heropic" alt="RMO Hub Logo" />
      <div class='absolute grid lg:grid-cols-2 top-1/3 lg:left-32 left-16'>
        <div class='cols-span-1'>
          <h1 class='text-4xl font-bold text-white pb-4'><span class="text-oranges">Photo Gallery </span>of Risk Management Office</h1>
        </div>
      </div>
    </div>
  </div>
  <tab :tabList="tabList" class="font-semibold text-sm">
      <template v-slot:tabPanel-1>
        <div class="grid grid-cols-3 pt-16 gap-4 pb-16 px-8">
          <div class="flex justify-end">
          <img src="src/assets/images/images1.png" />
        </div>
        <div class="flex justify-center">
          <img src="src/assets/images/images2.png"/>
        </div>
          <div class="flex justify-start">
          <img src="src/assets/images/images3.png"/>
        </div>
        <div class="flex justify-end">
          <img src="src/assets/images/images4.png" />
        </div>
        <div class="flex justify-center">
          <img src="src/assets/images/images5.png"/>
        </div>
          <div class="flex justify-start">
          <img src="src/assets/images/images6.png"/>
        </div>
      </div>
      </template>
      <template v-slot:tabPanel-2>
        <div class="grid grid-cols-3 pt-16 gap-4 px-8 pb-16">
          <div class="flex justify-end">
          <img src="src/assets/images/images7.png" />
        </div>
        <div class="flex justify-center">
          <img src="src/assets/images/images8.png"/>
        </div>
          <div class="flex justify-start">
          <img src="src/assets/images/images9.png"/>
        </div>
        <div class="flex justify-end">
          <img src="src/assets/images/images10.png" />
        </div>
        <div class="flex justify-center">
          <img src="src/assets/images/images11.png"/>
        </div>
          <div class="flex justify-start">
          <img src="src/assets/images/images12.png"/>
        </div>
      </div>
      </template>
    </tab>
</template>

<script>
import Tab from '../components/managementcomponents/Tab.vue';
export default {
  components:{
    Tab,
  },
  data() {
    return {
      Heropic: 'src/assets/images/galleryhero.png',
      tabList: ["Recent Activities", "Past Activities"],
    }
  }
}
</script>

<style>

</style>