<template>
    <section>
        <div class="anime-data">
            <div class="top-layout">
                <nuxt-link :to="'/' + anime.title" class="anime-poster">
                    <img :src="anime.img" alt="Anime Poster">
                </nuxt-link>
                <div class="anime-info">
                    <h1 class="anime-title">{{anime.title}}</h1>
                    <div class="large-line"></div>
                    <div class="moreInfos">
                        <span>
                            <span class="moreInfos-title">Other Names:</span>
                            <span class="moreInfo">
                                {{anime.otherName}}
                            </span>
                        </span>
                    </div>
                    <div class="moreInfos">
                        <span>
                            <span class="moreInfos-title">Genre:</span>
                            <span v-for="genre in anime.genres" :key="genre.id" class="moreInfo">
                                <a @click="getGenre(genre)">{{genre}}</a>
                            </span>
                        </span>
                    </div>
                    <div class="moreInfos">
                        <span>
                            <span class="moreInfos-title">Released:</span>
                            <span class="moreInfo">
                                {{anime.released}}
                            </span>
                        </span>
                    </div>
                    <div class="moreInfos">
                        <span>
                            <span class="moreInfos-title">Status:</span>
                            <span class="moreInfo">
                                {{anime.status}}
                            </span>
                        </span>
                    </div>
                    <div class="moreInfos">
                        <span>
                            <span class="moreInfos-title">Total Episodes:</span>
                            <span class="moreInfo">
                                {{anime.totalEpisodes}}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div class="bot-layout">
                <p class="anime-synopsis">{{anime.synopsis}}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props:{
        anime: {}
    },
    methods: {
        getGenre(val) {
            localStorage.setItem("genreSearch", val);
            this.$router.push({ path: '/genres'});
        }
    }
}
</script>

<style lang="scss" scoped>
    button {
        all: unset;
    }
    .moreInfos {
        line-height: 1rem;
        margin: 0.3rem 0;
    }
    span {
        font-size: 1rem;
    }
    
    .moreInfo {
        color: silver;
        text-shadow: 0 0 7px rgba(192, 192, 192, 0.8);

        a {
            color: silver;
            text-shadow: 0 0 7px rgba(192, 192, 192, 0.8);
            text-transform: capitalize;

            &:hover {
                cursor: pointer;
            }

            &::after {
                content: ", ";
            }
        }

        &:last-child {
            a {
                &::after {
                    content: "";
                }
            }
        }
    }

    * {
        color: white;
        font-weight: normal;
    }
    section {
        margin: 1rem;
    }
    .slide {
        display: grid;
    }
    .playbutton-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        transition: 0.2s ease;
        margin: 1rem;

        &:hover {
            transform: scale(1.1);
        }

        img {
            width: 100%;
        }
    }
    .anime-poster {
        min-width: 215px;
        min-height: 300px;
        max-width: 215px;
        max-height: 300px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-position: center;
            object-fit: cover;
            transition: 0.2s ease;

            &:hover {
                transform: scale(1.1);
            }
        }
    }
    .top-layout {
        display: flex;
        margin-top: 1rem;
    }
    .anime-info {
        width: 100%;
        margin-left: 1rem;
        font-family: 'Sansation Regular';
    }
    .large-line {
        width: 100%;
        background: white;
        min-height: 0.2rem;
        margin-bottom: 0.2rem;
    }
    .anime-title {
        font-family: 'Sansation Regular';
        font-size: 1.8rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: normal;
    }
    .bot-layout {
        margin-top: 1rem;
    }
    .anime-synopsis {
        font-size: 1rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: 'Sansation Light';
    }
    /* Mobiles */
    @media only screen and (max-width: 599.98px) {
        .slide {
            grid-template-columns: 1fr;
        }
        .anime-poster {
            min-width: 150px;
            min-height: 210px;
            max-width: 150px;
            max-height: 210px;
        }
        .anime-title {
            font-size: 1.3rem;
        }
        .large-line {
            width: 95%;
        }
    }

    /* Phablets */
    @media (min-width: 600px) and (max-width: 767.98px) {
        .slide {
            grid-template-columns: 1fr;
        }
        .anime-poster {
            min-width: 150px;
            min-height: 210px;
            max-width: 150px;
            max-height: 210px;
        }
        .anime-title {
            font-size: 1.3rem;
        }
        .large-line {
            width: 95%;
        }
    }

    /* Tablets */
    @media (min-width: 768px) and (max-width: 991.98px) {
        .slide {
            grid-template-columns: 1fr;
        }
        .large-line {
            width: 95%;
        }
    }

    /* Small Desktops */
    @media (min-width: 992px) and (max-width: 1199.98px) {
        .slide {
            grid-template-columns: 1fr 5fr;
        }
        .anime-poster {
            box-shadow: 0 0 7px rgba(220, 20, 60, 0.8);

            &:hover {
                box-shadow: 0 0 14px crimson;
            }
        }
    }

    /* Desktops */
    @media only screen and (min-width: 1200px) {
        .slide {
            grid-template-columns: 1fr 5fr;         
        }
        .anime-poster {
            box-shadow: 0 0 7px rgba(220, 20, 60, 0.8);

            &:hover {
                box-shadow: 0 0 14px crimson;
            }
        }
    }
</style>