<template>
    <section v-if="showAnime">
        <div class="grid-layout">
            <div class="anime-data">
                <nuxt-link :to="'/' + title">
                    <div class="anime-poster">
                        <img :src="anime.img">
                    </div>
                </nuxt-link>
                <div class="anime-info">
                    <div class="anime-title">
                        <h1>{{title}}
                            <div class="large-line"></div>
                        </h1>
                    </div>
                    <div>
                        <p>Episode <span class="episode">{{episode}}</span></p>
                    </div>
                </div>
            </div>
            <div class="episode-manager">
                <div class="episode-buttons">
                    <nuxt-link v-if="prevEp" :to="'/' + title + '/' + prevEp"><span>Prev</span></nuxt-link>
                    <nuxt-link v-if="nextEp" :to="'/' + title + '/' + nextEp"><span>Next</span></nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            title: '',
            episode: 0,
            prevEp: '',
            nextEp: '',
            anime: {},
            showAnime: false
        }
    },
    methods: {
        async getAnime() {
            axios.get('https://gogoanime.now.sh/api/v1/Search/' + this.$route.params.anime).then(res => {
                this.anime = res.data.search[0];
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
    }
    .grid-layout {
        display: grid;
        grid-template-columns: 7fr 1fr;
        column-gap: 1rem;
    }
    .anime-poster {
        overflow: hidden;
        width: 110px;
        height: 140px;
        box-shadow: 0 0 7px crimson;
        
        &:hover {
            box-shadow: 0 0 21px crimson;

            img {
                transform: scale(1.2);
            }
        }
        img {
            width: 100%;
            height: 100%;
            object-position: center;
            object-fit: cover;
            transition: 0.2s ease;
            overflow: hidden;
        }
    }
    h1 {
        font-size: 1.6rem;
        font-weight: normal;
    }
    .anime-data {
        display: flex;
    }
    .anime-title {
        display: flex;
    }
    .anime-info {
        margin-left: 1rem;
    }
    p {
        font-size: 1.05rem;
    }
    .episode {
        color: crimson;
        text-shadow: 0 0 7px crimson;
    }
    .large-line {
        width: 100%;
        background: crimson;
        box-shadow: 0 0 10px crimson;
        min-height: 0.2rem;
        margin-bottom: 0.3rem;
    }
    .episode-manager {
        display: flex;
        justify-content: flex-end;
        margin: 1rem 0;
    }
    a span {
        background: #2c2f33;
        padding: 0.5rem 0.8rem;
        border-radius: 7px;
        transition: 0.4s;
        color: white;

        &:hover {
            background: crimson;
        }
    }
</style>