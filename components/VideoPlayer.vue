<template>
    <section v-if="showAnime">
        <div class="video-wrapper">
            <div class="section-title">
                <h1>Video Player :<div class="large-line"></div></h1>
            </div>
            <iframe :src="'https://' + anime.servers[0].iframe" allowfullscreen frameborder="0" scrolling="no" ref="videoRef" @load="setVideoHeight" :height="videoHeight"></iframe>
        </div>
        <div class="servers-wrapper">
            <div class="section-title">
                <h1>Servers :<div class="large-line"></div></h1>
            </div>
            <div class="servers">
                <button v-for="server in anime.servers" :key="server.id" class="server">
                    <h2>{{server.name}}</h2>
                </button>
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
        
    }
    iframe {
        width: 100%;
        object-fit: fill;
    }
    button {
        all: unset;
        display: block;
        transition: 0.5s ease;

        &:hover {
            cursor: pointer;
            background: crimson;
        }
    }
    .servers-wrapper {
        display: grid;
        grid-template-columns: 1fr 6fr;
        margin-top: 0.7rem;
    }
    h1 {
        font-weight: normal;
        font-size: 1.3rem;
    }
    h2 {
        font-weight: normal;
        font-size: 1.1rem;
    }
    .section-title {
        display: flex;
        margin-bottom: 0.5rem;
    }
    .servers {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        row-gap: 1rem;
    }
    .server {
        margin: 0 1rem;
        padding: 0.5rem;
        text-align: center;
        background: #2c2f33;
        transition: 0.7s;
        border-radius: 7px;

        &:hover {
            cursor: pointer;
            background: crimson;
        }
    }
    .large-line {
        width: 100%;
        background: crimson;
        box-shadow: 0 0 10px crimson;
        min-height: 0.2rem;
        margin-bottom: 0.3rem;
    }
</style>