<template>
<div>
  <h1>{{$t(categories[this.id - 1].i18n_name)}}</h1>
        <RecipeCard v-for="recipe in this.recipes"
                    :key="recipe.id"
                    :title="recipe.title"
                    :difficulty="recipe.difficulty"
                    :rating="average(recipe.ratings)"
                    :category="recipe.category"
                    :picture="(recipe.pictures.length > 0) ? recipe.pictures[0]:'/missing.jpg'"
                    :id="recipe.id"
                    :userId="recipe.userId">
        >
        </RecipeCard>
</div>
</template>

<style scoped>
h3 {
  padding-bottom: 20px;
}
.pad {
  height: 28px;
}
.new-comment {
  margin-top: 20px;
}
.mb {
  margin: 10px;
}
</style>
<script>
import categories from '@/data/categories.js';
import RecipeCard from '../components/RecipeCard.vue'

export default {
  name: 'Category',
  components: {
    RecipeCard
  },
  data() {
    return {
      id: this.$route.params.id,
      categories: categories,
      loggedUserId: parseInt(localStorage.getItem("loggedUserId")),
      recipes: []
    }
  },
  created() {
    this.recipes = JSON.parse(localStorage.getItem('recipes')).filter(e => e.category == this.id);
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
  }
}
</script>
