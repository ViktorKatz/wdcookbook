<template>
    <router-link :to="'/recipe/' + id">
        <b-card class="mt-3"
                body-class="light-warning"
                border-variant="warning">
            <b-card-header header-bg-variant="warning"
                           header-border-variant="warning"
                           border-variant="warning">
                <div class="title">
                    <div>
                        <h3>{{title || user}}</h3>
                    </div>
                </div>
            </b-card-header>
            <b-card-body>
                <b-row>
                    <b-rating class="pad" variant="warning" readonly :value="rating" />
                </b-row>
            </b-card-body>
        </b-card>
    </router-link>
</template>

<style scoped>
    a {
        text-decoration: none;
        color: #2c3e50;
    }
</style>
<script>
    import categories from '@/data/categories.js'

    export default {
        name: 'CommentCard',
        props: {
            title: String,
            rating: Number,
            user: String,
            id: Number
        },
        methods: {
            remove() {
                let allRecipes = JSON.parse(localStorage.getItem("recipes"));
                allRecipes = allRecipes.filter(e => e.id != this.id);
                localStorage.setItem("recipes", JSON.stringify(allRecipes));
                this.$destroy();
                this.$el.parentNode.removeChild(this.$el);
            }
        },
        data() {
            return {
                categories: categories,
                loggedUserId: parseInt(localStorage.getItem("loggedUserId"))
            }
        }
    }

</script>