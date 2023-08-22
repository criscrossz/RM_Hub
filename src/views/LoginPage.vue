<template>
    <div class="min-h-screen bg-white flex flex-col items-start justify-center relative px-20">
        <div class="absolute top-0 left-0 w-full h-full object-cover bg-center "
            style="background-image: url('src/assets/images/loginbg.png');">
        </div>
        <img src="src/assets/images/globelogin.png" alt="globelogo" class="pb-4"/>
        <img src="src/assets/images/rmologins.png" alt="rmologo" class="pb-4">
        <button class="bg-BCM text-white py-3 px-8 rounded-xl flex items-center"><img src="src/assets/images/google.png" class="pr-8 h-auto w-20"/>Login With Google</button>
        <a href=""><Button buttonText="Login With Google"
                            buttonClass="text-white hover:text-black border border-white hover:bg-black-900 focus:ring-4 focus:outline-none focus:ring-white font-semimedium rounded-lg text-sm px-14 text-center mr-4 dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-oranges dark:focus:ring-gray-800" /></a>
    </div>
</template>

<script>
import Button from '../components/ReusableComponent/Button.vue';
export default {
components: {
    Button,
}
}
</script>

<style>

</style>