<template>
    <button :class="buttonClass" @click="onClick">
        {{ buttonText }}
    </button>
</template>
  
<script>
export default {
    props: {
        buttonText: String,
        buttonClass: String,
    },
    methods: {
        onClick() {
            console.log('Button clicked');
        },
    },
};
</script>
  