<template>
  <div>
    <slider-texting :items="textItems"/>
    <Carousel1 />
    <MidNavigation />

    <div>
      <div class="pt-12">
        <div class="text-center">
          <div class="font-semibold text-2xl">
            <h2>Our Integrated Management System</h2>
          </div>
          <hr class="w-32 h-1 my-4 mx-auto border-0 md:my-4 dark:bg-black" />
        </div>
        <div class="sm:px-60 pb-16">
          <div class="flex justify-center">
            <div class="text-base text-center">Welcome to our Risk Management Hub! Here, we take the protection of our
              network to superhero levels with our Integrated Management Systems. <br /><br />Imagine a team of
              super-powered programs, each with unique abilities, working together to ensure Globe remains the network of
              choice of Filipinos. Meet our incredible champions: Business Continuity Management, Environmental
              Management, Occupational Health and Safety, and Energy Management.</div>
          </div>
        </div>

        <div class="pb-4 sm:pb-20 dark:border-gray-700">
          <div class="rounded-lg">
            <div class="grid grid-cols-2 p-4 items-center gap-4 sm:grid-cols-2">
              <div class="flex box-border bg-BCM h-56 rounded-3xl flex-col items-center justify-center">
                <div class="mb-2"><img :src="'src/assets/images/homebcm.png'" class="w-auto h-40"
                    alt="Business Continuity Management">
                </div>
              </div>
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-2xl text-center font-semibold text-black">Business Continuity Management</dt>
                <dd class="text-black text-center pb-8 ">Business Continuity Management (BCM) is our hero with an
                  unwavering focus on safeguarding our operations against potential threats. </dd>
                  
                <a href="/ISO-MS"><Button buttonText="See More"
                  buttonClass="text-black hover:text-white border border-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-14 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-300 dark:focus:ring-gray-800" /></a>
              </div>
            </div>
          </div>
        </div>

        <div class="pb-4 sm:pb-20 dark:border-gray-700">
          <div class="rounded-lg">
            <div class="grid grid-cols-2 p-4 items-center gap-4 sm:grid-cols-2">

              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-2xl font-semibold text-center text-black">Occupational Safety and Health
                  Management</dt>
                <dd class="text-black text-center pb-8 ">Occupational Safety and Health (OSH) leaps into action,
                  protecting our people and properties with unwavering dedication.</dd>
                <a href="/ISO-MS"><Button buttonText="See More"
                  buttonClass="text-black hover:text-white border border-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-14 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-300 dark:focus:ring-gray-800" /></a>
              </div>
              <div class="flex box-border bg-OSH h-56 rounded-3xl flex-col items-center justify-center">
                <div class="mb-2"><img src="src/assets/images/homeosh.png" class="w-auto h-40" /></div>
              </div>
            </div>
          </div>
        </div>

        <div class=" pb-4 sm:pb-20 dark:border-gray-700">
          <div class="rounded-lg">
            <div class="grid grid-cols-2 items-center p-4 gap-4 sm:grid-cols-2">
              <div class="flex box-border bg-EMS h-56 rounded-3xl flex-col items-center justify-center">
                <div class="mb-2"><img src="src/assets/images/homeems.png" class="w-auto h-40" /></div>
              </div>
              <div class="flex flex-col text-center items-center justify-center">
                <dt class="mb-2 text-2xl font-semibold text-black">Environment Management</dt>
                <dd class="text-black text-center pb-8 ">Environmental Management (EM) is our eco-warrior towards a
                  greener, more sustainable future for our generation and the generations to come.</dd>
                <a href="/ISO-MS"><Button buttonText="See More"
                  buttonClass="text-black hover:text-white border border-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-14 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-300 dark:focus:ring-gray-800" /></a>
              </div>
            </div>
          </div>
        </div>

        <div class="pb-4 sm:pb-20 dark:border-gray-700">
          <div class="rounded-lg">
            <div class="grid grid-cols-2 items-center gap-4 p-4 sm:grid-cols-2">

              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-2xl font-semibold text-center text-black">Energy Management</dt>
                <dd class="text-black text-center pb-8 ">Through EnMS, we lead the whole system in our charge towards a
                  low-carbon future, harnessing alternative energy sources and energy-saving technologies</dd>
                <a href="/ISO-MS"><Button buttonText="See More"
                  buttonClass="text-black hover:text-white border border-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-14 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-300 dark:focus:ring-gray-800" /></a>
              </div>
              <div class="flex box-border bg-ENMS h-56 rounded-3xl flex-col items-center justify-center">
                <div class="mb-2"><img src="src/assets/images/homem.png" class="w-auto h-40" /></div>
              </div>
            </div>
          </div>
        </div>

        <div class=" pb-4 sm:pb-20 dark:border-gray-700">
          <div class="rounded-lg">
            <div class="grid grid-cols-2 items-center gap-4 p-4 sm:grid-cols-2">
              <div class="flex box-border bg-CMS h-56 rounded-3xl flex-col items-center justify-center">
                <div class="mb-2"><img src="src/assets/images/homecm.png" class="w-64 h-auto" /></div>
              </div>
              <div class="flex flex-col text-center items-center justify-center">
                <dt class="mb-2 text-2xl font-semibold text-black">Crisis Management</dt>
                <dd class="text-black text-center pb-8 ">CM mobilizes our forces to tackle unexpected challenges head-on.
                  From natural disasters to unforeseen events, CM's crisis communication and action plans keep everyone
                  informed and safe. </dd>
                <a href="/ISO-MS"><Button buttonText="See More"
                  buttonClass="text-black hover:text-white border border-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-14 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-300 dark:focus:ring-gray-800" /></a>
              </div>
            </div>
          </div>
        </div>

        <div class="pb-4 sm:pb-20 dark:border-gray-700">
          <div class="rounded-lg">
            <div class="grid grid-cols-2 items-center gap-4 p-4 sm:grid-cols-2">
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-2xl font-semibold text-center text-black">Enterprise Risk Management</dt>
                <dd class="text-black text-center pb-8 ">ERM tackles risks on a grand scale, identifying and assessing
                  threats that could affect our entire organization. From financial risks to market shifts, ERM helps us
                  leap forward and conquer any risk.</dd>
                <a href="/ISO-MS"><Button buttonText="See More"
                  buttonClass="text-black hover:text-white border border-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-14 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-300 dark:focus:ring-gray-800" /></a>
              </div>
              <div class="flex box-border bg-ERM h-56 rounded-3xl flex-col items-center justify-center">
                <div class="mb-2"><img src="src/assets/images/homeerm.png" class="w-44 h-auto" /></div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
    <div class="pt-12 sm:pt-0 dark:border-gray-700 bg-grays">
      <div class="rounded-lg">
        <div class="grid grid-cols-1 items-center sm:grid-cols-2">

          <div class="flex flex-col pl-0 sm:pl-8 items-center justify-center ">
            <dt class="mb-2 text-3xl font-extrabold text-center text-black">Introducing RM Academy 💡</dt>
            <hr class="w-32 h-1 my-4 mx-auto bg-black border-0 md:my-4 dark:bg-black" />
            <dt class="mb-2 text-md font-bold text-center text-black">Learn more about the various areas of Risk
              Management through our eLearning Modules</dt>
            <dd class="text-black text-center pb-8 ">Through RM Academy’s E-Learning Modules, you have the freedom to
              learn at your own pace, whenever and wherever suits you best. Each module is crafted to ensure a
              high-quality learning experience that meets every Ka-Globe’s needs. You can also look for our up-and-coming
              training schedules as well as our knowledge database.</dd>
            <a href="/RM-ACADEMY"><Button buttonText="See More"
              buttonClass="text-black hover:text-white border border-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-14 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-300 dark:focus:ring-gray-800" /></a>
          </div>
          <div class="flex justify-center">
            <div class="mb-2"><img src="src/assets/images/ComputerRM.png" class="w-full h-auto " /></div>
          </div>
        </div>
      </div>
    </div>


    <div class="flex justify-center pt-12">
      <dt class="text-3xl font-bold">Other Links</dt>

    </div>
    <div class="flex justify-center">
      <hr class="w-32 h-1 bg-gray-100 border-0 md:my-4 dark:bg-black" />
    </div>
    <div class="grid lg:grid-cols-2 items-center sm:grid-cols-2 pt-10 pb-20">


      <div class="flex flex-col items-center justify-center">
        <div class="flex relative text-center">
          <div class="mb-2"><img src="src/assets/images/rmwork.png"
              class="w-full shadow-lg shadow-gray-800 h-80 brightness-50  " />
            <div class="absolute text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 class="text-2xl pb-2 font-bold">RM On Workplace</h1>
              <a href="/send-sos"><Button buttonText="See More"
                buttonClass="text-white hover:text-black border border-white hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-14 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-300 dark:focus:ring-gray-800" /></a>
            </div>

          </div>
        </div>
      </div>
      <div class="flex flex-col pl-0 items-center justify-center">
        <div class="flex  relative text-center">
          <div class="mb-2"><img src="src/assets/images/prwork.png"
              class="w-full brightness-50 shadow-lg shadow-gray-800 h-80" />
            <div class="absolute text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 class="text-2xl pb-2 font-bold">PR Releases</h1>
              <a href="/send-sos"><Button buttonText="See More"
                buttonClass="text-white hover:text-black border border-white hover:bg-oranges focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-14 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-oranges dark:focus:ring-gray-800" /></a>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="justify-center">
      <div class="flex relative text-center">
        <img src="src/assets/images/BottomLink.png" class="w-full h-auto lg:h-auto" />
        <div
          class="absolute border-box bg-white bg-opacity-75 text-xl top-1/2 left-1/2 -translate-x-1/2 p-8 px-20 lg:px-32 lg:py-16 -translate-y-1/2">
          <h1 class="text-2xl pb-2 font-bold text-black">Get in touch</h1>
          <p class="text-sm pb-4 text-black">Questions not answered yet? We are here to Help!.</p>
          <a href="/send-sos"><Button buttonText="See More"
            buttonClass="text-white hover:text-white border border-white bg-globe hover:bg-globe focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-14 py-2 text-center mr-2 mb-2 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800" /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel1 from '../components/Homepagecomponents/Carousel1.vue';
import MidNavigation from '../components/Homepagecomponents/MidNavigation.vue';
import SliderTexting from '../components/Homepagecomponents/SliderTexting.vue';
import Button from '../components/ReusableComponent/Button.vue';
import AboutPage from './AboutPage.vue';



export default {
  components: {
    SliderTexting,
    Carousel1,
    Button,
    MidNavigation,
  },
  data() {
    return {
      textItems: [
        'Announcement:  🚀 Navigate uncertainty with confidence at our brand-new Risk Management Website! 🌐 ',
        'Announcement: 📢 Introducing the Ultimate Risk Management Hub! 🛡️',
        'Announcement: Explore comprehensive resources, expert insights, and cutting-edge strategies to mitigate risks',
        'Announcement: 📣 Unveiling the All-New RiskGuardian Platform! 🛡️',
        'Announcement: Navigate through complex risk scenarios effortlessly using our interactive tools, helping you identify, evaluate, and prioritize potential threats.',
      ],
    };
  },
};
</script>

<style>/* Your custom styles for the HomePage.vue if needed */</style>
