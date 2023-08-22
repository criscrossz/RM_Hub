<template>
    <div>
        <h1 class="text-2xl font-bold mb-4">{{ title }}</h1>
        <a :href="downloadLink" :download="fileName">
            <button :class="buttonClasses">
                {{ buttonText }}
            </button>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        downloadLink: String,
        fileName: String,
        buttonText: String,
        buttonClasses: String,
    },
};
</script>

<style>
/* Add any custom styles here if needed */
</style>
