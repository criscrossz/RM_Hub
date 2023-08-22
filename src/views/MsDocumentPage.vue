<template>
  <div class='pb-12'>
    <div class='relative'>
      <img class="w-full brightness-50 h-full lg:h-80 object-cover" :src="Heropic" alt="RMO Hub Logo" />
      <div class='absolute grid lg:grid-cols-2 top-50 lg:left-32 left-16'>
        <div class='cols-span-1'>
          <h1 class='text-4xl font-bold text-white pb-4'>Management System Documents</h1>
        </div>
      </div>
    </div>
  </div>
  <div className='px-12 pb-16'>
    <div className='flex justify-between pb-12 pl-12'>
      <h1 className='text-3xl font-bold'>IMS Policy and Procedures Manual</h1>
      <Filter />
    </div>
    <div className='grid grid-cols-3 gap-12'>
      <div className='flex justify-center'>
        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=IMS&did=137&auth=view"
          target='_blank'>
          <div
            class="max-w-sm bg-white p-8 border shadow-md border-white rounded-lg h-auto w-64 hover:drop-shadow-2xl flex-col items-stretch dark:bg-white dark:border-gray-300 ">
            <div className='flex flex-col items-center'>
              <img src="src/assets/images/globerisk.png" />
            </div>
            <h1 className='text-center'>Globe Risk Assessment (GRA) Procedure</h1>
          </div>
        </a>
      </div>
      <div className='flex justify-center'>
        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=IMS&did=137&auth=view"
          target='_blank'>
          <div
            class="max-w-sm bg-white p-8 border shadow-md border-white rounded-lg h-auto w-64 hover:drop-shadow-2xl flex-col items-stretch dark:bg-white dark:border-gray-300 ">
            <div className='flex flex-col items-center'>
              <img src="src/assets/images/legalicon.png" />
            </div>
            <h1 className='text-center'>Legal and Other Requirements</h1>
          </div>
        </a>
      </div>
      <div className='flex justify-center'>
        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=IMS&did=135&auth=view"
          target='_blank'>
          <div
            class="max-w-sm bg-white p-8 border shadow-md border-white rounded-lg h-auto w-64 hover:drop-shadow-2xl flex-col items-stretch dark:bg-white dark:border-gray-300 ">
            <div className='flex flex-col items-center'>
              <img src="src/assets/images/targets.png" />
            </div>
            <h1 className='text-center'>Objectives, Targets & Programs</h1>
          </div>
        </a>
      </div>
      <div className='flex justify-center'>
        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=IMS&did=135&auth=view"
          target='_blank'>
          <div
            class="max-w-sm bg-white p-8 border shadow-md border-white rounded-lg h-auto w-64 hover:drop-shadow-2xl flex-col items-stretch dark:bg-white dark:border-gray-300 ">
            <div className='flex flex-col items-center'>
              <img src="src/assets/images/documentcontrol.png" />
            </div>
            <h1 className='text-center'>Document Control</h1>
          </div>
        </a>
      </div>
      <div className='flex justify-center'>
        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=IMS&did=134&auth=view"
          target='_blank'>
          <div
            class="max-w-sm bg-white p-8 border shadow-md border-white rounded-lg h-auto w-64 hover:drop-shadow-2xl flex-col items-stretch dark:bg-white dark:border-gray-300 ">
            <div className='flex flex-col items-center'>
              <img src="src/assets/images/training.png" />
            </div>
            <h1 className='text-center'>Training and Competence</h1>
          </div>
        </a>
      </div>
      <div className='flex justify-center'>
        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=IMS&did=134&auth=view"
          target='_blank'>
          <div
            class="max-w-sm bg-white p-8 border shadow-md border-white rounded-lg h-auto w-64 hover:drop-shadow-2xl flex-col items-stretch dark:bg-white dark:border-gray-300 ">
            <div className='flex flex-col items-center'>
              <img src="src/assets/images/emergency.png" />
            </div>
            <h1 className='text-center'>Emergency Procedure & Response</h1>
          </div>
        </a>
      </div>
      <div className='flex justify-center'>
        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=IMS&did=132&auth=view"
          target='_blank'>
          <div
            class="max-w-sm bg-white p-8 border shadow-md border-white rounded-lg h-auto w-64 hover:drop-shadow-2xl flex-col items-stretch dark:bg-white dark:border-gray-300 ">
            <div className='flex flex-col items-center'>
              <img src="src/assets/images/communications.png" />
            </div>
            <h1 className='text-center'>Communication, Consultation, and Participation</h1>
          </div>
        </a>
      </div>
      <div className='flex justify-center'>
        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=IMS&did=132&auth=view"
          target='_blank'>
          <div
            class="max-w-sm bg-white p-8 border shadow-md border-white rounded-lg h-auto w-64 hover:drop-shadow-2xl flex-col items-stretch dark:bg-white dark:border-gray-300 ">
            <div className='flex flex-col items-center'>
              <img src="src/assets/images/performance.png" />
            </div>
            <h1 className='text-center'>Performance Monitoring</h1>
          </div>
        </a>
      </div>
      <div className='flex justify-center'>
        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=IMS&did=132&auth=view"
          target='_blank'>
          <div
            class="max-w-sm bg-white p-8 border shadow-md border-white rounded-lg h-auto w-64 hover:drop-shadow-2xl flex-col items-stretch dark:bg-white dark:border-gray-300 ">
            <div className='flex flex-col items-center'>
              <img src="src/assets/images/internal.png" />
            </div>
            <h1 className='text-center'>Internal Audit</h1>
          </div>
        </a>
      </div>
      <div className='flex justify-center'>
        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=IMS&did=132&auth=view"
          target='_blank'>
          <div
            class="max-w-sm bg-white p-8 border shadow-md border-white rounded-lg h-auto w-64 hover:drop-shadow-2xl flex-col items-stretch dark:bg-white dark:border-gray-300 ">
            <div className='flex flex-col items-center'>
              <img src="src/assets/images/corrective.png" />
            </div>
            <h1 className='text-center'>Corrective Action Procedure</h1>
          </div>
        </a>
      </div>
      <div className='flex justify-center'>
        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=IMS&did=132&auth=view"
          target='_blank'>
          <div
            class="max-w-sm bg-white p-8 border shadow-md border-white rounded-lg h-auto w-64 hover:drop-shadow-2xl flex-col items-stretch dark:bg-white dark:border-gray-300 ">
            <div className='flex flex-col items-center'>
              <img src="src/assets/images/managementr.png" />
            </div>
            <h1 className='text-center'>Management Review</h1>
          </div>
        </a>
      </div>
      <div className='flex justify-center'>
        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=IMS&did=132&auth=view"
          target='_blank'>
          <div
            class="max-w-sm bg-white p-8 border shadow-md border-white rounded-lg h-auto w-64 hover:drop-shadow-2xl flex-col items-stretch dark:bg-white dark:border-gray-300 ">
            <div className='flex flex-col items-center'>
              <img src="src/assets/images/continual.png" />
            </div>
            <h1 className='text-center'>Continual Improvement</h1>
          </div>
        </a>
      </div>
    </div>
  </div>

  <!-- Procedure manual content -->
  <div className='flex justify-between pl-12 pb-24 pt-12'>
    <h1 className='text-3xl font-bold '>IMS Operational Procedures</h1>
  </div>
  <div class="grid grid-cols-2 gap-8 px-12">
    <div className='flex-col flex items-center justify-center pb-4'>
      <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=IMS&did=144&auth=view"
        target='_blank'>
          <div className='flex flex-col items-center'>
            <img src="src/assets/images/general.png" class="w-auto h-64" />
          </div>
      </a>
      <div class="pt-1 w-full">
      <Accordions title="Management of Suppliers and Control of Contractors">
                    <div class="slot-content">
                        <a href="#">
                            <p className="underline">Corrective Action Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">Online Post Assessment Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">GEAR</p>
                        </a>
                    </div>
      </Accordions>
    </div>
    <div class="pt-0.5 w-full">
      <Accordions title="Preventive Maintenance">
                    <div class="slot-content">
                        <a href="#">
                            <p className="underline">Corrective Action Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">Online Post Assessment Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">GEAR</p>
                        </a>
                    </div>
      </Accordions>
    </div>
    <div class="pt-0.5 w-full">
      <Accordions title="Construction Requirements">
                    <div class="slot-content">
                        <a href="#">
                            <p className="underline">Corrective Action Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">Online Post Assessment Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">GEAR</p>
                        </a>
                    </div>
      </Accordions>
    </div>
    
    </div>


    <div className='flex-col flex items-center justify-center pb-4'>
      <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=IMS&did=144&auth=view"
        target='_blank'>
          <div className='flex flex-col items-center'>
            <img src="src/assets/images/safetymanagement.png" class="w-auto h-64" />
          </div>
      </a>
      <div class="pt-1 w-full">
      <Accordions title="Motor Vehicle Safety">
                    <div class="slot-content">
                        <a href="#">
                            <p className="underline">Corrective Action Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">Online Post Assessment Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">GEAR</p>
                        </a>
                    </div>
      </Accordions>
    </div>
    <div class="pt-0.5 w-full">
      <Accordions title="Outside Works">
                    <div class="slot-content">
                        <a href="#">
                            <p className="underline">Corrective Action Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">Online Post Assessment Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">GEAR</p>
                        </a>
                    </div>
      </Accordions>
    </div>
    <div class="pt-0.5 w-full">
      <Accordions title="Facility and Building Premises">
                    <div class="slot-content">
                        <a href="#">
                            <p className="underline">Corrective Action Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">Online Post Assessment Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">GEAR</p>
                        </a>
                    </div>
      </Accordions>
    </div>
    
    </div>

    <div className='flex-col flex items-center justify-center pb-4'>
      <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=IMS&did=144&auth=view"
        target='_blank'>
          <div className='flex flex-col items-center'>
            <img src="src/assets/images/energymanage.png" class="w-auto h-64" />
          </div>
      </a>
      <div class="pt-1 w-full">
      <Accordions title="Operations Manual">
                    <div class="slot-content">
                        <a href="#">
                            <p className="underline">Corrective Action Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">Online Post Assessment Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">GEAR</p>
                        </a>
                    </div>
      </Accordions>
    </div>
    
    
    </div>
    <div className='flex-col flex items-center justify-center pb-4'>
      <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=IMS&did=144&auth=view"
        target='_blank'>
          <div className='flex flex-col items-center'>
            <img src="src/assets/images/business.png" class="w-auto h-64" />
          </div>
      </a>
      <div class="pt-1 w-full">
      <Accordions title="Operations Manual">
                    <div class="slot-content">
                        <a href="#">
                            <p className="underline">Corrective Action Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">Online Post Assessment Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">GEAR</p>
                        </a>
                    </div>
      </Accordions>
    </div>
    
    
    </div>

    <div className='flex-col flex items-center justify-center pb-4'>
      <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=IMS&did=144&auth=view"
        target='_blank'>
          <div className='flex flex-col items-center'>
            <img src="src/assets/images/crisis.png" class="w-auto h-64" />
          </div>
      </a>
      <div class="pt-1 w-full">
      <Accordions title="Operations Manual">
                    <div class="slot-content">
                        <a href="#">
                            <p className="underline">Corrective Action Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">Online Post Assessment Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">GEAR</p>
                        </a>
                    </div>
      </Accordions>
    </div>
    
    
    </div>


    <div className='flex-col flex items-center justify-center pb-4'>
      <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=IMS&did=144&auth=view"
        target='_blank'>
          <div className='flex flex-col items-center'>
            <img src="src/assets/images/environmental.png" class="w-auto h-64" />
          </div>
      </a>
      <div class="pt-1 w-full">
      <Accordions title="Environment Management">
                    <div class="slot-content">
                        <a href="#">
                            <p className="underline">Corrective Action Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">Online Post Assessment Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">GEAR</p>
                        </a>
                    </div>
      </Accordions>
    </div>
    
    
    </div>


    <div className='flex-col flex items-center justify-center pb-16 col-span-2'>
      <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=IMS&did=144&auth=view"
        target='_blank'>
          <div className='flex flex-col items-center'>
            <img src="src/assets/images/emergency2.png" class="w-auto h-64" />
          </div>
      </a>
      <div class="pt-1 w-1/2">
      <Accordions title="Emergency Response">
                    <div class="slot-content">
                        <a href="#">
                            <p className="underline">Corrective Action Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">Online Post Assessment Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">GEAR</p>
                        </a>
                    </div>
      </Accordions>
    </div>
    <div class="pt-1 w-1/2">
      <Accordions title="Disaster Management">
                    <div class="slot-content">
                        <a href="#">
                            <p className="underline">Corrective Action Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">Online Post Assessment Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">GEAR</p>
                        </a>
                    </div>
      </Accordions>
    </div>

    <div class="pt-1 w-1/2">
      <Accordions title="Emerging Infectious Diseases">
                    <div class="slot-content">
                        <a href="#">
                            <p className="underline">Corrective Action Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">Online Post Assessment Report</p>
                        </a>
                        <a href="#">
                            <p className="underline">GEAR</p>
                        </a>
                    </div>
      </Accordions>
    </div>
    </div>
  </div>


  <div class="flex justify-center pb-12">
    <h1 class="font-bold text-3xl">IMS Reference</h1>
  </div>
  <div class="grid grid-cols-4 gap-4 px-12 pb-4">
    <div className='flex-col flex items-center justify-center pb-4'>
      <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=IMS&did=144&auth=view"
        target='_blank'>
          <div className='flex flex-col items-center justify-center border bg-BCM h-64   w-64'>
            <h1 class="text-white">Documents</h1>
          </div>
      </a>
    </div>
    <div className='flex-col flex items-center justify-center pb-4'>
      <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=IMS&did=144&auth=view"
        target='_blank'>
          <div className='flex flex-col items-center justify-center border bg-BCM h-64   w-64'>
            <h1 class="text-white">Documents</h1>
          </div>
      </a>
    </div>
    <div className='flex-col flex items-center justify-center pb-4'>
      <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=IMS&did=144&auth=view"
        target='_blank'>
          <div className='flex flex-col items-center justify-center border bg-BCM h-64   w-64'>
            <h1 class="text-white">Documents</h1>
          </div>
      </a>
    </div>
    <div className='flex-col flex items-center justify-center pb-4'>
      <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=IMS&did=144&auth=view"
        target='_blank'>
          <div className='flex flex-col items-center justify-center border bg-BCM h-64   w-64'>
            <h1 class="text-white">Documents</h1>
          </div>
      </a>
    </div>
  </div>
</template>

<script>
import Filter from '../components/ReusableComponent/Filter.vue';
import Accordions from '../components/ReusableComponent/Accordions.vue';
export default {
  components: {
    Filter,
    Accordions,
  },
  data() {
    return {
      Heropic: "src/assets/images/msheros.png",
    }
  }

}
</script>

<style></style>