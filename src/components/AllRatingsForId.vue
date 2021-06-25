<template>
    <div id="AllRatingsForId">
        <RatingCard v-for="rating in this.myRatings"
                    :key="rating.title"
                    :title="rating.title"
                    :user="rating.user"
                    :rating="rating.rating"
                    :id="rating.id">
        </RatingCard>
    </div>
</template>

<style scoped>
</style>

<script>
import RatingCard from './RatingCard.vue'
    export default {
        components: { RatingCard },
        name: 'AllRatingsForId',
        props: {
            userId: Number  
        },
        data() {
            return {
                myRatings: [],
                user: null
            }
        },
        methods: {
        },
        created() {
            let allRecipes = JSON.parse(localStorage.getItem("recipes"));
            let allUsers = JSON.parse(localStorage.getItem("allUsers"));
            this.user = allUsers[this.userId - 1];
            allRecipes.forEach(e => {
                e.ratings.forEach(c => {
                    if (c.userId == this.userId)
                        this.myRatings.push({
                            rating: c.rating,
                            title: e.title,
                            user: allUsers[this.userId - 1].username,
                            id: e.id
                        });
                });
            });
        }
    }

</script>