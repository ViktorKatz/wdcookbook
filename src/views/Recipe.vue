<template>
    <div>
      <b-container fluid>
        <h1>{{recipe.title}}</h1>
        {{$t('recipe.by')}} {{username}}
        <hr />
        <b-row>
          <b-col cols="12" lg="4">
              <h3 class="title">{{$t('recipe.rating')}}</h3>
              <div @mouseenter="enterRate()" @mouseleave="leaveRate()">
                <b-rating class="pad" :variant="rateHover?'warning':'info'" :value="getRating()" v-model="rating" @change="rate"/>
              </div>
          </b-col>
          <b-col cols="6" lg="4">
              <h3 class="title">{{$t('recipe.difficulty')}}</h3>
              <b-progress class="progress pad">
                  <b-progress-bar variant="danger" role="progressbar" :value="recipe.difficulty" min="0" max="5">
                  </b-progress-bar>
              </b-progress>
          </b-col>
          <b-col cols="6" lg="4">
            <h3>{{$t('recipe.duration')}}</h3>
            <h3>{{recipe.preptime}} min</h3>
          </b-col>
        </b-row>
        <hr />
        <b-row>
            <h3> {{$t('recipe.instructions')}} </h3>
          <b-col cols="12" lg="6">
            {{recipe.desc}}
          </b-col>
          <b-col cols="12" lg="6">
            <iframe v-if="recipe.video != ''" width="100%" height="315"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              :src="recipe.video">
            </iframe>
            <div v-else>
              {{$t('recipe.noVideo')}}
            </div> 
          </b-col>
        </b-row>
        <hr />
        <h3>{{$t('recipe.pictures')}}</h3>
        <b-carousel :interval="4000"
                    controls
                    indicators
                    :label-next="$t('recipe.next')"
                    :label-prev="$t('recipe.prev')"
                    class="gallery">
          <b-carousel-slide v-for="pic in recipe.pictures" :key="pic" :img-src="pic">
          </b-carousel-slide>
        </b-carousel>
        <hr />
        <h3>{{$t('recipe.comments')}}</h3>
        <CommentCard v-for="comment in this.recipe.comments"
                      :key="comment.comment"
                      :user="users[comment.userId - 1].username"
                      :comment="comment.comment">
        </CommentCard>
        <b-textarea class="new-comment" v-model="newcomment">
        </b-textarea>
        <b-button class="mb" variant="warning" @click="addComment()">{{$t('recipe.addComment')}}</b-button>
      </b-container>
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
.gallery {
  height: 480px;
}
</style>
<script>
import categories from '@/data/categories.js'
import CommentCard from '../components/CommentCard.vue'

export default {
  name: 'Recipe',
  components: {
    CommentCard,
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
      rateHover : false,
      users: JSON.parse(localStorage.getItem('allUsers')),
      newcomment: ""
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
    },
    addComment() {
      this.recipe.comments.push({userId: this.loggedUserId, comment: this.newcomment});
      localStorage.setItem('recipes', JSON.stringify(this.recipes));
      this.newcomment = "";
    }
  }
}
</script>
