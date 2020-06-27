<template>
    <section>
        <header>
            <div class="container">
                <Navbar v-bind:noSearch="true"></Navbar>
            </div>
        </header>
        <main class="container">
            <Searches></Searches>
        </main>
    </section>
</template>

<script>
import Navbar from '../../components/Navbar'
import Searches from '../../components/Searches'

export default {
    props: {
        search: ''
    },
    components: {
        Navbar,
        Searches
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