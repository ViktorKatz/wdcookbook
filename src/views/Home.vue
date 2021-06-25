<template>
    <div class="home">
        <b-container fluid>
            <b-row id="HomepageTitle" class="mt-3">
                <b-col>
                    <h1> {{ $t('homepage.title') }} </h1>
                    <h6 class="text-muted"> <i> {{ $t('homepage.subtitle') }} </i> </h6>
                </b-col>
            </b-row>
            <hr />
            <b-row id="BestRecipes">
                <h3> {{ $t('homepage.bestRatedRecipes') }} </h3>
                <b-col cols="12" lg = "12">
                <RecipeCard v-for="recipe in this.recipes"
                            :key="recipe.id"
                            :title="recipe.title"
                            :difficulty="recipe.difficulty"
                            :rating="average(recipe.ratings)"
                            :category="recipe.category"
                            :picture="(recipe.pictures.length > 0) ? recipe.pictures[0]:'/missing.jpg'"
                            :id="recipe.id"
                            :userId="recipe.userId" />
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
    import RecipeCard from '../components/RecipeCard.vue';

    export default {
        name: 'Home',
        components: {
            BlogPosts,
            RecipeCard
        },
        methods: {
            average(array) {
                if(array == null || array.length == 0)
                    return 0;
                var total = 0;
                for(var i = 0; i < array.length; i++) {
                    total += array[i].rating;
                }
                return total / array.length;
            }
        },
        data() {
            return {
                recipes: []
            }
        },
        created() {
            this.recipes = JSON.parse(localStorage.getItem('recipes'));
            this.recipes = this.recipes.sort((a, b) => this.average(b.ratings) - this.average(a.ratings)).slice(0, 3);
            console.log(this.recipes);
        }
    }
</script>
