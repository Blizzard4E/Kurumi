<template>
    <section v-if="showAnime">
        <div class="container">
            <div class="video-wrapper">
                <embed :src="'https://' + anime.servers[0].iframe" allowfullscreen>
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
            showAnime: false
        }
    },
    methods: {
        async getAnime() {
            axios.get("https://gogoanime.now.sh/api/v1/AnimeEpisodeHandler/" + this.$route.params.watch).then(res => {
                this.anime = res.data.anime[0];
                this.showAnime = true;
                console.log(this.anime);
            })
        }
    },
    mounted() {
        this.getAnime();
    }
}
</script>

<style lang="scss" scoped>
    section {
        margin: 1rem;
    }
    .video-wrapper {
        display: flex;
        justify-content: center;
    }
    embed {
        width: 900px;
        height: 650px;
        object-fit: fill;
    }
</style>