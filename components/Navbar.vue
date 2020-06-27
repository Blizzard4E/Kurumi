<template>
    <nav>
        <div>
            <nuxt-link to="/" class="title">
                <h1>Kuru<span>mi</span></h1>
            </nuxt-link>
        </div>
        <div class="dt sd tb pb">
            <ul>
                <nuxt-link to="/" class="nav-link">Home</nuxt-link>
                <nuxt-link to="/genres" class="nav-link">Genre</nuxt-link>
                <form @submit.prevent="searchFor()"><input v-model="search" v-if="!noSearch" type="text" placeholder="Search..."></form>
            </ul>
        </div>
        <div class="mb">
            <ul>
                <nuxt-link to="/genres" class="nav-link">Genre</nuxt-link>
                <form @submit.prevent="searchFor()"><input v-model="search" v-if="!noSearch" type="text" placeholder="Search..."></form>
            </ul>
        </div>
        <!-- <div class="mb">
            <SideNav></SideNav>
        </div> -->
    </nav>   
</template>

<script>
import SideNav from '../components/SideNav'

export default {
    components: {
        SideNav
    },
    props: {
        noSearch: false
    },
    data() {
        return {
            search: ''
        }
    },
    methods: {
        searchFor() {
            localStorage.setItem('searchItem', this.search);
            this.$router.push({ path: '/search' });
        }
    }
}
</script>

<style lang="scss" scoped>
    @media only screen and (max-width: 599.98px) {
        input {
            width: 100px;
        }
    }
    form {
        all: unset;
    }
    input {
        margin-left: 0.5rem;
        padding: 0.5rem;
        border: none;
        border-radius: 7px;
        background: #2c2f33;
        outline: none;
        transition: 0.2s ease;

        &::placeholder {
            color: rgba(192, 192, 192, 0.5);
            font-size: 1rem;
        }
        &:focus {
            background: crimson;
            box-shadow: 0 0 14px crimson;

            &::placeholder {
                color: rgba(255, 255, 255, 0.8);
            }
        }
    }
    * {
        color: white;
        font-family: 'Sansation Regular';
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        min-height: 5rem;
    }
    h1 {
        font-size: 2rem;
        font-weight: normal;
    }
    span {
        color: crimson;
        text-shadow: 0 0 7px crimson;
        font-family: 'Sansation Bold';
    }
    .nav-link {
        color: silver;
        transition: 0.2s ease;
        padding: 1rem;
        
        &:hover {
            color: white;
        }
    }
    /* @media only screen and (max-width: 599.98px) {
            
    }

    @media (min-width: 600px) and (max-width: 767.98px) {

    }

    @media (min-width: 768px) and (max-width: 991.98px) {

    }

    @media (min-width: 992px) and (max-width: 1199.98px) {

    }

    @media only screen and (min-width: 1200px) {

    }  */
</style>