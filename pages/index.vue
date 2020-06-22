<template>
    <div>
        <header>
            <div class="container">
                <Navbar></Navbar>
                <Tops></Tops>
            </div>
        </header>
        <main class="container">
            <Populars></Populars>
            <Recents></Recents>
        </main>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Tops from '../components/Tops'
import Populars from '../components/Populars'
import Recents from '../components/Recents'

export default {
    components: {
        Navbar,
        Tops,
        Populars,
        Recents
    }
}
</script>

<style lang="scss" scoped>
    header {
        background: linear-gradient(rgba(220, 20, 60, 0.2), #23272a), url('../assets/mainWallpaper.jpg');
        background-position: top;
        background-size: cover;
    }
</style>
