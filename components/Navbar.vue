<template>
    <nav>
        <div>
            <nuxt-link to="/" class="title">
                <h1>Kuru<span>mi</span></h1>
            </nuxt-link>
        </div>
        <ul>
            <nuxt-link to="/" class="nav-link">Home</nuxt-link>
            <nuxt-link to="/" class="nav-link">About</nuxt-link>
        </ul>
    </nav>   
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    * {
        color: white;
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        min-height: 5rem;
    }
    h1 {
        font-size: 1.8rem;
        font-family: 'Sansation Bold';
        font-weight: normal;
    }
    span {
        color: crimson;
        text-shadow: 0 0 7px crimson;
    }
    .nav-link {
        color: silver;
        transition: 0.2s ease;
        padding: 1rem;
        font-family: 'Sansation Regular';
        
        &:hover {
            color: white;
        }
    }
</style>