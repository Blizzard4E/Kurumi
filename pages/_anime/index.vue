<template>
    <div>
        <header>
            <div class="container">
                <Navbar></Navbar>
                <div v-if="showAnime">
                    <AnimeInfo v-bind:anime="anime"></AnimeInfo>
                </div>
            </div>
        </header>
        <main>
            <div v-if="showAnime" class="container">
                <Episodes v-bind:anime="anime"></Episodes>
            </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios'
import Navbar from '../../components/Navbar'
import AnimeInfo from '../../components/AnimeInfo'
import Episodes from '../../components/Episodes'

export default {
    components: {
        Navbar,
        AnimeInfo,
        Episodes
    },
    data() {
        return {
            anime: {
                animeID: ''
            },
            showAnime: false
        }
    },
    methods: {
        getAnime() {
            axios.get('https://gogoanime.now.sh/api/v1/Search/' + this.$route.params.anime).then(res => {
                this.anime = res.data.search[0];
                this.anime.animeID = this.anime.title.split(' ').join('-');
                this.anime.animeID = this.anime.animeID.replace('/', '-');
                this.anime.animeID = this.anime.animeID.replace(':', '-');
                this.anime.animeID = this.anime.animeID.replace('?', '');
                this.anime.animeID = this.anime.animeID.replace('(', '');
                this.anime.animeID = this.anime.animeID.replace(')', '');
                this.showAnime = true;
            })
        }
    },
    mounted() {
        this.getAnime();
    }
}
</script>

<style lang="scss" scoped>
    header {
        background: linear-gradient(rgba(220, 20, 60, 0.2), #23272a), url('../../assets/mainWallpaper.jpg');
        background-position: top;
        background-size: cover;
    }
</style>