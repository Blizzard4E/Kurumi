<template>
    <section>
        <header>
            <div class="container">
                <Navbar></Navbar>
            </div>
        </header>
        <main class="container">
            <Genres></Genres>
        </main>
    </section>
</template>

<script>
import Navbar from '../../components/Navbar'
import Genres from '../../components/Genres'

export default {
    components: {
        Navbar,
        Genres
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