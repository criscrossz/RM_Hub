<template>
    <div class="video-player">
        <iframe width="100%" :height="aspectRatioHeight" :src="embedUrl" frameborder="0" allowfullscreen></iframe>
    </div>
</template>
<script>
export default {
    props: {
        youtubeLink: {
            type: String,
            required: true,
        },
        aspectRatioHeight: {
            type: String,
            default: '315', // Default aspect ratio height for YouTube videos
        },
    },
    computed: {
        embedUrl() {
            const videoId = this.extractVideoId(this.youtubeLink);
            return `https://www.youtube.com/embed/${videoId}`;
        },
    },
    methods: {
        extractVideoId(url) {
            // Regular expression to extract YouTube video ID from various URL formats
            const regExp =
                /^(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/(?:watch\?v=|embed\/)|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/;
            const match = url.match(regExp);
            return match && match[1].length === 11 ? match[1] : null;
        },
    },
};
</script>

<style scoped>
.video-player {
    position: relative;
    padding-bottom: 56.25%;
    /* 16:9 aspect ratio */
    overflow: hidden;
    max-width: 100%;
}

iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
  