<template>
    <div className="px-12 pt-24">
        <div className="grid grid-cols-2 gap-16">
            <div className="flex flex-col justify-start">
                <h1 className="text-3xl font-semibold pb-4">Occupational Safety and Health Management System ISO Certificate</h1>
                <p className="pb-8">Here at Globe, safety has always been at the heart of everything we do. With ISO 45001:2018 certification, we take our commitment to the next level, assuring our stakeholders that their safety remains our utmost priority. Whether it's our skilled workforce working on the frontlines or the customers who rely on our services, we leave no stone unturned in creating a secure and protected environment for all</p>
                <div className="pb-4">
                    <DownloadButton :downloadLink="fileLink"
                        fileName="ISOCertificate.txt" buttonText="Download File"
                        buttonClasses="text-black hover:text-white border border-black hover:bg-gray-900 e font-medium rounded-lg text-sm px-12 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-300 dark:focus:ring-gray-800" />
                </div>
                <div class="pb-12">
                    <a href="/about"><Button buttonText="Verify Certificate"
                            buttonClass="text-black hover:text-white border border-black hover:bg-gray-900 e font-medium rounded-lg text-sm px-14 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-300 dark:focus:ring-gray-800" /></a>
                </div>
                <p className="pt-8 text-md font-semibold text-BCM border-3 p-8">ISO 45001:2018 is an international standard that specifies requirements for an Occupational Health and Safety Management System, providing a framework to improve employee safety, reduce workplace risks, and create better, safer working conditions.</p>
            </div>
            <div className="flex flex-col justify-center pb-4">
                <img src="src/assets/images/certificate2.png" className="outline outline-2" />
                
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
        return {
            fileLink: '/ISOCertificate.txt',
        };
    },

}
</script>

<style></style>