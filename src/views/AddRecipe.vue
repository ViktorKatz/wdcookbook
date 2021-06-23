<template>
    <div class="addRecipe">
        <b-container fluid v-if="!loggedUserId">
            <br />
            <b-row style="padding-bot: 30px;">
                <b-col cols="12">
                    <h1>{{ $t('addRecipe.login') }}</h1>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12">
                    <router-link :to="'myAccount'">
                        <b-button variant="danger">{{ $t('account.login') }}</b-button>
                    </router-link>
                </b-col>
            </b-row>
            <hr />
        </b-container>
        <b-container fluid v-else>
            <b-row id="pagedesc">
                <h1>{{ $t('addRecipe.pagedesc') }}</h1>
            </b-row>
            <b-form @submit="recipeSubmit">
                <b-row>
                    <b-col cols="12" lg="6">
                        <b-form-group id="recipeNameGroup"
                                        v-bind:label="$t('addRecipe.name')"
                                        label-for="recipeName">
                            <b-form-input id="recipeName"
                                            type="text"
                                            v-model="name"
                                            required>
                            </b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col cols="12" lg="6">
                        <b-form-group id="recipeTypeGroup"
                                        v-bind:label="$t('addRecipe.type')"
                                        label-for="recipeType">
                            <b-form-select id="recipeType"
                                        required
                                        v-model="type"
                                        style="padding:8px">
                                        <option v-for="cat in categories" v-bind:key="cat.id" :value="cat.id">{{$t(cat.i18n_name)}}</option>
                            </b-form-select>
                        </b-form-group>
                        <br />
                        <p class="text-danger"> {{ error }} </p>
                    </b-col>
                    <b-col cols="12" lg="6">
                        <b-form-group v-bind:label="$t('addRecipe.duration')"
                                        label-for="duration">
                            <b-form-input id="duration"
                                        v-model="duration"
                                        type="number"
                                        required
                                        min="0"
                                        max="600">
                            </b-form-input>
                        </b-form-group>
                        <br />
                        <p class="text-danger"> {{ error }} </p>
                    </b-col>
                    <b-col cols="12" lg="6">
                        <b-form-group id="recipeDifficultyGroup"
                                        v-bind:label="$t('addRecipe.difficulty')"
                                        label-for="recipeDifficulty">
                            <b-form-input type="number"
                                            value="1"
                                            min="1"
                                            max="5"
                                            v-model="difficulty"
                                            required>
                            </b-form-input>
                        </b-form-group>
                        <br />
                        <p class="text-danger"> {{ error }} </p>
                    </b-col>
                    <b-col cols="12" lg="12">
                        <b-form-group v-bind:label="$t('addRecipe.instructions')"
                                        label-for="instructions">
                            <b-textarea id="instructions"
                                        v-model="instructions"
                                        required>
                            </b-textarea>
                        </b-form-group>
                        <br />
                        <p class="text-danger"> {{ error }} </p>
                    </b-col>
                </b-row>
                <b-button type="submit" variant="warning">{{ $t('addRecipe.add') }}</b-button>
            </b-form>
            <br />
        </b-container>
    </div>
</template>

<style scoped>
    #pagedesc {
        margin: 20px;
    }
    #recipeType {
        width: 100%;
    }
</style>

<script>
import defaultRecipes from '@/data/defaultRecipes.js';
import categories from '@/data/categories.js'

    export default {
        components: {
        },
        data: function () {
            return {
                name: "",
                type: "",
                error: "",
                instructions: "",
                duration: "",
                difficulty: "",
                loggedUserId: null,
                loggedUserUsername: null,
                categories: categories
            };
        },
        created() {
            this.loggedUserId = localStorage.getItem('loggedUserId');
            this.loggedUserUsername = localStorage.getItem('loggedUserUsername');
        },
        methods: {
            recipeSubmit(event) {
                event.preventDefault();

                let allRecipes = defaultRecipes;
                if (localStorage.getItem("recipes") != null)
                    allRecipes = JSON.parse(localStorage.getItem("recipes"));

                let lastId = Math.max(...allRecipes.map(e => e.id));
                if (lastId == null) lastId = -1;
                console.log(lastId);
                let recipe = {  id: lastId + 1,
                                userId: parseInt(this.loggedUserId),
                                title: this.name,
                                category: parseInt(this.type),
                                desc: this.instructions,
                                preptime: parseInt(this.duration),
                                difficulty: parseInt(this.difficulty),
                                videos: [],
                                ratings: [],
                                pictures: [],
                                comments: []
                            }
                allRecipes.push(recipe);

                localStorage.setItem("recipes", JSON.stringify(allRecipes));
                this.$router.push('myAccount');
                return;
            }
        },
    }
</script>