<template>
    <section v-if="showAnime">
        <client-only>
            <div class="section-title">
                <div>
                    <h1>Recently Added</h1>
                    <div class="large-line"></div>
                </div>
            </div>
            <div class="dt">
                <carousel  :per-page="6" :paginationEnabled="false" :autoplay="true" :autoplayTimeout="4000" :loop="true">
                    <slide class="anime-slide" v-for="anime in animes" :key="anime.id">
                        <nuxt-link :to="'/' + anime.title" class="anime-info">
                            <div class="anime-poster">
                                <img :src="anime.img" alt="Anime Poster">
                            </div>
                            <div>
                                <h2 class="anime-title">{{anime.title}}</h2>
                            </div>
                        </nuxt-link>
                    </slide>
                </carousel>
            </div>
            <div class="sd">
                <carousel  :per-page="5" :paginationEnabled="false" :autoplay="true" :autoplayTimeout="4000" :loop="true">
                    <slide class="anime-slide" v-for="anime in animes" :key="anime.id">
                        <nuxt-link :to="'/' + anime.title" class="anime-info">
                            <div class="anime-poster">
                                <img :src="anime.img" alt="Anime Poster">
                            </div>
                            <div>
                                <h2 class="anime-title">{{anime.title}}</h2>
                            </div>
                        </nuxt-link>
                    </slide>
                </carousel>
            </div>
            <div class="tb">
                <carousel  :per-page="4" :paginationEnabled="false" :autoplay="true" :autoplayTimeout="4000" :loop="true">
                    <slide class="anime-slide" v-for="anime in animes" :key="anime.id">
                        <nuxt-link :to="'/' + anime.title" class="anime-info">
                            <div class="anime-poster">
                                <img :src="anime.img" alt="Anime Poster">
                            </div>
                            <div>
                                <h2 class="anime-title">{{anime.title}}</h2>
                            </div>
                        </nuxt-link>
                    </slide>
                </carousel>
            </div>
            <div class="pb">
                <carousel  :per-page="3" :paginationEnabled="false" :autoplay="true" :autoplayTimeout="4000" :loop="true">
                    <slide class="anime-slide" v-for="anime in animes" :key="anime.id">
                        <nuxt-link :to="'/' + anime.title" class="anime-info">
                            <div class="anime-poster">
                                <img :src="anime.img" alt="Anime Poster">
                            </div>
                            <div>
                                <h2 class="anime-title">{{anime.title}}</h2>
                            </div>
                        </nuxt-link>
                    </slide>
                </carousel>
            </div>
            <div class="mb">
                <carousel  :per-page="2" :paginationEnabled="false" :autoplay="true" :autoplayTimeout="4000" :loop="true">
                    <slide class="anime-slide" v-for="anime in animes" :key="anime.id">
                        <nuxt-link :to="'/' + anime.title" class="anime-info">
                            <div class="anime-poster">
                                <img :src="anime.img" alt="Anime Poster">
                            </div>
                            <div>
                                <h2 class="anime-title">{{anime.title}}</h2>
                            </div>
                        </nuxt-link>
                    </slide>
                </carousel>
            </div>
        </client-only>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            animes: {},
            showAnime: false
        }
    },
    methods: {
        async getAnimes() {
            axios.get('https://gogoanime.now.sh/api/v1/RecentReleaseEpisodes/1').then(res => {
                this.animes = res.data.anime;
                this.showAnime = true;
            });
        }
    },
    mounted() {
        this.getAnimes();
    }
}
</script>

<style lang="scss" scoped>
    * {
        font-family: 'Sansation Regular';
        color: white;
    }
    section {
        margin: 1rem;
    }
    .anime-slide {
        display: flex;
        justify-content: center;
    }
    .large-line {
        width: 100%;
        background: crimson;
        box-shadow: 0 0 14px rgba(220, 20, 60, 0.8);
        min-height: 0.2rem;
        margin-bottom: 0.2rem;
    }
    .anime-info {
        margin: 1rem;

        &:hover {
            cursor: pointer;

            .anime-poster {
                box-shadow: 0 0 21px crimson;

                img {
                    transform: scale(1.2);
                }
            }
        }
    }
    .anime-title {
        margin-top: 0.3rem;
        font-size: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: 2rem;
        line-height: 1rem;
        max-width: 150px;
        display: flex;
        justify-content: center;
        font-weight: normal;
    }
    .anime-poster {
        overflow: hidden;
        width: 150px;
        height: 210px;
        box-shadow: 0 0 7px crimson;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-position: center;
            object-fit: cover;
            transition: 0.2s ease;
        }
    }
    h1 {
        font-size: 1.75rem;
        font-weight: normal;
    }
    .section-title {
        display: flex;
    }
</style>