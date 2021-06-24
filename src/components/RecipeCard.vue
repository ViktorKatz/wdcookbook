<template>
    <div>
        <b-card>
            <b-card-header header-bg-variant="warning"
                header-border-variant="warning"
                border-variant="warning">
                <div class="title">
                    <div>
                        <h3>{{title}}</h3>
                    </div>
                    <div>
                        {{$t(categories[parseInt(category) - 1].i18n_name)}}
                    </div>
                </div>
            </b-card-header>
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
                            <b-progress-bar variant="danger" role="progressbar" :value="difficulty" min="0" max="5">
                            </b-progress-bar>
                        </b-progress>
                    </b-col>
                </b-row>
            </b-card-body>
        </b-card>
    </div>
</template>

<style scoped>
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
</style>
<script>
import categories from '@/data/categories.js'

    export default {
        name: 'AllRecipesForId',
        props: {
            title: String,
            rating: Number,
            picture: String,
            difficulty: Number,
            category: String
        },
        methods: {
        },
        data() {
            return {
                categories: categories
            }
        }
    }

</script>