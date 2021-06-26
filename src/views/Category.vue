<template>
<div>
  <h1>{{$t(categories[this.id - 1].i18n_name)}}</h1>
  <div style="text-align: left;">
    {{$t('categories.sort')}}:
    <b-form-select value="0" @change="resort">
      <option value="0">{{$t("categories.order.id")}} {{$t("categories.order.asc")}}</option>
      <option value="1">{{$t("categories.order.id")}} {{$t("categories.order.desc")}}</option>
      <option value="2">{{$t("categories.order.rating")}} {{$t("categories.order.asc")}}</option>
      <option value="3">{{$t("categories.order.rating")}} {{$t("categories.order.desc")}}</option>
      <option value="4">{{$t("categories.order.difficulty")}} {{$t("categories.order.asc")}}</option>
      <option value="5">{{$t("categories.order.difficulty")}} {{$t("categories.order.desc")}}</option>
    </b-form-select>
  </div>
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
      recipes: [],
      sort: 0,
      sortfs: [
        (a, b) => a.id - b.id,
        (a, b) => b.id - a.id,
        (a, b) => this.average(a.ratings) - this.average(b.ratings),
        (a, b) => this.average(b.ratings) - this.average(a.ratings),
        (a, b) => a.difficulty - b.difficulty,
        (a, b) => b.difficulty - a.difficulty,
      ]
    }
  },
  created() {
    this.$title = this.$t(categories[this.id - 1].i18n_name);
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
    },
    resort(val) {
      this.recipes = this.recipes.sort(this.sortfs[val]);
      console.log(val);
    }
  }
}
</script>
