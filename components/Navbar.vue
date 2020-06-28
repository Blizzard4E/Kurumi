<template>
    <nav>
        <div class="section-title">
            <nuxt-link to="/" class="title">
                <h1>Kuru<span>mi</span></h1>
            </nuxt-link>
        </div>
        <div class="">
            <ul>
                <li><nuxt-link to="/genres" class="nav-link">Genre</nuxt-link></li>
                <li><form @submit.prevent="searchFor()"><input v-model="search" v-if="!noSearch" type="text" placeholder="Search" spellcheck="false"></form></li>
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
    .section-title {
        display: flex;
        align-items: center;
    }
    @media only screen and (max-width: 599.98px) {
        input {
            width: 100px;
        }
    }
    form {
        border-radius: 7px;
        transition: 0.2s ease;
        
        &:focus-within {
            box-shadow: 0 0 14px crimson;
        }
    }
    input {
        border: none;
        border-radius: 7px;
        background: #2c2f33;
        outline: none;
        transition: 0.2s ease;
        width: 100px;
        padding: 0.5rem;
        font-size: 1rem;

        &::placeholder {
            color: rgba(192, 192, 192, 0.5);
            font-size: 1rem;
        }
        &:focus {
            background: crimson;

            &::placeholder {
                color: rgba(255, 255, 255, 0.8);
            }
        }
    }
    * {
        color: white;
        font-family: 'Sansation Regular';
    }
    li {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ul {
        display: flex;
        justify-content: flex-end;
        margin: 1rem;
    }
    nav {
        display: grid;
        grid-template-columns: 1fr 3fr;
        min-height: 5rem;
        padding: 0 1rem;
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
    @media only screen and (max-width: 599.98px) {
            
    }

    @media (min-width: 600px) and (max-width: 767.98px) {

    }

    @media (min-width: 768px) and (max-width: 991.98px) {
        input {
            width: 150px;
        }
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
        input {
            width: 150px;
        }
    }

    @media only screen and (min-width: 1200px) {
        input {
            width: 150px;
        }
    }
</style>