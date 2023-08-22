<template>
  <div class='pb-12' id="oshcert">
    <div class='relative'>
      <img class="w-full brightness-50 h-full lg:h-80 object-cover" :src="Heropic" alt="RMO Hub Logo" />
      <div class='absolute grid lg:grid-cols-2 top-1/2 lg:left-32 left-16'>
        <div class='cols-span-1'>
          <h1 class='text-4xl font-bold text-white pb-4'>ISO Certifications</h1>
    
        </div>
      </div>
    </div>
  </div>
  <div>
    
  </div>
  <tab :tabList="tabList" class="font-semibold text-sm">
      <template v-slot:tabPanel-1><BCMCertificate /></template>
      <template v-slot:tabPanel-2><OHSCertificate /></template>
      <template v-slot:tabPanel-3><EMSCertificate /></template>
      <template v-slot:tabPanel-4><ENMSCertificate /></template>
    </tab>
</template>
<script>
import Tab from '../components/managementcomponents/Tab.vue';
import BCMCertificate from '../components/certificationcomponents/BCMCertificate.vue';
import EMSCertificate from '../components/certificationcomponents/EMSCertificate.vue';
import ENMSCertificate from '../components/certificationcomponents/ENMSCertificate.vue'
import OHSCertificate from '../components/certificationcomponents/OHSCertificate.vue';

export default {
  components: {
    Tab,
    BCMCertificate,
    EMSCertificate,
    ENMSCertificate,
    OHSCertificate,
  },
  data() {
    return {
      Heropic: 'src/assets/images/certificatehero.png',
      tabList: ["BCM", "OSH", "EMS", "ENMS"],
    }
  }
}
</script>

