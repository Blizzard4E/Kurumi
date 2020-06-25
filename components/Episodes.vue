<template>
    <section class="section-grid-layout">
        <div class="section-title">
            <h1>Episodes :<div class="large-line"></div></h1>
        </div>
        <div class="episodes-grid-layout">
            <nuxt-link :to="'/'+ anime.title + '/' + anime.episodes[index].id" class="episode-wrapper" v-for="(episode, index) in anime.episodes" :key="index.id">Episode {{index + 1}}</nuxt-link>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        anime: ''
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
    h1 {
        font-size: 1.5rem;
        margin: 1rem 0;
        font-weight: normal;
    }
    .section-grid-layout {
        display: grid;
        grid-template-columns: 1fr 6fr;
    }
    .section-title {
        display: flex;
    }
    .episodes-grid-layout {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
    .episode-wrapper {
        margin: 1rem;
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
        box-shadow: 0 0 14px rgba(220, 20, 60, 0.8);
        min-height: 0.2rem;
        margin-bottom: 0.2rem;
    }
    
</style>