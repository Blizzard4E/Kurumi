<template>
    <div>
        <header>
            <div class="container">
                <Navbar></Navbar>
                <AnimeInfo v-bind:anime="anime"></AnimeInfo>
            </div>
        </header>
        <main>
            <div class="container">
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
            anime: {}
        }
    },
    methods: {
        getAnime() {
            axios.get('https://gogoanime.now.sh/api/v1/Search/' + this.$route.params.anime).then(res => {
                this.anime = res.data.search[0];
                console.log(res.data.search[0]);
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