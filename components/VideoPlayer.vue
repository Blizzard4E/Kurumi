<template>
    <section v-if="showAnime">
        <div class="video-wrapper">
            <div>
                <iframe :src="'https://' + anime.servers[0].iframe" allowfullscreen frameborder="0" scrolling="no" ref="videoRef" @load="setVideoHeight" :height="videoHeight"></iframe>
            </div>
            <div class="servers-wrapper">
                <h1>Servers :</h1>
            </div>
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
    * {
        color: white;
        font-family: 'Sansation Regular';
    }
    section {
        margin: 1rem;
    }
    .video-wrapper {
        display: grid;
        grid-template-columns: 8fr 2fr;
    }
    iframe {
        width: 100%;
        object-fit: fill;
    }
    .servers-wrapper {
        margin: 0 1rem;
    }
    h1 {
        font-weight: normal;
        font-size: 1.4rem;
    }
</style>