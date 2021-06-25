<template>
    <div>
      <b-container fluid>
        <h1>{{recipe.title}}</h1>
        {{$t('recipe.by')}} {{username}}
        <hr />
        <b-row>
          <b-col cols="6" lg="6">
              <h3 class="pad">{{$t('recipe.rating')}}</h3>
              <div @mouseenter="enterRate()" @mouseleave="leaveRate()">
              <b-rating class="pad" :variant="rateHover?'warning':'info'" :value="getRating()" v-model="rating" @change="rate"/>
              </div>
          </b-col>
          <b-col cols="6" lg="6">
              <h3 class="pad">{{$t('recipe.difficulty')}}</h3>
              <b-progress class="progress pad">
                  <b-progress-bar variant="danger" role="progressbar" :value="recipe.difficulty" min="0" max="5">
                  </b-progress-bar>
              </b-progress>
          </b-col>
        </b-row>
        <hr />
        <b-row>
            <h3> {{$t('recipe.instructions')}} </h3>
          <b-col cols="12" lg="6">
            {{recipe.desc}}
          </b-col>
          <b-col cols="12" lg="6">
            <iframe width="100%" height="315"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              :src="recipe.video">
            </iframe>
          </b-col>
        </b-row>
        <hr />
      </b-container>
    </div>
</template>

<style scoped>
h3 {
  padding-bottom: 20px;
}
</style>
<script>
import categories from '@/data/categories.js'

export default {
  name: 'Recipe',
  components: {
  },
  data() {
    return {
      id: this.$route.params.id,
      categories: categories,
      loggedUserId: parseInt(localStorage.getItem("loggedUserId")),
      recipe: null,
      username: null,
      rating: null,
      recipes: [],
      rateHover : false
    }
  },
  created() {
    this.recipes = JSON.parse(localStorage.getItem('recipes'))
    this.recipe = this.recipes.find(e => e.id == this.id);
    this.username = JSON.parse(localStorage.getItem('allUsers'))[this.recipe.userId - 1].username;
    this.rating = this.getRating();
  },
  methods: {
    enterRate() {
      this.rateHover = true;
      this.rating = this.recipe.ratings.find(e => e.userId == this.loggedUserId).rating;
    },
    leaveRate() {
      this.rateHover = false;
      this.rating = this.getRating();
    },
    getRating() {
      let array = this.recipe.ratings;
      if(array == null || array.length == 0)
          return 0;
      var total = 0;
      for(var i = 0; i < array.length; i++) {
          total += array[i].rating;
      }
      return total / array.length;
    },
    rate(val) {
      let ret = this.recipe.ratings.find(e => e.userId == this.loggedUserId)
      if (ret == null)
        this.recipe.ratings.push({ userId: this.loggedUserId, rating: val });
      else ret.rating = val;
      localStorage.setItem('recipes', JSON.stringify(this.recipes));
    }
  }
}
</script>
