<template>
    <section>
        <div class="section-title">
            <div>
                <h1>Episodes :</h1>
                <div class="large-line"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

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
    .section-title {
        display: flex;
        
        h1 {
            font-size: 1.5rem;
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