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
                                        <option v-for="cat in categories.filter(e => e.id != 0)" v-bind:key="cat.id" :value="cat.id">{{$t(cat.i18n_name)}}</option>
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
                            <b-form-radio-group class="diff" required>
                            <b-form-radio class="radio"
                                            v-for="val in 5"
                                            :key="val"
                                            name="difficulty"
                                            :value="val"
                                            v-model="difficulty">
                                &nbsp; {{val}}
                            </b-form-radio>
                            </b-form-radio-group>
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
    .diff {
        display: flex;
        flex-direction: row;
        justify-content: center   
    }
    .radio {
        margin-left: 10px;
        margin-right: 10px;
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
                categories: categories,
                bc_items: [
                    {
                        text: this.$t('breadcrumbs.home'),
                        to: {
                            name: 'Home'
                        }
                    },
                    {
                        text: this.$t('breadcrumbs.addRecipe'),
                    },
                ]
            };
        },
        created() {
            this.$title = this.$t('title.addRecipe');
            this.loggedUserId = localStorage.getItem('loggedUserId');
            this.loggedUserUsername = localStorage.getItem('loggedUserUsername');
            this.$emit('update-breadcrumbs', this.bc_items);
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
                                video: "",
                                ratings: [],
                                pictures: [],
                                comments: []
                            }
                allRecipes.push(recipe);

                localStorage.setItem("recipes", JSON.stringify(allRecipes));
                this.$router.push('/recipe/' + recipe.id);
                return;
            }
        },
    }
</script>