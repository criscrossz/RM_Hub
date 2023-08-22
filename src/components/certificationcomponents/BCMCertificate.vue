<template>
    <div className="px-12 pt-24">
        <div className="grid grid-cols-2 gap-16">
            <div className="flex flex-col justify-start">
                <h1 className="text-3xl font-semibold pb-4">Business Continuity Management System ISO Certificate</h1>
                <p className="pb-8">Our attainment of ISO 22301:2019 is a testament to our unwavering pursuit of excellence.
                    This international standard validates the robustness of our Business Continuity Management System, which
                    enables us to identify potential risks, develop resilient strategies, and swiftly recover from any
                    business interruptions.</p>
                <div className="pb-4">
                    <DownloadButton :downloadLink="fileLink"
                        fileName="ISOCertificate.txt" buttonText="Download File"
                        buttonClasses="text-black hover:text-white border border-black hover:bg-gray-900 e font-medium rounded-lg text-sm px-12 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-300 dark:focus:ring-gray-800" />
                </div>
                <div class="pb-12">
                    <a href="/about"><Button buttonText="Verify Certificate"
                            buttonClass="text-black hover:text-white border border-black hover:bg-gray-900 e font-medium rounded-lg text-sm px-14 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-300 dark:focus:ring-gray-800" /></a>
                </div>
                <p className="pt-8 text-md font-semibold text-BCM border-3 p-8">ISO 22301:2019 is an international standard that specifies requirements for
                    establishing, implementing, maintaining, and continually improving a Business Continuity Management
                    System (BCMS). The standard is designed to help organizations protect against, prepare for, respond to,
                    and recover from disruptive incidents when they arise.</p>
            </div>
            <div className="flex flex-col justify-center pb-4">
                <img src="src/assets/images/certificate.png" className="outline outline-2" />
                
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