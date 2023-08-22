<template>
    <div>
        <div class='pb-12'>
            <div class='relative'>
                <img class="w-full brightness-50 h-full lg:h-80 object-cover" :src="Heropic" alt="RMO Hub Logo" />
                <div class='absolute grid lg:grid-cols-2 top-1/3 lg:left-32 left-16'>
                    <div class='cols-span-1'>
                        <h1 class='text-4xl font-bold text-white pb-4'>Expand your Risk Management IQ!</h1>
                        <p class='text-white'>Excel in everything about Risk Management and our programs through our RM Academy</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className=' pt-8 px-12'>
        <div>
            <div className="text-center">
                <div className="font-bold text-3xl">
                    <h2>RM Academy</h2>
                </div>
                <hr className="w-32 h-1 my-4 mx-auto bg-gray-100 border-0 md:my-4 dark:bg-oranges" />
            </div>
            <div className='grid grid-cols-2 pb-12'>
                <div className='flex justify-center'>
                    <p className='text-left'>Welcome to RM Academy! 🌟 <br /><br /> As we are committed to continuous
                        improvement and learning to deliver quality operations and services, we have created this space for
                        you to learn anything and everything about risk management and its various aspects.
                        <br /><br />Through RM Academy’s E-Learning Modules, you have the freedom to learn at your own pace,
                        whenever and wherever suits you best. Each module is crafted to ensure a high-quality learning
                        experience that meets every Ka-Globe’s needs.
                    </p>
                </div>
                <div className='flex justify-center'>
                    <img src='src/assets/images/rmacademy.png' />
                </div>
            </div>
        </div>
    </div>
    <div className='pb-16'>
        <div className="justify-center flex shadow-md bg-grays">
            <div className="inline-block justify-center sm:flex pt-4 pb-4">
                <div className="px-32 flex flex-col items-center">
                    <a href="/Knowledgecenter">
                        <img src="src/assets/images/KDatabase.png" className="w-auto h-80 lg:h-32" />
                    </a>
                    <h1 className="text-sm font-bold">Knowledge Center</h1>
                </div>
                <div className="px-32 flex flex-col items-center">
                    <a href="#">
                        <img src="src/assets/images/resources.png" className="w-auto h-80 lg:h-32" />
                    </a>
                    <h1 className="text-sm font-bold">Resources</h1>
                </div>
                <div className="px-32 flex flex-col items-center">
                    <a href="#">
                        <img src="src/assets/images/trainings.png" className="w-auto h-80 lg:h-32" />
                    </a>
                    <h1 className="text-sm font-bold">Trainings</h1>
                </div>
            </div>
        </div>
    </div>
    <div className="grid grid-cols-2 p-4 gap-4 items-center pb-12">
        <div className='flex justify-end items-center'>
            <h1 className='text-md font-bold px-4'>Filter by:</h1>
            <Filter />
        </div>
        <div>
            <SearchInput v-model="searchValue" />
        </div>
    </div>
    <div className="px-12 pb-16">
        <div className="grid grid-cols-2 gap-4">
            <div className="relative">
                <img src="src/assets/images/BCMacad.png" className="shadow-l" />
                <div className="absolute grid lg:grid-cols-2 bottom-6 lg:left-32 left-24">
                    <a href=""><Button buttonText="See More"
                            buttonClass="text-white hover:text-black border border-white hover:bg-black-900 focus:ring-4 focus:outline-none focus:ring-white font-semimedium rounded-lg text-sm px-14 text-center mr-4 dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-oranges dark:focus:ring-gray-800" /></a>
                </div>
            </div>
            <div className="relative ">
                <img src="src/assets/images/IMSacad.png" />
                <div className="absolute grid lg:grid-cols-2 bottom-6 lg:left-32 left-24">
                    <a href=""><Button buttonText="See More"
                            buttonClass="text-white hover:text-black border border-white hover:bg-black-900 focus:ring-4 focus:outline-none focus:ring-white font-semimedium rounded-lg text-sm px-14 text-center mr-4 dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-oranges dark:focus:ring-gray-800" /></a>
                </div>
            </div>
            <div className="relative ">
                <img src="src/assets/images/SWMacad.png" />
                <div className="absolute grid lg:grid-cols-2 bottom-6 lg:left-32 left-24">
                    <a href=""><Button buttonText="See More"
                            buttonClass="text-white hover:text-black border border-white hover:bg-black-900 focus:ring-4 focus:outline-none focus:ring-white font-semimedium rounded-lg text-sm px-14 text-center mr-4 dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-oranges dark:focus:ring-gray-800" /></a>
                </div>
            </div>
            <div className="relative ">
                <img src="src/assets/images/EIDacad.png" />
                <div className="absolute grid lg:grid-cols-2 bottom-6 lg:left-32 left-24">
                    <a href=""><Button buttonText="See More"
                            buttonClass="text-white hover:text-black border border-white hover:bg-black-900 focus:ring-4 focus:outline-none focus:ring-white font-semimedium rounded-lg text-sm px-14 text-center mr-4 dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-oranges dark:focus:ring-gray-800" /></a>
                </div>
            </div>

            <div className="relative ">
                <img src="src/assets/images/FSMacad.png" />
                <div className="absolute grid lg:grid-cols-2 bottom-6 lg:left-32 left-24">
                    <a href=""><Button buttonText="See More"
                            buttonClass="text-white hover:text-black border border-white hover:bg-black-900 focus:ring-4 focus:outline-none focus:ring-white font-semimedium rounded-lg text-sm px-14 text-center mr-4 dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-oranges dark:focus:ring-gray-800" /></a>
                </div>
            </div>
            <div className="relative ">
                <img src="src/assets/images/OEacad.png" />
                <div className="absolute grid lg:grid-cols-2 bottom-6 lg:left-32 left-24">
                    <a href=""><Button buttonText="See More"
                            buttonClass="text-white hover:text-black border border-white hover:bg-black-900 focus:ring-4 focus:outline-none focus:ring-white font-semimedium rounded-lg text-sm px-14 text-center mr-4 dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-oranges dark:focus:ring-gray-800" /></a>
                </div>
            </div>
            <div className="relative ">
                <img src="src/assets/images/OSH101acad.png" />
                <div className="absolute grid lg:grid-cols-2 bottom-6 lg:left-32 left-24">
                    <a href=""><Button buttonText="See More"
                            buttonClass="text-white hover:text-black border border-white hover:bg-black-900 focus:ring-4 focus:outline-none focus:ring-white font-semimedium rounded-lg text-sm px-14 text-center mr-4 dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-oranges dark:focus:ring-gray-800" /></a>
                </div>
            </div>
            <div className="relative ">
                <img src="src/assets/images/OSH102acad.png" />
                <div className="absolute grid lg:grid-cols-2 bottom-6 lg:left-32 left-24">
                    <a href=""><Button buttonText="See More"
                            buttonClass="text-white hover:text-black border border-white hover:bg-black-900 focus:ring-4 focus:outline-none focus:ring-white font-semimedium rounded-lg text-sm px-14 text-center mr-4 dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-oranges dark:focus:ring-gray-800" /></a>
                </div>
            </div>
            <div className="relative ">
                <img src="src/assets/images/OSH103acad.png" />
                <div className="absolute grid lg:grid-cols-2 bottom-6 lg:left-32 left-24">
                    <a href=""><Button buttonText="See More"
                            buttonClass="text-white hover:text-black border border-white hover:bg-black-900 focus:ring-4 focus:outline-none focus:ring-white font-semimedium rounded-lg text-sm px-14 text-center mr-4 dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-oranges dark:focus:ring-gray-800" /></a>
                </div>
            </div>
            <div className="relative ">
                <img src="src/assets/images/OSH104acad.png" />
                <div className="absolute grid lg:grid-cols-2 bottom-6 lg:left-32 left-24">
                    <a href=""><Button buttonText="See More"
                            buttonClass="text-white hover:text-black border border-white hover:bg-black-900 focus:ring-4 focus:outline-none focus:ring-white font-semimedium rounded-lg text-sm px-14 text-center mr-4 dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-oranges dark:focus:ring-gray-800" /></a>
                </div>
            </div>
            <div className="relative ">
                <img src="src/assets/images/OSH105acad.png" />
                <div className="absolute grid lg:grid-cols-2 bottom-6 lg:left-32 left-24">
                    <a href=""><Button buttonText="See More"
                            buttonClass="text-white hover:text-black border border-white hover:bg-black-900 focus:ring-4 focus:outline-none focus:ring-white font-semimedium rounded-lg text-sm px-14 text-center mr-4 dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-oranges dark:focus:ring-gray-800" /></a>
                </div>
            </div>
            <div className="relative ">
                <img src="src/assets/images/OSH106acad.png" />
                <div className="absolute grid lg:grid-cols-2 bottom-6 lg:left-32 left-24">
                    <a href=""><Button buttonText="See More"
                            buttonClass="text-white hover:text-black border border-white hover:bg-black-900 focus:ring-4 focus:outline-none focus:ring-white font-semimedium rounded-lg text-sm px-14 text-center mr-4 dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-oranges dark:focus:ring-gray-800" /></a>
                </div>
            </div>
        </div>
    </div>
    <div className='pb-16 px-12'>
        <h1 className='text-2xl font-bold text-center'>Training Calendar</h1>
        <hr className="w-32 h-1 my-4 mx-auto bg-gray-100 border-0 md:my-4 dark:bg-oranges" />
        <EventCalendar :year="2023" :month="8" :events="events" />
    </div>
</template>

<script>
import Filter from '../components/ReusableComponent/Filter.vue'
import SearchInput from '../components/ReusableComponent/SearchInput.vue'
import Button from '../components/ReusableComponent/Button.vue'
import EventCalendar from '../components/ReusableComponent/EventCalendar.vue'

export default {
    components: {
        SearchInput,
        Filter,
        Button,
        EventCalendar,
    },
    data() {
        return {
            Heropic: 'src/assets/images/academyhero.png',
            searchValue: '',
            events: [
                { date: '2023-08-06', title: 'Event 1 Title', course: 'Second Title' },
                { date: '2023-08-09', title: 'Event 1 Title', course: 'Second Title' },
                { date: '2023-08-10', title: 'Event 1 Title', course: 'Second Title' },
                // Add more events here
            ],
        }
    }

}
</script>

<style></style>