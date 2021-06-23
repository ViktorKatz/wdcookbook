<template>
    <div id="app">
        <Header />
        <b-container fluid>
            <b-row>
                <b-col cols="12" lg="9">
                    <div id="router-view">
                        <router-view />
                    </div>
                </b-col>
                <b-col cols="12" sm="10" offset-sm="1" md="8" offset-md="2" lg="3" offset-lg="0">
                    <AdSpace />
                </b-col>
            </b-row>
        </b-container>
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    import AdSpace from '@/components/AdSpace.vue'

    export default {
        name: 'App',
        components: {
            Header, Footer, AdSpace
        }
    }
</script>

<style>

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

        #nav a {
            font-weight: bold;
            color: #2c3e50;
        }

            #nav a.router-link-exact-active {
                color: #42b983;
            }

    #router-view {
        min-height: calc(100vh - 211px);  /* 100% visine viewporta - visina footera */
    }
</style>
