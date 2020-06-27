<template>
    <section>
        <ul>
            <div><nuxt-link to="/" class="nav-link">Home</nuxt-link></div>
            <div><nuxt-link to="/genres" class="nav-link">Genre</nuxt-link></div>
            <form @submit.prevent="searchFor()"><input v-model="search" v-if="!noSearch" type="text" placeholder="Search..."></form>
        </ul>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    section {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        z-index: 1;
        background: #23272a;
    }
    ul {
        display: grid;
        grid-template-columns: 1fr;
        
        div, form {
            display: flex;
            justify-content: center;
            width: 100%;
            background: #23272a;
        }

        a {
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 7px;
            background: #2c2f33;
        }
    }
    form {
        all: unset;
    }
    input {
        padding: 0.5rem;
        border: none;
        border-radius: 7px;
        background: #2c2f33;
        outline: none;
        transition: 0.2s ease;

        &::placeholder {
            color: rgba(192, 192, 192, 0.5);
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
</style>