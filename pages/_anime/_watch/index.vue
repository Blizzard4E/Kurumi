<template>
    <section>
        <header>
            <div class="container">
                <Navbar></Navbar>
                <EpisodeInfo></EpisodeInfo>
            </div>
        </header>
        <main class="container">
            <VideoPlayer></VideoPlayer>
        </main>
    </section>
</template>

<script>
import axios from 'axios'
import Navbar from '../../../components/Navbar'
import VideoPlayer from '../../../components/VideoPlayer'
import EpisodeInfo from '../../../components/EpisodeInfo'

export default {
    components: {
        Navbar,
        VideoPlayer,
        EpisodeInfo
    }
}
</script>

<style lang="scss" scoped>
    header {
        background: linear-gradient(rgba(220, 20, 60, 0.2), #23272a), url('../../../assets/mainWallpaper.jpg');
        background-position: top;
        background-size: cover;
    }
</style>