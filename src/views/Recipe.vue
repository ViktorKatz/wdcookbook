<template>
    <div>
        <b-container fluid>
            <b-card class="mt-4"
                    bg-variant="warning"
                    border-variant="warning">
                <h1>{{recipe.title}}</h1>
                <span class="text-muted">{{$t('recipe.by')}} {{username}}</span>
            </b-card>
            <hr />
            <b-card border-variant="warning"
                    body-class="light-warning">
                <b-row>
                    <b-col cols="12" lg="4">
                        <h3 class="title">{{$t('recipe.rating')}}</h3>
                        <div v-if="loggedUserId > 0" @mouseenter="enterRate()" @mouseleave="leaveRate()">
                            <b-rating class="pad" :variant="rateHover?'warning':'info'" :value="getRating()" v-model="rating" @change="rate" />
                        </div>
                        <div v-else>
                            <b-rating class="pad" variant="info" :value="getRating()" v-model="rating" readonly />
                        </div>
                    </b-col>
                    <b-col cols="6" lg="4">
                        <h3 class="title">{{$t('recipe.difficulty')}}</h3>
                        <b-progress class="progress pad">
                            <b-progress-bar :variant="getVariant()" role="progressbar" :value="recipe.difficulty" min="0" max="5">
                            </b-progress-bar>
                        </b-progress>
                    </b-col>
                    <b-col cols="6" lg="4">
                        <h3>{{$t('recipe.duration')}}</h3>
                        <h3>{{recipe.preptime}} min</h3>
                    </b-col>
                </b-row>
            </b-card>
            <hr />
            <b-card :header="$t('recipe.instructions')"
                    header-class="h3"
                    header-bg-variant="warning"
                    border-variant="warning"
                    body-class="light-warning">
                <b-row>
                    <b-col class="recipe-text" cols="12" :lg="(recipe.video != '' || loggedUserId == recipe.userId) ? 6 : 10" :offset-lg="(recipe.video != '' || loggedUserId == recipe.userId)? 0 : 1">
                        {{recipe.desc}}
                    </b-col>
                    <b-col cols="12" lg="6" v-if="recipe.video != '' || recipe.userId == loggedUserId">
                        <iframe v-if="recipe.video != ''" width="100%" height="315"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                :src="recipe.video">
                        </iframe>
                        <div v-else>
                            <b-button variant="warning" v-b-modal="'addVideo'">{{$t('recipe.addVideo.button')}}</b-button>
                            <b-modal id="addVideo"
                                     @ok="addVideo()"
                                     :ok-title="$t('recipe.addVideo.ok')"
                                     :cancel-title="$t('recipe.addVideo.cancel')"
                                     :title="$t('recipe.addVideo.title')"
                                     header-close-variant="dark"
                                     header-text-variant="dark"
                                     header-bg-variant="warning"
                                     header-border-variant="danger"
                                     content-class="light-warning"
                                     ok-variant="danger">
                                <b-input placeholder="URL" v-model="vidUrl"></b-input>
                            </b-modal>
                        </div>
                    </b-col>
                </b-row>
                <b-button variant="danger" @click="convertToPdf()">PDF</b-button>
            </b-card>
            <hr />
            <b-card :header="$t('recipe.pictures')"
                    header-class="h3"
                    header-bg-variant="warning"
                    border-variant="warning"
                    body-class="light-warning">
                <b-carousel v-if="recipe.pictures.length > 0" :interval="4000"
                            controls
                            indicators
                            :label-next="$t('recipe.next')"
                            :label-prev="$t('recipe.prev')"
                            class="gallery">
                    <b-carousel-slide v-for="pic in recipe.pictures" :key="pic" :img-src="pic">
                    </b-carousel-slide>
                </b-carousel>
                <b-button v-if="loggedUserId > 0" style="margin-top: 10px" variant="warning" v-b-modal="'addPicture'">{{$t('recipe.addPicture.button')}}</b-button>
            </b-card>
            <hr />
            <b-modal id="addPicture"
                     @ok="addPicture()"
                     :ok-title="$t('recipe.addPicture.ok')"
                     :cancel-title="$t('recipe.addPicture.cancel')"
                     :title="$t('recipe.addPicture.title')"
                     header-close-variant="dark"
                     header-text-variant="dark"
                     header-bg-variant="warning"
                     header-border-variant="danger"
                     content-class="light-warning"
                     ok-variant="danger">
                <b-input placeholder="URL" v-model="picUrl"></b-input>
            </b-modal>
            <h3>{{$t('recipe.comments')}}</h3>
            <CommentCard v-for="comment in this.recipe.comments"
                         :key="comment.comment"
                         :user="users[comment.userId - 1].username"
                         :comment="comment.comment">
            </CommentCard>
            <div v-if="loggedUserId > 0">
                <b-textarea class="new-comment" v-model="newcomment">
                </b-textarea>
                <b-button class="mb" variant="warning" @click="addComment()">{{$t('recipe.addComment')}}</b-button>
            </div>
            <div v-else>
                <b-row style="padding-bot: 30px;">
                    <b-col cols="12">
                        <h1>{{ $t('recipe.login') }}</h1>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12">
                        <router-link :to="'/myAccount'">
                            <b-button style="margin: 10px" variant="danger">{{ $t('account.login') }}</b-button>
                        </router-link>
                    </b-col>
                </b-row>
            </div>
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

    .recipe-text {
        white-space: pre-line;
        text-align: justify;
    }
</style>
<script>
    import categories from '@/data/categories.js'
    import CommentCard from '../components/CommentCard.vue'
    import jsPDF from 'jspdf'

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
                rateHover: false,
                users: JSON.parse(localStorage.getItem('allUsers')),
                newcomment: "",
                picUrl: "",
                vidUrl: ""
            }
        },
        created() {
            this.recipes = JSON.parse(localStorage.getItem('recipes'))
            this.recipe = this.recipes.find(e => e.id == this.id);
            this.$title = this.recipe.title;
            this.username = JSON.parse(localStorage.getItem('allUsers'))[this.recipe.userId - 1].username;
            this.rating = this.getRating();

            let bc_items = [
                {
                    text: `${this.$t('breadcrumbs.home')}`,
                    to: {
                        name: 'Home'
                    }
                },
                {
                    text: this.$t(categories[0].i18n_name),
                    to: {
                        name: 'Category',
                        params: {
                            id: 0
                        }
                    },
                },
                {
                    text: this.$t(categories[this.recipe.category].i18n_name),
                    to: {
                        name: 'Category',
                        params: {
                            id: this.recipe.category
                        }
                    }
                },
                {
                    text: this.recipe.title,
                },
            ];

            this.$emit('update-breadcrumbs', bc_items);
        },
        methods: {
            addPicture() {
                if (this.picUrl == "")
                    return;
                this.recipe.pictures.push(this.picUrl);
                localStorage.setItem('recipes', JSON.stringify(this.recipes));
                this.picUrl = "";
            },
            addVideo() {
                if (this.vidUrl == "")
                    return;
                this.recipe.video = this.vidUrl;
                localStorage.setItem('recipes', JSON.stringify(this.recipes));
                this.vidUrl = "";
            },
            getVariant() {
                if (this.recipe.difficulty < 3)
                    return "success";
                if (this.recipe.difficulty < 5)
                    return "warning";
                return "danger";
            },
            enterRate() {
                this.rateHover = true;
                let rating = this.recipe.ratings.find(e => e.userId == this.loggedUserId) || { rating: 0 };
                this.rating = rating.rating;
            },
            leaveRate() {
                this.rateHover = false;
                this.rating = this.getRating();
            },
            getRating() {
                let array = this.recipe.ratings;
                if (array == null || array.length == 0)
                    return 0;
                var total = 0;
                for (var i = 0; i < array.length; i++) {
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
                this.recipe.comments.push({ userId: this.loggedUserId, comment: this.newcomment });
                localStorage.setItem('recipes', JSON.stringify(this.recipes));
                this.newcomment = "";
            },
            convertToPdf() {
                var doc = new jsPDF();

                doc.setFontSize(22);
                doc.text(20, 20, this.recipe.title);

                doc.setTextColor(120);
                doc.setFontSize(12);
                doc.text(180, 20, this.username);

                if (this.recipe.pictures.length > 0) {
                    alert("debuuug ima slika");
                    doc.addImage(this.recipe.pictures[0], "JPEG", 10, 170, 190, 130);
                }

                doc.setTextColor(0);
                doc.setFontSize(14);
                doc.text(20, 30, doc.splitTextToSize(this.recipe.desc, 180));

                doc.save("CookBook - " + this.recipe.title + '.pdf');
            }
        },
        beforeRouteUpdate(to, from, next) {
            this.id = to.params.id;
            this.recipe = this.recipes.find(e => e.id == this.id);
            this.rating = this.getRating();
            next();
        },
    }
</script>
