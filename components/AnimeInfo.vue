<template>
    <section>
        <div class="anime-data">
            <div class="top-layout">
                <div class="anime-poster">
                    <img :src="anime.img" alt="Anime Poster">
                </div>
                <div class="anime-info">
                    <h1 class="anime-title">{{anime.title}}</h1>
                    <div class="large-line"></div>
                    <div class="anime-genres">
                        <span>Genre:</span>
                        <ul>
                            <li class="genre" v-for="genre in anime.genres" :key="genre.id">{{genre}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="bot-layout">
                <p class="anime-synopsis">{{anime.synopsis}}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props:{
        anime: {}
    }
}
</script>

<style lang="scss" scoped>
    * {
        color: white;
    }
    section {
        margin: 1rem;

        &:hover {
            .anime-poster {
                box-shadow: 0 0 14px crimson;

                img {
                    transform: scale(1.1);
                }
            }
        }
    }
    .anime-poster {
        min-width: 215px;
        min-height: 300px;
        max-width: 215px;
        max-height: 300px;
        box-shadow: 0 0 7px rgba(220, 20, 60, 0.8);
        overflow: hidden;
        
        &:hover {
            img {
                transform: scale(1.1);
            }
        }

        img {
            width: 100%;
            height: 100%;
            object-position: center;
            object-fit: cover;
            transition: 0.2s ease;
        }
    }
    .top-layout {
        display: flex;
    }
    .anime-info {
        margin: 0 1rem;
        font-family: 'Sansation Regular';
    }
    .large-line {
        width: 100%;
        background: white;
        min-height: 0.2rem;
        margin-bottom: 0.2rem;
    }
    .anime-title {
        font-family: 'Sansation Regular';
        font-size: 1.8rem;
        font-weight: normal;
    }
    ul {
        display: flex;
    }
    .anime-genres {
        display: flex;
        flex-wrap: wrap;
    }
    .genre {
        color: silver;
        margin-left: 0.3rem;
        text-transform: capitalize;
        text-shadow: 0 0 7px silver;

        &:last-child {
            &::after {
                content: "";
        }
        }
        &::after {
            content: ",";
        }
    }
    .bot-layout {
        margin-top: 1rem;
    }
    .anime-synopsis {
        font-size: 1rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        font-family: 'Sansation Light';
    }
</style>