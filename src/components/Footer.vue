<template>
    <div id="footer" class="bg-warning">
        <b-jumbotron header="CookBook" lead="Kulinarski kutak">
            <p id="copyright">Copyright 2021,  Viktor Katzenberger, Dragan Milovančević,  Odsek za softversko inženjerstvo Elektrotehničkog fakulteta univerziteta u Beogradu</p>
        </b-jumbotron>
    </div>
</template>

<script>
    import i18n from '@/plugins/i18n.js';

    export default {
        name: 'Footer',
        data: function () {
            return {

            }
        },
        methods: {
            changeLocale(locale) {
                i18n.locale = locale;
            }
        }
    }
</script>

<style scoped>
    #footer {
        position: relative;
        bottom: 0px;
    }

    .display-3, .lead {
        font-family: "Comic Sans MS", "Comic Sans", cursive;
    }

    #copyright {
        margin-bottom: 0px;
    }
</style>
