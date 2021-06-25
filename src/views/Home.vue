<template>
    <div class="home">
        <b-container fluid>
            <b-row id="HomepageTitle">
                <b-col>
                    <h1> {{ $t('homepage.title') }} </h1>
                </b-col>
            </b-row>
            <b-row id="BestRecipes">
                <b-col>
                    <div> @Dragan: Insert 3 best rated recipes </div>
                </b-col>
            </b-row>
            <b-row id="BlogPosts">
                <b-col>
                    <div> BlogPosts.. </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

    export default {
        name: 'Home',
        components: {

        }
    }
</script>
