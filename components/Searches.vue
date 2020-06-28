<template>
    <section>
        <div class="search-wrapper">
            <form @submit.prevent=""><input @submit.prevent="" v-model="search" type="text" placeholder="Search..." autofocus spellcheck="false"></form>
        </div>
        <div class="results-wrapper">
            <nuxt-link class="anime-info" :to="'/' + anime.animeID" v-for="anime in results" :key="anime.id">
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
    </section>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            search: '',
            results: {
                animeID: ''
            }
        }
    },
    methods: {
        getResults(_search) {
            axios.get("https://gogoanime.now.sh/api/v1/Search/" + _search).then(res => {
                if(this.search == '') {
                    this.results = {}
                }
                else {
                    this.results = res.data.search;
                    for(let i=0;i<this.results.length;i++) {
                        this.results[i].animeID = this.results[i].title.split(' ').join('-');
                        this.results[i].animeID = this.results[i].animeID.replace('/', '-');
                        this.results[i].animeID = this.results[i].animeID.replace(':', '-');
                        this.results[i].animeID = this.results[i].animeID.replace('?', '');
                        this.results[i].animeID = this.results[i].animeID.replace('(', '');
                        this.results[i].animeID = this.results[i].animeID.replace(')', '');
                    }
                }
            })
        }
    },
    mounted() {
        this.search = localStorage.getItem('searchItem');
    },
    watch: {
        search(val) {
            if(val == '') {
                this.results = {}
            }
            else {
                this.getResults(val);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @media only screen and (max-width: 599.98px) {
        .results-wrapper {
            grid-template-columns: 1fr 1fr;
        }
        input {
            width: 300px;
        }
    }

    @media (min-width: 600px) and (max-width: 767.98px) {
        .results-wrapper {
            grid-template-columns: 1fr 1fr 1fr;
        }
        input {
            width: 500px;
        }
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
        .results-wrapper {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
        input {
            width: 500px;
        }
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
        .results-wrapper {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }
        input {
            width: 500px;
        }
    }

    @media only screen and (min-width: 1200px) {
        .results-wrapper {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        }
        input {
            width: 500px;
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
    .search-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;

        form {
            border-radius: 7px;
            transition: 0.2s ease;
            
            &:focus-within {
                box-shadow: 0 0 14px crimson;
            }
        }

        input {
            padding: 0.5rem 1rem;
            background: #2c2f33;
            border: none;
            border-radius: 7px;
            transition: 0.5s;
            outline: none;
            color: white;
            font-size: 1rem;
            transition: 0.2s ease;

            &::placeholder {
                color: rgba(192, 192, 192, 0.5);
                font-size: 1rem;
            }

            &:focus {
                background: crimson;

                &::placeholder {
                    color: rgba(255, 255, 255, 0.8);
                }
            }
        }
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