<template>
    <section>
        <div class="select-wrapper">
            <div class="section-title">
                <h1>Genres :<div class="large-line"></div></h1>
            </div>
            <div class="genres-wrapper">
                <button @click="selectGenre(i)" :class="{ active: genre == genres[search], inactive: genre != genres[search], genre}" v-for="(genre, i) in genres" :key="i.id">
                    <h2>{{genre}}</h2>
                </button>
            </div>
        </div>
        <div class="section-title">
            <h1>Results :<div class="large-line"></div></h1>
        </div>
        <div class="results-wrapper" ref="result">
            <nuxt-link class="anime-info" :to="'/' + anime.title" v-for="anime in results" :key="anime.id">
                <div>
                    <div class="anime-poster">
                        <img :src="anime.img" alt="Anime Poster">
                    </div>
                    <div>
                        <h1 class="anime-title">{{anime.title}}</h1>
                    </div>
                </div>
            </nuxt-link>
        </div>
        <div class="pages-wrapper">
            <div>
                <button class="page-btn" @click="changePage(-10)">
                    <h2>-10</h2>
                </button>
                <button class="page-btn" @click="changePage(-5)">
                    <h2>-5</h2>
                </button>
                <button class="page-btn" @click="changePage(-1)">
                    <h2>&lt;</h2>
                </button>
                <div class="page-btn active">
                    <h2>Page {{page}}</h2>
                </div>
                <button class="page-btn" @click="changePage(1)">
                    <h2>&gt;</h2>
                </button>
                <button class="page-btn" @click="changePage(5)">
                    <h2>5+</h2>
                </button>
                <button class="page-btn" @click="changePage(10)">
                    <h2>10+</h2>
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
            genres: ["action", "adventure", "cars", "comedy", "dementia", "demons", "drama", "dub", "ecchi", "fantasy", "game", "harem", "historical", "horror", "josei", "kids", "magic", "martial arts", "mecha", "military", "music", "mystery", "parody", "polic", "psychological", "romance", "school", "sci-fi", "seinen", "shoujo", "shoujo ai", "shounen", "shounen ai", "slice of life", "space", "sports", "super power", "supernatural", "thriller", "vampire", "yaoi", "yuri"],
            search: '0',
            page: 1,
            results: {}
        }
    },
    methods: {
        async getResults() {
            this.results = {};
            axios.get("https://gogoanime.now.sh/api/v1/Genre/" + this.genres[this.search] + '/' + this.page).then(res => {
                this.results = res.data.anime;
                this.$refs.result.scrollIntoView(true);
            })
        },
        selectGenre(i) {
            this.search = i;
            this.page = 1;
            this.getResults();
        },
        changePage(val) {
            if(this.page + val >= 1){
                this.page += val;    
            }
            else {
                this.page = 1;
            }
            this.getResults();
        }
    },
    mounted() {
        if(localStorage.getItem("genreSearch"))
        {
            for(let i=0;i<this.genres.length;i++)
            {
                if(localStorage.getItem("genreSearch") == this.genres[i])
                {
                    this.search = i;
                    localStorage.removeItem("genreSearch");
                }
            }
        }
        this.getResults();
    }
}
</script>

<style lang="scss" scoped>
    .page-btn {
        margin: 0 0.3rem;
    }
    .pages-wrapper {
        display: flex;
        justify-content: center;

        div {
            display: flex;
        }
    }
    button {
        all: unset;
    }
    .inactive {
        background: #2c2f33;
    }
    .active {
        background: crimson;
        box-shadow: 0 0 14px crimson;
    }
    @media only screen and (max-width: 599.98px) {
        .results-wrapper, .genres-wrapper {
            grid-template-columns: 1fr 1fr;
        }
        .select-wrapper {
            grid-template-columns: 1fr;
        }
    }

    @media (min-width: 600px) and (max-width: 767.98px) {
        .results-wrapper, .genres-wrapper {
            grid-template-columns: 1fr 1fr 1fr;
        }
        .select-wrapper {
            grid-template-columns: 1fr;
        }
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
        .results-wrapper, .genres-wrapper {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
        .select-wrapper {
            grid-template-columns: 1fr 6fr;
        }
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
        .results-wrapper, .genres-wrapper {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }
        .select-wrapper {
            grid-template-columns: 1fr 6fr;
        }
    }

    @media only screen and (min-width: 1200px) {
        .results-wrapper, .genres-wrapper {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }
        .select-wrapper {
            grid-template-columns: 1fr 6fr;
        }
    } 
    .anime-info {
        display: flex;
        justify-content: center;

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
    .results-wrapper {
        display: grid;
        row-gap: 1rem;
        margin: 1rem 0;
    }
    h2 {
        font-size: 1rem;
        text-transform: capitalize;
    }
    .genre, .page-btn {
        padding: 0.5rem;
        text-align: center;
        transition: 0.6s;
        border-radius: 7px;

        &:hover {
            cursor: pointer;
            background: crimson;
            box-shadow: 0 0 14px crimson;
        }
    }
    .genres-wrapper {
        display: grid;
        row-gap: 1rem;
        column-gap: 1rem;
    }
    h1 {
        font-size: 1.3rem;
    }
    .select-wrapper {
        display: grid;
        margin: 1rem 0;
    }
    .section-title {
        display: flex;
        margin-bottom: 0.5rem;
    }
    .large-line {
        width: 100%;
        background: crimson;
        box-shadow: 0 0 14px rgba(220, 20, 60, 0.8);
        min-height: 0.2rem;
        margin-bottom: 0.2rem;
    }
    section {
        margin: 1rem;
    }
    * {
        color: white;
        font-family: 'Sansation Regular';
        font-weight: normal;
    }
</style>