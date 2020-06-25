<template>
    <section v-if="showAnime">
        <div class="video-wrapper">
            <iframe :src="'https://' + anime.servers[0].iframe" allowfullscreen frameborder="0" scrolling="no" ref="videoRef" @load="setVideoHeight" :height="videoHeight"></iframe>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            anime: {},
            showAnime: false,
            videoHeight: 0
        }
    },
    methods: {
        async getAnime() {
            axios.get("https://gogoanime.now.sh/api/v1/AnimeEpisodeHandler/" + this.$route.params.watch).then(res => {
                this.anime = res.data.anime[0];
                this.showAnime = true;
            })
        },
        setVideoHeight() {  
            this.videoHeight = this.$refs.videoRef.clientWidth*9/16;
        }
    },
    mounted() {
        this.getAnime();
    }
}
</script>

<style lang="scss" scoped>
    section {
        margin: 1rem;
    }
    .video-wrapper {
        
    }
    iframe {
        width: 100%;
        object-fit: fill;
    }

</style>