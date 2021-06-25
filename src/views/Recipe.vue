<template>
    <div>
      <b-container fluid>
        <h1>{{recipe.title}}</h1>
        {{$t('recipe.by')}} {{username}}
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
              :src="recipe.videos[0]">
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
      username: null
    }
  },
  created() {
    this.recipe = JSON.parse(localStorage.getItem('recipes')).find(e => e.id == this.id);
    this.username = JSON.parse(localStorage.getItem('allUsers'))[this.recipe.userId - 1].username;
  }
}
</script>
