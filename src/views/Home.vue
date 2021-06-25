<template>
    <div class="home">
        <b-container fluid>
            <b-row id="HomepageTitle" class="mt-3">
                <b-col>
                    <h1> {{ $t('homepage.title') }} </h1>
                    <h6> <i> {{ $t('homepage.subtitle') }} </i> </h6>
                </b-col>
            </b-row>
            <hr />
            <b-row id="BestRecipes">
                <b-col>
                    <h3> {{ $t('homepage.bestRatedRecipes') }} </h3>
                    <div> Dragane ljubavi ubaci ovde tri najrated recepta leba ti </div>
                </b-col>
            </b-row>
            <hr />
            <b-row id="BlogPosts">
                <b-col>
                    <BlogPosts />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import BlogPosts from '@/components/BlogPosts.vue';

    export default {
        name: 'Home',
        components: {
            BlogPosts
        }
    }
</script>
