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
