<template>
    <div id="app">
        <Header />
        <b-container fluid>
            <b-row>
                <b-col cols="12" md="10" lg="8">
                    <div id="router-view">
                        <router-view />
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/Header.vue';

    export default {
        name: 'App',
        components: {
            Header
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
        border:5px solid black;
        min-height: calc(100vh - 211px); /* 100% visine viewporta - visina footera */
    }
</style>
