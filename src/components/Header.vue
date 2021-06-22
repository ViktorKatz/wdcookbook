<template>
    <div id="navdiv">
        <b-navbar id="navbar" toggleable="lg" sticky=true variant="warning">
            <b-navbar-brand> <b-icon-book-half /> CookBook</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav pills fill>
                    <b-nav-item href="#" active>{{ $t('header.home') }}</b-nav-item>
                    <b-nav-item href="#">{{ $t('header.recipes') }}</b-nav-item>
                    <b-nav-item href="#">{{ $t('header.addRecipe') }}</b-nav-item>
                    <b-nav-item href="#">{{ $t('header.myAccount') }}</b-nav-item>
                    <b-nav-item href="#">{{ $t('header.aboutUs') }}</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input id="searchbar" size="sm" class="mr-sm-2" v-bind:placeholder="$t('header.search')"></b-form-input>
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
    import i18n from '@/plugins/i18n';

    export default {
        name: 'Header',
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
