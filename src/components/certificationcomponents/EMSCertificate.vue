<template>
    <div className="px-12 pt-24">
        <div className="grid grid-cols-2 gap-16">
            <div className="flex flex-col justify-start">
                <h1 className="text-3xl font-semibold pb-4">Environment Management System ISO Certificate
                </h1>
                <p className="pb-8">As a company at the forefront of innovation, Globe continuously explores new
                    technologies and processes to enhance our environmental performance. By adopting green initiatives and
                    investing in renewable energy solutions, we aim to drive positive change within our industry and beyond.
                    With ISO 14001:2015 certification, Globe has established a comprehensive Environmental Management System
                    (EMS) that covers every aspect of our business. From reducing waste generation and conserving resources
                    to managing emissions and promoting eco-friendly practices, we embrace a holistic approach to
                    environmental stewardship</p>
                    <div className="pb-4">
                    <DownloadButton :downloadLink="fileLink"
                        fileName="ISOCertificate.txt" buttonText="Download File"
                        buttonClasses="text-black hover:text-white border border-black hover:bg-gray-900 e font-medium rounded-lg text-sm px-12 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-300 dark:focus:ring-gray-800" />
                </div>
                <div class="pb-12">
                    <a href="/about"><Button buttonText="Verify Certificate"
                            buttonClass="text-black hover:text-white border border-black hover:bg-gray-900 e font-medium rounded-lg text-sm px-14 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-300 dark:focus:ring-gray-800" /></a>
                </div>
                <p className="pt-8 text-md font-semibold text-BCM border-3 p-8">ISO 14001:2015 is an international standard that specifies requirements for an
                    Environmental Management System (EMS). The standard provides a framework for organizations to identify,
                    prioritize, and manage environmental risks and opportunities, leading to improved environmental
                    performance and sustainable practices.</p>
            </div>
            <div className="flex flex-col justify-center pb-4">
                <img src="src/assets/images/certificate4.png" className="outline outline-2" />
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