<template>
    <div>
        <div class="w-full pt-12">
            <div class="text-center pb-4">
                <h1 class="text-4xl font-bold">🌱 Environmental Management System  🌱</h1>
                <hr class="w-32 h-1 my-4 mx-auto bg-gray-100 border-0 md:my-4 dark:bg-EMS" />
            </div>
        </div>
        <div class="pb-8">
            <div class="w-full bg-EMS px-12 py-14 shadow-lg">
                <div class="grid grid-cols-3 gap-12">
                    <div class="flex justify-center">
                        <img src="src/assets/images/EMSsystem.png" width="500" height="500" />
                    </div>
                    <div class="card rounded-xl bg-white p-8 col-span-2">
                        <div>
                            <h2 class="text-2xl font-bold text-EMS drop-shadow-lg pb-4">Our Eco-Warrior
                            </h2>
                        </div>
                        <div class="flex items-center">
                            <img src="src/assets/images/EMSSHIELD.png" class="h-28 px-8 w-auto" />
                            <div class="grid grid-cols-2">
                                <p class="col-span-2 text-sm">Environmental Management (EM) is our eco-warrior, aligned with the international standard for Environmental Management System, ISO 14001.  Our commitment includes legal compliance, continual improvement of environmental performance, and open communication with our stakeholders. EM's mission is implemented throughout Globe Telecom's facilities, empowering our employees and business partners to contribute to reducing our environmental impact. Together, we create a greener, more sustainable future for our generation and the generations to come.
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
                        <img src="src/assets/images/emssearch.png" />
                    </div>
                    <div>
                        <h2 class="font-bold text-xl  text-center pb-4">Policy</h2>
                        <p class="text-center">We are dedicated to reducing our impact on the energy sector and supporting a low-carbon future in the Philippines. Through the implementation of high standards of energy efficiency and conservation practices, we strive to minimize carbon emissions for ourselves and our stakeholders, fostering a sustainable environment for all</p>
                    </div>
                </div>
                <div class="p-12">
                    <div class="flex justify-center pb-4">
                        <img src="src/assets/images/emsnotes.png" />
                    </div>
                    <div>
                        <h2 class="font-bold text-xl  text-center pb-4">Goal</h2>
                        <p class="text-center">Our goal is to optimize energy use and consumption, transition to a low carbon future, and promote sustainability. We aim to foster a culture of energy reduction among our employees and business partners, while collaborating with various stakeholders to drive innovation and compliance with energy laws and global standards.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center pb-8">
            <h1 class="text-4xl font-bold">Our Framework</h1>
            <hr class="w-32 h-1 my-4 mx-auto bg-gray-100 border-0 md:my-4 dark:bg-EMS" />
        </div>
        <div className="grid grid-cols-2 px-12 pb-16">
            <div className="px-8">
                <Accordions title="PLAN">
                    <div class="slot-content">
                        <div>
                            <p>1. Globe Risk Assessment</p><br/>
                            <p>2. Objectives, Targets and Programs</p>
                            <ul>
                                DENR Requirements
                                <li>- Accredited Pollution Control Officers (PCOs)</li>
                                <li>- Copy of ECC or CNC</li>
                                <li>- Quarterly Self-Monitoring Reports</li>
                                <li>- Hazardous Waste Generators ID</li>
                                <li>- Permit to Operate Gensets</li>
                            </ul>
                        </div>
                    </div>
                </Accordions>
                <Accordions title="DO">
                    <div>
                        <ul>
                            1. Solid Waste Management
                            <li>- Solid Waste Monitoring Report</li>
                            <li>- SWM Awareness </li>
                        </ul>
                        <br/>
                        <ul>
                            2. Hazardous Waste Management
                            <li>- Hazwaste Monitoring </li>
                            <li>- List of Hazwaste Staging Areas</li>
                            <li>- Certificates of Accredited Hazwaste Transporters</li>
                            <li>- Certificates of Accreditted Hazwaste Treaters</li>
                            <li>- Certficates of Treatment</li>
                            <li>- PCBs Inventory and Registration</li>
                        </ul>
                        <br/>
                        <ul>
                            3. Clean Air Act
                            <li>- Air Emission Testings</li>
                            <li>- Ambient Noise Emissions</li>
                        </ul>
                        <br/>
                        <ul>
                            4. Water Conservation
                            <li>- Water Consumption Monitoring</li>
                            <li>- Water Conservation Program</li>
                        </ul>
                        <br/>
                        <ul>
                            5. Greenhouse Gas (GHG) and Energy Management
                            <li>- GHG Accounting</li>
                            <li>- Scope 1 Fuel Consumption</li>
                            <li>- Scope 2 Electricity Consumption</li>
                            <li>- Energy Conservation Programs</li>
                        </ul>
                    </div>
                </Accordions>
                <Accordions title="CHECK">
                    <div>
                        <ul>
                            1. EMS Audits
                            <li>- ISO 14001 Audit Reports</li>
                            <li>- GHG Accounting Audit</li>
                            <li>- DENR Site Inspections</li>
                        </ul>
                        <br/>
                        <ul>
                            2. Performance Indicators
                            <li>- Waste Generation Reports</li>
                            <li>- Consumption of Natural Resources</li>
                            <li>- Compliance to DENR Reports</li>
                        </ul>
                    </div>
                </Accordions>
                <Accordions title="ACT">
                    <p>1. Corrective Action </p>
                    <br/>
                    <p>2. Management Review</p>
                </Accordions>
            </div>
            <div className="relative">
                <div className="flex flex-col justify-center">
                    <img src="src/assets/images/emspcda.png" className="brightness-50 h-64" />
                    <div className=" flex justify-center bottom-16 text-white relative">
                        <Button buttonText="Learn more about RA PDCA Framework"
                            buttonClass="inline-flex items-center px-4 py-2 bg-EMS rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-900 hover:text-black active:bg-gray-900 focus:outline-none focus:border-gray-900 disabled:opacity-50 transition ease-in-out duration-150" />
                    </div>
                </div>
            </div>
        </div>
        <div className="pb-16">
            <div className="relative">
                <img src="src/assets/images/emsbanner.png" className="w-full" />
                <div class="absolute text-4xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold">
                    <h1 className="pb-4 text-center">Be an Eco-Warrior</h1>
                    <p className="text-sm font-base font-medium text-center">Visit our RM Academy’s eCourses now to learn
                        more about our EMS Modules</p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 px-8 pb-24">
            <VideoPlayer youtubeLink="https://www.youtube.com/watch?v=CHUZdJuqgdQ" />
            <div className="text-start px-8 flex flex-col justify-center">
                <h1 className="font-bold text-2xl">Watch how we reduce carbon emissions</h1>
                <hr className="w-32 h-1  bg-gray-100 border-0 md:my-4 dark:bg-EMS" />
                <p className="text-start pb-8">The report also highlighted Globe’s implementation of an ISO 14001-certified Environmental Management System along with its commitment to environmental transparency through the Climate Disclosure Project. By 2030, Globe will upgrade infrastructure and retrofit its industries to make them sustainable with increased resource-use efficiency and greater adoption of clean and environmentally-sound technologies resulting in 30% reduction of CO2 emission intensity based on 2017 levels.</p>
                <!-- <div><Button buttonText="Learn more"
                        buttonClass="inline-flex items-center py-2 px-4 bg-globe rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-900 hover:text-black active:bg-gray-900 focus:outline-none focus:border-gray-900 disabled:opacity-50 transition ease-in-out duration-150" />
                </div> -->
            </div>
        </div>
        <div className="px-16 pb-16">
            <div className="grid grid-cols-2 gap-12">
                <div className="text-start">
                    <h1 className="text-5xl pb-8 font-extrabold">We<br /><span
                            className="text-EMS">nurture nature</span> for a more connected future.</h1>
                    <div>
                        <h2 className="text-lg font-bold">hrough EMS, we empower change by caring about our environment</h2>
                        <hr className="w-32 h-1  bg-gray-100 border-0 md:my-4 dark:bg-EMS" />
                        <p className="text-sm pb-8">Here, we're all about sustainability, and EM champions policies that ensure environmental sustainability.
Together, we create a greener, more sustainable future for our generation and the generations to come.</p>
                        <!-- <a href="#"><Button buttonText="See More"
                                buttonClass="inline-flex items-center py-2 px-4 bg-globe rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-900 hover:text-black active:bg-gray-900 focus:outline-none focus:border-gray-900 disabled:opacity-50 transition ease-in-out duration-150" /></a> -->
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img src="src/assets/images/EMS2.png" className="w-auto h-80" />
                </div>
            </div>
        </div>

        <div className="text-start px-12 pb-8">
            <h1 className="text-2xl font-bold">Explore more of our programs</h1>
            <hr className="w-32 h-1 my-4 bg-gray-100 border-0 md:my-4 dark:bg-EMS" />
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
                            <p className="mb-3 font-normal text-center text-black dark:text-white">Lorem ipsum dolor sit
                                amet,consectetur adipiscing elit. Nam bibendum efficitur magna, quis suscipit sem
                                consectetur finibusconsectetur adipiscing elit.</p>
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
                            <p className="mb-3 font-normal text-center text-black dark:text-white">Lorem ipsum dolor sit
                                amet,consectetur adipiscing elit. Nam bibendum efficitur magna, quis suscipit sem
                                consectetur finibusconsectetur adipiscing elit.</p>
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
                            <p className="mb-3 font-normal text-center text-black dark:text-white">Lorem ipsum dolor sit
                                amet,consectetur adipiscing elit. Nam bibendum efficitur magna, quis suscipit sem
                                consectetur finibusconsectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center px-12 pb-8">
            <h1 className="text-2xl font-bold">Other links</h1>
            <hr className="w-32 h-1 my-4 mx-auto bg-gray-100 border-0 md:my-4 dark:bg-EMS" />
        </div>

        <div className="px-16 pb-12">
            <div className="grid grid-cols-3">
                <div className="text-center">
                    <a href="/MS-Docs"><Button buttonText="Downloadable Forms"
                            buttonClass="inline-flex items-center py-7 px-12 bg-EMS rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-900 hover:text-black active:bg-gray-900 focus:outline-none focus:border-gray-900 disabled:opacity-50 transition ease-in-out duration-150" /></a>
                </div>
                <div className="text-center">
                    <a href="#"><Button buttonText="Reports"
                            buttonClass="inline-flex items-center py-7 px-24 bg-EMS rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-900 hover:text-black active:bg-gray-900 focus:outline-none focus:border-gray-900 disabled:opacity-50 transition ease-in-out duration-150" /></a>
                </div>
                <div className="text-center">
                    <a href="#"><Button buttonText="Procedures Manuals"
                            buttonClass="inline-flex items-center py-7 px-12 bg-EMS rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-900 hover:text-black active:bg-gray-900 focus:outline-none focus:border-gray-900 disabled:opacity-50 transition ease-in-out duration-150" /></a>
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