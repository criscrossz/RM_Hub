<template>
    <div id="oshtab">
        <div class="w-full pt-12">
            <div class="text-center pb-4">
                <h1 class="text-4xl font-bold">⚠️ Occupational Safety and Health Management ⚠️</h1>
                <hr class="w-32 h-1 my-4 mx-auto bg-gray-100 border-0 md:my-4 dark:bg-OSH" />
            </div>
        </div>
        <div class="pb-8" id="oshtab">
            <div class="w-full bg-OSH px-12 py-14 shadow-lg">
                <div class="grid grid-cols-3 gap-12">
                    <div class="flex justify-center">
                        <img src="src/assets/images/oshsystem.png" width="500" height="500" />
                    </div>
                    <div class="card rounded-xl bg-white p-8 col-span-2">
                        <div>
                            <h2 class="text-2xl font-bold text-OSH drop-shadow-lg pb-4">Our Defender of Well-Being
                            </h2>
                        </div>
                        <div class="flex items-center">
                            <img src="src/assets/images/OSH3.png" class="h-28 px-8 w-auto" />
                            <div class="grid grid-cols-2">
                                <p class="col-span-2 text-sm">Occupational Health and Safety Management (OSH) leaps into
                                    action, protecting our people and properties with unwavering dedication.
                                    OSH's program include comprehensive training, emergency preparedness
                                    drills, and site operational risk assessments. The primary goals of OSH are to manage
                                    the safety and well-being of all employees, identify and mitigate safety hazards, and
                                    maintain our commitments aligned with international standards.
                                    With SEM by our side, we fearlessly face any challenge that comes our way in
                                    our mission to be safe in our workplace environment.
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
                        <img src="src/assets/images/searchosh.png" />
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
                        <img src="src/assets/images/notesosh.png" />
                    </div>
                    <div>
                        <h2 class="font-bold text-xl  text-center pb-4">Goal</h2>
                        <p class="text-center">Your safety, as our valued stakeholders, is our utmost concern. Through our
                            Occupational Safety and Health Program, we are committed to continuously assessing and improving
                            our operations to prevent injuries, accidents, and illnesses, both within our workplace and the
                            communities we serve.  </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center pb-8">
            <h1 class="text-4xl font-bold">Our Framework</h1>
            <hr class="w-32 h-1 my-4 mx-auto bg-gray-100 border-0 md:my-4 dark:bg-OSH" />
        </div>
        <div className="grid grid-cols-2 px-12 pb-16">
            <div className="px-8">
                <Accordions title="PLAN">
                    <div class="slot-content">
                        <div>
                            <p class="pb-2">
                                1. Globe Risk Assessment
                            </p>
                            <p class="pb-2">
                                2. Objectives, Targets and Programs
                            </p>
                            <p class="pb-2">
                                DOLE Requirements <br />
                                - OHS Program <br />
                                - Annual Medical Report <br />
                                - Annual Work Accident/Incident Report <br />
                                - Monthly Minutes of the Safety Committee Meetings <br />
                                - WEM Reports <br />
                            </p>
                            <p>4.  Safety Training & Skills Development</p><br />
                            <p>
                                5.  IMS Committee <br />
                                - List of Safety Officers<br />
                                - List of ERTs<br />
                                - List of Certified First Aiders<br />
                                - List of RF Radiation Safety Officers<br />
                            </p>
                        </div>
                    </div>
                </Accordions>
                <Accordions title="DO">
                    <div>
                        <p class="pb-2">
                            1. Safety and Loss Control Management
                            </p>
                            <p class="pb-2">
                                - Motor Vehicle Safety Program <br />
                                - Authorization-To-Drive (ATD) <br />
                                - Construction Safety & Health Orientation<br />
                                - Approval of Plan (Safety Aspect)<br />
                                - Hot Works Permits<br />
                                - Electrical Safety<br />
                                - Confined Space Safety<br />
                                - Office Safety<br />
                                - Life Safety Systems<br />
                                - Personal Protective Equipment (PPEs) and Emergency Kits<br />
                                - Safety Data Sheets<br />
                            </p>
                            <p>2. Emergency and Disaster Response Support</p><br />
                            <p>
                                - Emergency Drills and Exercises  Reports
                                - Medical Emergency & First Aid Response
                                - Natural Calamity Advisories
                                - Events Safety Support
                            </p>
                    </div>
                </Accordions>
                <Accordions title="CHECK">
                    <div>
                        <p class="pb-2">1. Safety Audits</p>
                        <ul>
                            <li>- ISO 45001 Audit Reports</li>
                            <li>- Safety Audit & Inspection Reports</li>
                            <li>- Site Operational and Risk Assessment (SORA)</li>
                        </ul>
                        <p>
                            2.  Performance Indicators
                        </p>
                        <ul>
                            <li>- Accident & Incident Investigation Reports</li>
                            <li>- Occupational Illness Reports</li>
                            <li>- Work Environment Measurement (WEM) Reports</li>
                            <li>RF Radiation Measurement Reports</li>
                            <li>- Calibration of Monitoring and Measuring Tools / Equipment</li>
                        </ul>
                    </div>
                </Accordions>
                <Accordions title="ACT">
                    <div class="slot-content">
                        <ul>
                            <a href="https://globe-fin-orb-prod.uc.r.appspot.com/audit-program/audit-summary" target="_blank"><li class="underline">1. Corrective Action Requests</li></a>
                            <li>2. Operational / Management Review</li>
                        </ul>
                    </div>
                </Accordions>
            </div>
            <div className="relative">
                <div className="flex flex-col justify-center">
                    <img src="src/assets/images/oshpcda.png" className="brightness-50 h-64 rounded-3xl" />
                    <div className=" flex justify-center bottom-16 text-white relative">
                        <Button buttonText="Learn more about RA PDCA Framework"
                            buttonClass="inline-flex items-center px-4 py-2 bg-OSH rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-900 hover:text-black active:bg-gray-900 focus:outline-none focus:border-gray-900 disabled:opacity-50 transition ease-in-out duration-150" />
                    </div>
                </div>
            </div>
        </div>
        <div className="pb-16">
            <div className="relative">
                <img src="src/assets/images/oshbanner.png" className="w-full" />
                <div class="absolute text-4xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold">
                    <h1 className="pb-4">Be a Defender of Well-Being</h1>
                    <p className="text-sm font-base font-medium text-center">Visit our RM Academy’s eCourses now to learn
                        more about our OSH Modules</p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 px-8 pb-24">
            <VideoPlayer youtubeLink="https://www.youtube.com/watch?v=CHUZdJuqgdQ" />
            <div className="text-start px-8 flex flex-col justify-center">
                <h1 className="font-bold text-2xl">Watch our Basic Rescue Technique video </h1>
                <hr className="w-32 h-1  bg-gray-100 border-0 md:my-4 dark:bg-oranges" />
                <p className="text-start pb-8">Learn the fundamental techniques of rescuing and assisting individuals in
                    times of distress, including CPR, first aid, and emergency response protocols. Together, we want you to
                    be empowered safety champions in creating a safe and healthy environment for all.</p>
                <!-- <div><Button buttonText="Watch more OSH videos"
                        buttonClass="inline-flex items-center py-2 px-4 bg-globe rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-900 hover:text-black active:bg-gray-900 focus:outline-none focus:border-gray-900 disabled:opacity-50 transition ease-in-out duration-150" />
                </div> -->
            </div>
        </div>
        <div className="px-16 pb-16">
            <div className="grid grid-cols-2 gap-12">
                <div className="text-start">
                    <h1 className="text-5xl pb-8 font-extrabold">We are your partners<br /><span className="text-red-700">in
                            safety</span> and <span className="text-blue-600">wellness</span>.</h1>
                    <div>
                        <h2 className="text-lg font-bold">We maintain a proactive approach to ensure your physical, mental,
                            and emotional safety</h2>
                        <hr className="w-32 h-1  bg-gray-100 border-0 md:my-4 dark:bg-OSH" />
                        <p className="text-sm pb-8">As a customer-first telecommunications company, Globe works hard to make
                            key network products and services available despite natural disasters and widespread calamities
                            through its Business Continuity Management System (OSHS). The telco is dedicated to ensuring the
                            efficiency of the OSHS and the maintenance of its enterprise-wide ISO 22301 certification, the
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
            <hr className="w-32 h-1 my-4 bg-gray-100 border-0 md:my-4 dark:bg-OSH" />
        </div>
        <div className="grid grid-cols-3 px-12 pb-16">
            <div className='px-4 pb-12 lg:pb-0'>
                <div
                    class="max-w-sm border shadow-lg rounded-3xl h-full hover:drop-shadow-2xl flex-col items-stretch dark:bg-white dark:border-gray-300">
                    <div className="flex flex-col items-center">
                        <a href="#">
                            <img className="rounded-sm py-4 w-auto h-40" src="src/assets/images/shield.png" alt="" />
                        </a>
                        <div className="p-4 box-border rounded-b-3xl w-full h-56 items-stretch bg-BCM">
                            <a href="#">
                                <h5
                                    className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                                    Business Continuity</h5>
                            </a>
                            <p className="mb-3 font-normal text-center text-black dark:text-white">Business Continuity Management (BCM) is our hero with an unwavering focus on safeguarding our operations against potential threats. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-4 pb-12 lg:pb-0'>
                <div
                    class="max-w-sm border shadow-lg rounded-3xl h-full hover:drop-shadow-2xl flex-col items-stretch dark:bg-white dark:border-gray-300">
                    <div className="flex flex-col items-center">
                        <a href="#">
                            <img className="rounded-sm py-4 w-auto h-40" src="src/assets/images/environment.png" alt="" />
                        </a>
                        <div className="p-4 box-border rounded-b-3xl w-full h-56 items-stretch bg-EMS">
                            <a href="#">
                                <h5
                                    className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                                    Environment</h5>
                            </a>
                            <p className="mb-3 font-normal text-center text-black dark:text-white">Environmental Management (EM) is our eco-warrior, aligned with the international standard for Environmental Management System (ISO 14001)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-4 pb-12 lg:pb-0'>
                <div
                    class="max-w-sm border shadow-lg rounded-3xl h-full hover:drop-shadow-2xl flex-col items-stretch dark:bg-white dark:border-gray-300">
                    <div className="flex flex-col items-center">
                        <a href="#">
                            <img className="rounded-lg py-4 w-auto h-40" src="src/assets/images/thunder.png" alt="" />
                        </a>
                        <div className="p-4 box-border rounded-b-3xl h-56 bg-yellow-400">
                            <a href="#">
                                <h5
                                    className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                                    Energy</h5>
                            </a>
                            <p className="mb-3 font-normal text-center text-black dark:text-white">Through EnMaS, we lead the whole system in our charge towards a low-carbon future, harnessing alternative energy sources and energy-saving technologies</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center px-12 pb-8">
            <h1 className="text-2xl font-bold">Other links</h1>
            <hr className="w-32 h-1 my-4 mx-auto bg-gray-100 border-0 md:my-4 dark:bg-OSH" />
        </div>

        <div className="px-16 pb-12">
            <div className="grid grid-cols-3">
                <div className="text-center">
                    <a href="/MS-Docs"><Button buttonText="Downloadable Forms"
                            buttonClass="inline-flex items-center py-7 px-12 bg-OSH rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-900 hover:text-black active:bg-gray-900 focus:outline-none focus:border-gray-900 disabled:opacity-50 transition ease-in-out duration-150" /></a>
                </div>
                <div className="text-center">
                    <a href="/MS-Docs"><Button buttonText="Reports"
                            buttonClass="inline-flex items-center py-7 px-24 bg-OSH rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-900 hover:text-black active:bg-gray-900 focus:outline-none focus:border-gray-900 disabled:opacity-50 transition ease-in-out duration-150" /></a>
                </div>
                <div className="text-center">
                    <a href="/MS-Docs"><Button buttonText="Procedures Manuals"
                            buttonClass="inline-flex items-center py-7 px-12 bg-OSH rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-900 hover:text-black active:bg-gray-900 focus:outline-none focus:border-gray-900 disabled:opacity-50 transition ease-in-out duration-150" /></a>
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