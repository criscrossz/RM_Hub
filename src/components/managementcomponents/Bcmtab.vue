<template>
    <div>
        <div class="w-full pt-12">
            <div class="text-center pb-4">
                <h1 class="text-4xl font-bold">🌐 Business Continuity Management System 🌐</h1>
                <hr class="w-32 h-1 my-4 mx-auto bg-gray-100 border-0 md:my-4 dark:bg-BCM" />
            </div>
        </div>
        <div class="pb-8">
            <div class="w-full bg-BCM px-12 py-14 shadow-lg">
                <div class="grid grid-cols-3 gap-12">
                    <div class="flex justify-center items-center">
                        <img src="src/assets/images/bcmsystem.png" class="rounded-3xl w-full h-72" />
                    </div>
                    <div class="card rounded-xl bg-white p-8 col-span-2">
                        <div>
                            <h2 class="text-2xl font-bold text-blue-500 drop-shadow-lg pb-4">Our Resilience Crusader
                            </h2>
                        </div>
                        <div class="flex items-center">
                            <img src="src/assets/images/shield.png" class="h-28 px-8 w-auto" />
                            <div class="grid grid-cols-2">
                                <p class="col-span-2 text-sm">Business Continuity Management (BCM) is our hero with an
                                    unwavering focus on safeguarding our operations against potential threats.
                                    Like a true superhero, BCM helps us to be in a constant state of readiness to respond to
                                    any disruptions to our services. Through this program, we can easily identify risks that
                                    could disrupt our organization and devise strategies to keep our critical products and
                                    services flowing as efficiently and as smoothly as possible.
                                    With a fortress of resilience, our BCM program ensures the interests of our key
                                    stakeholders, reputation, brand, and value-creating activities remain unscathed — <span
                                        class="font-bold">which is why we champion resilience.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-16 pb-12">
            <div class="grid grid-cols-2">
                <div class="p-12">
                    <div class="flex justify-center pb-4">
                        <img src="src/assets/images/search.png" />
                    </div>
                    <div>
                        <h2 class="font-bold text-xl  text-center pb-4">Policy</h2>
                        <p class="text-center">We take personal responsibility for protecting your rights and fostering
                            secure working environments. We invite you, along with our dedicated management team and
                            business partners, to join us in fulfilling this shared commitment, ensuring a culture of care
                            and security for all. </p>
                    </div>
                </div>
                <div class="p-12">
                    <div class="flex justify-center pb-4">
                        <img src="src/assets/images/notes.png" />
                    </div>
                    <div>
                        <h2 class="font-bold text-xl  text-center pb-4">Goal</h2>
                        <p class="text-center">Your safety, as our valued stakeholders, is our utmost concern. Through
                            our Occupational Safety and Health Program, we are committed to continuously assessing and
                            improving our operations to prevent injuries, accidents, and illnesses, both within our
                            workplace and the communities we serve. </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center pb-8">
            <h1 class="text-4xl font-bold">Our Framework</h1>
            <hr class="w-32 h-1 my-4 mx-auto bg-gray-100 border-0 md:my-4 dark:bg-BCM" />
        </div>
        <div className="grid grid-cols-2 px-12 pb-16">
            <div className="px-8">
                <Accordions title="PLAN">
                    <div class="slot-content">
                        <div>
                            <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=BCM"
                                target="_blank">
                                <p className="underline">BCM Manual & Policies</p>
                            </a>
                            <a href="https://globe-fin-orb-prod.uc.r.appspot.com/ims-forms/index?view=pbia" target="_blank">
                                <p className="underline">Product & Services Business Impact Analysis</p>
                            </a>
                            <a href="https://globe-fin-orb-prod.uc.r.appspot.com/ims-forms/index?view=pbia" target="_blank">
                                <p className="underline">Site Risk Assessment</p>
                            </a>
                            <a href="https://globe-fin-orb-prod.uc.r.appspot.com/forms/bia-new/index" target="_blank">
                                <p className="underline">BIA-MOR-BCP</p>
                            </a>
                            <a href="https://globe-fin-orb-prod.uc.r.appspot.com/forms/sra/index" target="_blank">
                                <p className="underline">SRA</p>
                            </a>
                            <a href="https://globe-fin-orb-prod.uc.r.appspot.com/document-management/index?sec=BCM&did=11&auth=view"
                                target="_blank">
                                <p className="underline">BCM Manual</p>
                            </a>
                        </div>
                    </div>
                </Accordions>
                <Accordions title="DO">
                    <div>
                        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/forms/bia-new/index" target="_blank">
                            <p className="underline">Functional Business Impact Analysis</p>
                        </a>
                        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/ims-forms/index?view=fbia" target="_blank">
                            <p className="underline">Failure Modes & Effects Analysis</p>
                        </a>
                        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/configuration/modules?id=SCC100&menu=1"
                            target="_blank">
                            <p className="underline">Supply Chain Continuity Management</p>
                        </a>
                        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/tna/index" target="_blank">
                            <p className="underline">Training & Awareness</p>
                        </a>
                        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/exercising-program/index" target="_blank">
                            <p className="underline">Exercising Program</p>
                        </a>
                        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/permit-monitoring-system/search">
                            <p className="underline">Site Permits</p>
                        </a>
                    </div>
                </Accordions>
                <Accordions title="CHECK">
                    <div>
                        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/audit-program/audit-summary">
                            <p className="underline">BCM Audit</p>
                        </a>
                        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/forms/bcmm/index">
                            <p className="underline">BC Maturity Model</p>
                        </a>
                        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/pdca/under_construction">
                            <p className="underline">Management Review</p>
                        </a>
                        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/storm/index">
                            <p className="underline">STORM</p>
                        </a>
                        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/globe-hazard-atlas/index">
                            <p className="underline">Globe Hazard Atlas</p>
                        </a>
                    </div>
                </Accordions>
                <Accordions title="ACT">
                    <div class="slot-content">
                        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/corrective-action/car-summary">
                            <p className="underline">Corrective Action Report</p>
                        </a>
                        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/corrective-action/car-summary">
                            <p className="underline">Online Post Assessment Report</p>
                        </a>
                        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/globe-emergency-accident-reporting/index">
                            <p className="underline">GEAR</p>
                        </a>
                        <a href="https://globe-fin-orb-prod.uc.r.appspot.com/online-attendance/index">
                            <p className="underline">Online Attendance</p>
                        </a>
                    </div>
                </Accordions>
            </div>
            <div className="relative">
                <div className="flex flex-col justify-center">
                    <img src="src/assets/images/bcmpdca.png" className="brightness-50 h-64 rounded-3xl" />
                    <div className=" flex justify-center bottom-16 text-white relative">
                        <Button buttonText="Learn more about RA PDCA Framework"
                            buttonClass="inline-flex items-center px-4 py-2 bg-globe rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-900 hover:text-black active:bg-gray-900 focus:outline-none focus:border-gray-900 disabled:opacity-50 transition ease-in-out duration-150" />
                    </div>
                </div>
            </div>
        </div>
        <div className="pb-16">
            <div className="relative">
                <img src="src/assets/images/crusader.png" className="w-full" />
                <div class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold">
                    <h1 className="pb-4">Be a Resilience Crusader</h1>
                    <p className="text-sm font-base font-medium text-center">Visit our RM Academy’s eCourses now to learn
                        more about our BCM Modules</p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 px-8 pb-24">
            <VideoPlayer youtubeLink="https://www.youtube.com/watch?v=CHUZdJuqgdQ" />
            <div className="text-start px-8 flex flex-col justify-center">
                <h1 className="font-bold text-2xl">Watch our Globe Shake Drill video</h1>
                <hr className="w-32 h-1  bg-gray-100 border-0 md:my-4 dark:bg-oranges" />
                <p className="text-start pb-8">Prepare. Protect. Prevail — Discover the essential steps to ensure safety,
                    minimize disruption, and maintain business continuity in the face of seismic challenges with our
                    earthquake drill video. We want you, our values stakeholders, to be empowered and navigate the
                    unpredictable.</p>
                <!-- <div><Button buttonText="Learn More"
                        buttonClass="inline-flex items-center py-2 px-4 bg-globe rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-900 hover:text-black active:bg-gray-900 focus:outline-none focus:border-gray-900 disabled:opacity-50 transition ease-in-out duration-150" /> -->
                <!-- </div> -->
            </div>
        </div>
        <div className="px-16 pb-16">
            <div className="grid grid-cols-2 gap-12">
                <div className="text-start">
                    <h1 className="text-5xl pb-8 font-extrabold">We safeguard our <br /><span
                            className="text-red-700">future</span>—<span className="text-blue-600">today</span>.</h1>
                    <div>
                        <h2 className="text-lg font-bold">We champion our operational resilience and excellence through our
                            robust BCM program</h2>
                        <hr className="w-32 h-1  bg-gray-100 border-0 md:my-4 dark:bg-BCM" />
                        <p className="text-sm pb-8">As a customer-first telecommunications company, Globe works hard to make
                            key network products and services available despite natural disasters and widespread calamities
                            through its Business Continuity Management System (BCMS). The telco is dedicated to ensuring the
                            efficiency of the BCMS and the maintenance of its enterprise-wide ISO 22301 certification, the
                            international standard for business continuity management, security and resilience.</p>
                        <!-- <a href="#"><Button buttonText="Learn More"
                                buttonClass="inline-flex items-center py-2 px-4 bg-globe rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-900 hover:text-black active:bg-gray-900 focus:outline-none focus:border-gray-900 disabled:opacity-50 transition ease-in-out duration-150" /></a> -->
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img src="src/assets/images/safeguard.png" className="w-auto h-80" />
                </div>
            </div>
        </div>

        <div className="text-start px-12 pb-8">
                <h1 className="text-2xl font-bold">Explore more of our programs</h1>
                <hr className="w-32 h-1 my-4 bg-gray-100 border-0 md:my-4 dark:bg-BCM" />
        </div>
        <div className="grid grid-cols-3 px-12 pb-16">
            <div className='px-4 pb-12 lg:pb-0'>
                    <div class="max-w-sm border shadow-lg rounded-3xl h-full hover:drop-shadow-2xl flex-col items-stretch dark:bg-white dark:border-gray-300">
                        <div className="flex flex-col items-center">
                        <a href="#">
                            <img className="rounded-sm py-4 w-auto h-40" src="src/assets/images/OSH2.png" alt="" />
                        </a>
                        <div className="p-4 box-border rounded-b-3xl w-full h-56 items-stretch bg-OSH">
                            <a href="MS-Docs">
                                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Occupational Health and Safety</h5>
                            </a>
                            <p className="mb-3 font-normal text-center text-black dark:text-white">Occupational Safety and Health (OSH) leaps into action, protecting our people and properties with unwavering dedication.</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='px-4 pb-12 lg:pb-0'>
                    <div class="max-w-sm border shadow-lg rounded-3xl h-full hover:drop-shadow-2xl flex-col items-stretch dark:bg-white dark:border-gray-300">
                        <div className="flex flex-col items-center">
                        <a href="#">
                            <img className="rounded-sm py-4 w-auto h-40" src="src/assets/images/environment.png" alt="" />
                        </a>
                        <div className="p-4 box-border rounded-b-3xl w-full h-56 items-stretch bg-EMS">
                            <a href="MS-Docs">
                                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Environment</h5>
                            </a>
                            <p className="mb-3 font-normal text-center text-black dark:text-white">Environmental Management (EM) is our eco-warrior, aligned with the international standard for Environmental Management System (ISO 14001)</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='px-4 pb-12 lg:pb-0'>
                    <div class="max-w-sm border shadow-lg rounded-3xl h-full hover:drop-shadow-2xl flex-col items-stretch dark:bg-white dark:border-gray-300">
                        <div className="flex flex-col items-center">
                        <a href="/MS-Docs">
                            <img className="rounded-lg py-4 w-auto h-40" src="src/assets/images/thunder.png" alt="" />
                        </a>
                        <div className="p-4 box-border rounded-b-3xl h-56 bg-yellow-400">
                            <a href="#">
                                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Energy</h5>
                            </a>
                            <p className="mb-3 font-normal text-center text-black dark:text-white">Through EnMaS, we lead the whole system in our charge towards a low-carbon future, harnessing alternative energy sources and energy-saving technologies</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center px-12 pb-8">
                <h1 className="text-2xl font-bold">Other links</h1>
                <hr className="w-32 h-1 my-4 mx-auto bg-gray-100 border-0 md:my-4 dark:bg-BCM" />
            </div>

            <div className="px-16 pb-12">
                <div className="grid grid-cols-3">
                    <div className="text-center">
                    <a href="/MS-Docs"><Button buttonText="Downloadable Forms"
                                buttonClass="inline-flex items-center py-7 px-12 bg-BCM rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-900 hover:text-black active:bg-gray-900 focus:outline-none focus:border-gray-900 disabled:opacity-50 transition ease-in-out duration-150" /></a>
                    </div>
                    <div className="text-center">
                    <a href="/MS-Docs"><Button buttonText="Reports"
                                buttonClass="inline-flex items-center py-7 px-24 bg-BCM rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-900 hover:text-black active:bg-gray-900 focus:outline-none focus:border-gray-900 disabled:opacity-50 transition ease-in-out duration-150" /></a>
                    </div>
                    <div className="text-center">
                    <a href="/MS-Docs"><Button buttonText="Procedures Manuals"
                                buttonClass="inline-flex items-center py-7 px-12 bg-BCM rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-900 hover:text-black active:bg-gray-900 focus:outline-none focus:border-gray-900 disabled:opacity-50 transition ease-in-out duration-150" /></a>
                    </div>

                </div>
            </div>








    </div>
</template>

<script>
import Accordions from '../ReusableComponent/Accordions.vue';
import Button from '../ReusableComponent/Button.vue';
import VideoPlayer from './VideoPlayer.vue';

export default {
    components: {
        Accordions,
        Button,
        VideoPlayer,
        
    },
    data() {
        return {
            AccordionsItems: [
                { title: "Item 1", content: "Content for Item 1" },
                { title: "Item 2", content: "Content for Item 2" },
                { title: "Item 3", content: "Content for Item 3" }
            ]
        }
    }
}
</script>

<style></style>