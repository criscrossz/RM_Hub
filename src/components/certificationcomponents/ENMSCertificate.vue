<template>
    <div className="px-12 pt-24">
        <div className="grid grid-cols-2 gap-16">
            <div className="flex flex-col justify-start">
                <h1 className="text-3xl font-semibold pb-4">Energy Management System ISO Certificate
                </h1>
                <p className="pb-8">We believe that achieving energy efficiency and sustainability is a collective effort. Through employee engagement, stakeholder collaboration, and customer awareness, we strive to build a greener ecosystem that benefits us all. With ISO 50001:2018 certification, we reinforce our commitment to a greener future by actively managing our energy consumption and continuously seeking innovative ways to reduce our carbon footprint.</p>
                <div className="pb-4">
                    <DownloadButton :downloadLink="fileLink"
                        fileName="ISOCertificate.txt" buttonText="Download File"
                        buttonClasses="text-black hover:text-white border border-black hover:bg-gray-900 e font-medium rounded-lg text-sm px-12 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-300 dark:focus:ring-gray-800" />
                </div>
                <div class="pb-12">
                    <a href="/about"><Button buttonText="Verify Certificate"
                            buttonClass="text-black hover:text-white border border-black hover:bg-gray-900 e font-medium rounded-lg text-sm px-14 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-300 dark:focus:ring-gray-800" /></a>
                </div>
                <p className="pt-8 text-md font-semibold text-BCM border-3 p-8">ISO 50001:2018 is an international standard that specifies requirements for establishing, implementing, maintaining, and improving an Energy Management System (EnMS). The standard is designed to help organizations manage their energy consumption and improve energy efficiency, leading to reduced greenhouse gas emissions and lower operational costs.</p>
            </div>
            <div className="flex flex-col justify-center pb-4">
                <img src="src/assets/images/certificate3.png" className="outline outline-2" />
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../ReusableComponent/Button.vue';
import DownloadButton from '../ReusableComponent/DownloadButton.vue';
export default {
    components: {
        Button,
        DownloadButton,
    },
    data() {
        return{
            fileLink: '/ISOCertificate.txt',
        }
    }

}
</script>

<style></style>