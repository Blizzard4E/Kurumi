<template>
    <section v-if="showAnime">
        <div class="video-wrapper">
            <div class="section-title">
                <h1>Video Player :<div class="large-line"></div></h1>
            </div>
            <div :class=" { active: activeServer == i, inactive: activeServer != i }" v-for="(server, i) in anime.servers" :key="i.id">
                <iframe :src="server.iframe" allowfullscreen frameborder="0" scrolling="no" @load="setVideoHeight(i)" ref="servers" :height="videoHeight"></iframe>
            </div>
            <div class="episode-manager">
                <nuxt-link v-if="prevEp" :to="'/' + title + '/' + prevEp"><span>Prev</span></nuxt-link>
                <nuxt-link v-if="nextEp" :to="'/' + title + '/' + nextEp"><span>Next</span></nuxt-link>
            </div>
        </div>
        <div class="servers-wrapper">
            <div class="section-title">
                <h1>Servers :<div class="large-line"></div></h1>
            </div>
            <div class="servers">
                <button :class=" { active: activeServer == i, inactive: activeServer != i }" v-for="(server, i) in anime.servers" :key="server.id" class="server" @click="changeServer(i)">
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
            videoHeight: 0,
            episode: 0,
            prevEp: '',
            nextEp: '',
            activeServer: 0
        }
    },
    methods: {
        async getAnime() {
            axios.get("https://gogoanime.now.sh/api/v1/AnimeEpisodeHandler/" + this.$route.params.watch).then(res => {
                this.anime = res.data.anime[0];
                for(let i=0;i<this.anime.servers.length;i++) {
                    if(!this.anime.servers[i].iframe.includes('https://'))
                    {
                       this.anime.servers[i].iframe = 'https://' + this.anime.servers[i].iframe;
                    }
                    console.log(this.anime.servers[i].iframe);
                }
                if(this.episode > 1) {
                    let episodeArray = this.$route.params.watch.split("-").reverse();
                    episodeArray[0] = this.episode - 1;
                    this.prevEp = episodeArray.reverse().join('-');
                }
                if(this.episode + 1 <= this.anime.totalEpisodes) {
                    let episodeArray = this.$route.params.watch.split("-").reverse();
                    episodeArray[0] = this.episode + 1;
                    this.nextEp = episodeArray.reverse().join('-');
                }
                this.showAnime = true;
            })
        },
        setVideoHeight(i) {  
            if(this.activeServer == i)
            {
                this.videoHeight = this.$refs.servers[i].clientWidth*9/16;
            }
        },
        changeServer(i) {
            this.activeServer = i;
        }
    },
    mounted() {
        this.title = this.$route.params.anime;
        this.episode = parseInt(this.$route.params.watch.split("-").reverse()[0]);
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
        display: grid;
        grid-template-columns: 8fr 2fr;
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
            box-shadow: 0 0 14px crimson;
        }
    }
    h1 {
        font-weight: normal;
        font-size: 1.3rem;
    }
    h2 {
        font-weight: normal;
        font-size: 1rem;
    }
    a {
        
    }
    a span {
        background: #2c2f33;
        padding: 0.5rem 0.8rem;
        border-radius: 7px;
        transition: 0.4s;
        color: white;
        margin-left: 0.5rem;

        &:hover {
            background: crimson;
            box-shadow: 0 0 14px crimson;
        }
    }
    .episode-manager {
        margin-top: 1rem;
        display: flex;
        justify-content: flex-end;
    }
    .section-title {
        display: flex;
        margin-bottom: 0.5rem;
    }
    .servers {
        display: grid;
        row-gap: 1rem;
    }
    .server {
        padding: 0.5rem;
        text-align: center;
        background: #2c2f33;
        transition: 0.5s;
        border-radius: 7px;

        &:hover {
            cursor: pointer;
            background: crimson;
        }
    }
    .servers-wrapper {
        margin: 0 1rem;
    }
    .large-line {
        width: 100%;
        background: crimson;
        box-shadow: 0 0 14px crimson;
        min-height: 0.2rem;
        margin-bottom: 0.3rem;
    }
    div.inactive {
        display: none;
    }
    div.active {
        display: block;
    }
    button.active {
        background: crimson;
        box-shadow: 0 0 14px crimson;
    }
    @media only screen and (max-width: 599.98px) {
        section {
            grid-template-columns: 1fr;
        }
        .servers-wrapper {
            margin: 0;
        }
    }
    @media (min-width: 600px) and (max-width: 767.98px) {
        section {
            grid-template-columns: 1fr;
        }
        .servers-wrapper {
            margin: 0;
        }
    }

    @media (min-width: 768px) and (max-width: 991.98px) {

    }

    @media (min-width: 992px) and (max-width: 1199.98px) {

    }

    @media only screen and (min-width: 1200px) {

    }
</style>