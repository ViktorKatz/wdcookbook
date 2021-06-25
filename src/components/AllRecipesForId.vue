<template>
    <div id="AllRecipesForId">
        <RecipeCard v-for="recipe in this.allRecipes"
                    :key="recipe.id"
                    :title="recipe.title"
                    :difficulty="recipe.difficulty"
                    :rating="average(recipe.ratings)"
                    :category="recipe.category"
                    :picture="(recipe.pictures.length > 0) ? recipe.pictures[0]:'https://media.istockphoto.com/vectors/missing-rubber-stamp-vector-vector-id1213374148?k=6&m=1213374148&s=612x612&w=0&h=c_gqRS7hhC7_5WxAq2mF2iWSahwMScHCe_hEzfn4fOs='"
                    :id="recipe.id"
                    :userId="userId"
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
            console.log(this.allRecipes);
        }
    }

</script>