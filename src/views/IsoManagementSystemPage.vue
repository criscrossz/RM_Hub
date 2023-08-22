<template>
  <div class='pb-12'>
    <div class='relative'>
      <img class="w-full brightness-50 h-80 lg:h-80 object-cover" :src="Heropic" alt="RMO Hub Logo" />
      <div class='absolute grid lg:grid-cols-2 top-1/3 lg:left-32 left-16'>
        <div class='cols-span-1'>
          <h1 class='text-4xl font-bold text-white pb-3'>Resilience for an uninterrupted success</h1>
          <p class='text-white'>Discover the Unyielding Team Behind Your Risk Management Journey.</p>
        </div>
      </div>
    </div>
  </div>
  <div>
    <tab ref="tab" :tabList="tabList" class="font-semibold text-sm">
      <template v-slot:tabPanel-1><Bcmtab /></template>
      <template v-slot:tabPanel-2><Oshtab id="oshtab"/></template>
      <template v-slot:tabPanel-3><Emstab /></template>
      <template v-slot:tabPanel-4><Enmstab /></template>
      <template v-slot:tabPanel-5><Cmstab /></template>
      <template v-slot:tabPanel-6><Ermtab /></template>
    </tab>
  </div>
</template>

<script lang="ts">
import Bcmtab from '../components/managementcomponents/Bcmtab.vue';
import Tab from '../components/managementcomponents/Tab.vue';
import Oshtab from '../components/managementcomponents/Oshtab.vue';
import Emstab from '../components/managementcomponents/Emstab.vue';
import Enmstab from '../components/managementcomponents/Enmstab.vue';
import Cmstab from '../components/managementcomponents/Cmstab.vue';
import Ermtab from '../components/managementcomponents/Ermtab.vue';
export default {
  components: {
    Tab,
    Bcmtab,
    Oshtab,
    Emstab,
    Enmstab,
    Cmstab,
    Ermtab,
  },
  
  data() {
    return {
      Heropic: 'src/assets/images/MSHERO.png',
      tabList: ["BCM", "OSH", "EMS", "EnMS", "CMS", "ERM"],
    };
  },
  

};
</script>