<template>
    <b-card class="mt-3"
            body-class="light-warning"
            border-variant="warning">
        <router-link :to="'/recipe/'+this.id">
            <b-card-header header-bg-variant="warning"
                       header-border-variant="warning"
                       border-variant="warning">
                <div class="title">
                    <h3>{{title}}</h3>
                    <router-link :to="'/category/'+category">
                        {{$t(categories[parseInt(category) - 1].i18n_name)}}
                    </router-link>
                </div>
            </b-card-header>
        </router-link>
        <b-card-body>
            <b-row>
                <b-col cols="12" lg="4">
                    <b-card-img-lazy :src="picture" class="thumb" />
                </b-col>
                <b-col cols="12" lg="4">
                    <h3 class="pad">{{$t('recipe.rating')}}</h3>
                    <b-rating class="pad" variant="warning" readonly :value="rating" />
                </b-col>
                <b-col cols="12" lg="4">
                    <h3 class="pad">{{$t('recipe.difficulty')}}</h3>
                    <b-progress class="progress pad">
                        <b-progress-bar :variant="getVariant()" role="progressbar" :value="difficulty" min="0" max="5">
                        </b-progress-bar>
                    </b-progress>
                    <div style="text-align: right;">
                        <b-button class="trash-b" v-if="id != null && userId == loggedUserId" v-b-modal="'confirm-'+id"><b-img-lazy class="trash" src="/trash.png"></b-img-lazy></b-button>
                        <b-modal :id="'confirm-'+id"
                                 @ok="remove()"
                                 :ok-title="$t('addRecipe.ok')"
                                 :cancel-title="$t('addRecipe.cancel')"
                                 :title="$t('addRecipe.confirm')"
                                 header-close-variant="dark"
                                 header-text-variant="dark"
                                 header-bg-variant="warning"
                                 header-border-variant="danger"
                                 content-class="light-warning"
                                 ok-variant="danger">
                            {{$t("addRecipe.confirmQ")}} "{{title}}" ?
                        </b-modal>
                    </div>
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>
</template>

<style scoped>
a {
    text-decoration: none;
    color: #2c3e50;
}
.thumb {
    width:100%;
}
.pad {
    margin-bottom: 40px;
}
.progress {
    height: 30px;
}
.title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.trash {
    width:100%;
}
.trash-b {
    width: 15%;
    padding: 5px;
}
</style>
<script>
import categories from '@/data/categories.js'

    export default {
        name: 'RecipeCard',
        props: {
            title: String,
            rating: Number,
            picture: String,
            difficulty: Number,
            category: String,
            id: Number,
            userId: Number
        },
        methods: {
            remove() {
                let allRecipes = JSON.parse(localStorage.getItem("recipes"));
                allRecipes = allRecipes.filter(e => e.id != this.id);
                localStorage.setItem("recipes", JSON.stringify(allRecipes));
                this.$destroy();
                this.$el.parentNode.removeChild(this.$el);
            },
            getVariant() {
                if (this.difficulty < 3)
                    return "success";
                if (this.difficulty < 5)
                    return "warning";
                return "danger";
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