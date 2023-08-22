<template>
    <div id="footer">
        <div class="grid grid-cols-2 gap-32">
            <div class="flex flex-col">
                <h1 class="text-3xl font-bold pb-4">About RM Hub</h1>
                <p class="pb-16">The Risk Management Hub is our central resource dedicated to helping our stakeholders in
                    identifying, assessing, and mitigating potential risks that may arise in our dynamic telecommunication
                    landscape
                    in the Philippines through our Integrated Management System.</p>
                <div class="flex gap-8">
                    <img class="footer-logo" :src="rmoFooterLogo" alt="RMO-Logo">
                    <div class="flex flex-col">
                        <p class="pb-2">© 2023. Globe Telecom, Inc</p>
                        <p>All Rights Reserved</p>
                    </div>

                </div>
            </div>


            <div class="flex gap-40">
                <div class="flex flex-col">
                    <h1 class="pb-8 text-xl font-bold">Quick Links</h1>
                    <ul class="flex flex-col gap-2">
                        <router-link to="/" class="underline">Home</router-link>
                        <router-link to="/about" class="underline">About</router-link>
                        <router-link to="/RM-ACADEMY" class="underline">RM Academy</router-link>
                        <router-link to="/knowledgecenter" class="underline">System Document</router-link>
                        <router-link to="/gallery" class="underline">Gallery</router-link>
                    </ul>
                </div>

                <div class="flex flex-col">
                    <h1 class="pb-8 text-xl font-bold">Help and Support</h1>
                    <ul class="flex flex-col gap-2">
                        <router-link to="/send-sos" class="underline">Send SOS!</router-link>
                        <router-link to="/Privacy-Policy" class="underline">Privacy Policy</router-link>
                        <router-link to="/Terms-and-Use" class="underline">Terms and Use</router-link>
                        <router-link to="/Site-Map" class="underline">Site Map</router-link>
                        <router-link to="/Knowledgecenter" class="underline">Knowledgecenter</router-link>
                    </ul>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>