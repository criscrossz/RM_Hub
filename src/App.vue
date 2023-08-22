<script>

export default {
  data() {
    return {
      rmoHubLogo: 'src/assets/images/RMO-Hub-logo.png',
      searchBar: 'src/assets/images/search-icon.png',
      globeIcon: 'src/assets/images/Globe-icon.png',
      rmoFooterLogo: 'src/assets/images/rmo-footer-logo.png'
    }
  },
}
</script>
<template>
  <div>
    <!-- Navbar with logo and search box area -->
    <div class="nav-logo-container d-flex align-items-center">
      <img class="logo w-40 h-auto" :src="rmoHubLogo" alt="RMO Hub Logo">
      <div class="right-side">
        <div class="input-icons">
          <img class="icon h-auto" :src="searchBar" alt="search bar">
          <input class="input-field" type="search" placeholder="Type search here" aria-label="Search">
        </div>
        <div class="nav-profile">
          <div class="input-group">
            <ul>
              <li>Anna Hanes</li>
              <li>EMS</li>
            </ul>
            <div class="nav-avatar">
              <div>
              </div>
            </div>
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><a class="dropdown-item" href="#">Setting</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
        <img class="globe-icon w-24 h-auto" :src="globeIcon" alt="Globe Icon">
      </div>
    </div>
    <!-- Navbar with links  -->
    <nav>
      <div class="nav-container">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/ISO-MS">ISO Management System</router-link>
        <router-link to="/ISO-Cert">ISO Certifications</router-link>
        <router-link to="/MS-Docs">MS Documents</router-link>
      </div>
    </nav>
  </div>
  <router-view />
  <div id="footer">
    <div class="grid grid-cols-2 gap-32">
      <div class="flex flex-col">
        <h1 class="text-3xl font-bold pb-4">About RM Hub</h1>
        <p class="pb-16">The Risk Management Hub is our central resource dedicated to helping our stakeholders in
          identifying, assessing, and mitigating potential risks that may arise in our dynamic telecommunication landscape
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
            <router-link to="/MS-Docs" class="underline">System Document</router-link>
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



<style>
.vl {
  border-left: 1px solid white;
  height: 290px;
}
</style>