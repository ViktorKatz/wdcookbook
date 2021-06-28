<template>
    <div id="navdiv">
        <b-navbar id="navbar" toggleable="lg" sticky variant="warning">
            <b-navbar-brand to="/"> &nbsp; <b-icon-book-half /> CookBook</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav pills fill>
                    <b-nav-item to="/" exact exact-active-class="active">{{ $t('header.home') }}</b-nav-item>
                    <b-nav-item-dropdown to="recipe" exact exact-active-class="active" v-bind:text="$t('header.recipes')">
                        <b-dropdown-item v-for="category in categories" v-bind:key="category.i18n_name" v-bind:to="'/category/' + category.id">{{ $t(category.i18n_name) }}</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item to="/addRecipe" exact exact-active-class="active">{{ $t('header.addRecipe') }}</b-nav-item>
                    <b-nav-item to="/myAccount" exact exact-active-class="active">{{ $t('header.myAccount') }}</b-nav-item>
                    <b-nav-item to="/about" exact exact-active-class="active">{{ $t('header.aboutUs') }}</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form action="/category/0">
                        <b-form-input id="searchbar" name ="search" size="sm" class="mr-sm-2" v-bind:placeholder="$t('header.search')"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit"> <b-icon-search /> </b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown right v-bind:text="$t('header.lang')">
                        <b-dropdown-item v-on:click="changeLocale('sr')">SR</b-dropdown-item>
                        <b-dropdown-item v-on:click="changeLocale('en')">EN</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    import i18n from '@/plugins/i18n.js';
    import categories from '@/data/categories.js'

    export default {
        name: 'Header',
        data: function() {
            return {
                categories: categories
            }
        },
        created() {
            //alert(categories[0].name);
        },
        methods: {
            changeLocale(locale) {
                i18n.locale = locale;
            }
        }
    }


</script>

<style scoped>
    .navbar-brand, #navbar {
        font-family: "Comic Sans MS", "Comic Sans", cursive;
    }

    .ml-auto {
        margin-left: auto;
    }

    #searchbar {
        display: inline-block;
        width: auto;
    }

    #lang-dropdown {
        right: 0px;
    }
</style>
