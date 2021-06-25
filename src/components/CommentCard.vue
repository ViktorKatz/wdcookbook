<template>
    <div>
        <b-card>
            <b-card-header header-bg-variant="warning"
                header-border-variant="warning"
                border-variant="warning">
                <div class="title">
                    <div>
                        <h3>{{title || user.username}}</h3>
                    </div>
                </div>
            </b-card-header>
            <b-card-body>
                <b-row>
                    {{comment}}
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
        name: 'CommentCard',
        props: {
            title: String,
            comment: String,
            user: String
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