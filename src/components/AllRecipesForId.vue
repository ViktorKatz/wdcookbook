<template>
    <div id="AllRecipesForId">
        <RecipeCard v-for="recipe in this.allRecipes"
                    :key="recipe.id"
                    :title="recipe.title"
                    :difficulty="recipe.difficulty"
                    :rating="average(recipe.ratings)"
                    :category="recipe.category"
                    :picture="(recipe.pictures.length > 0) ? recipe.pictures[0]:'/missing.jpg'"
                    :id="recipe.id"
                    :userId="userId">
        >
        </RecipeCard>
    </div>
</template>

<style scoped>
</style>

<script>
import RecipeCard from './RecipeCard.vue'
    export default {
        components: { RecipeCard },
        name: 'AllRecipesForId',
        props: {
            userId: Number  
        },
        data() {
            return {
                allRecipes: []
            }
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
        created() {
            this.allRecipes = JSON.parse(localStorage.getItem("recipes")).filter(e => e.userId == this.userId)
        }
    }

</script>