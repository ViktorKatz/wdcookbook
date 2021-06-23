<template>
    <div class="myAccount">
        <b-container fluid>
            <b-row id="pagedesc">
                <h1>{{ $t('account.pagedesc') }}</h1>
            </b-row>
            <b-row>
                <b-col id="login-col" cols="12" lg="6">
                    <b-card v-bind:header="$t('account.login')"
                            header-bg-variant="warning"
                            header-border-variant="warning"
                            header-text-variant="dark"
                            border-variant="warning"
                            class="mb-2">
                        <b-form @submit="loginSubmit">
                            <b-form-group id="loginUsernameGroup"
                                          v-bind:label="$t('account.username')"
                                          label-for="loginUsername">
                                <!-- v-model="nesto" in form input -->
                                <b-form-input id="loginUsername"
                                              type="text"
                                              v-bind:placeholder="$t('account.username')"
                                              required>
                                </b-form-input>
                            </b-form-group>
                            <br />
                            <b-form-group id="loginPasswordGroup"
                                          v-bind:label="$t('account.password')"
                                          label-for="loginPassword">
                                <!-- v-model="nesto" in form input -->
                                <b-form-input id="loginPassword"
                                              type="text"
                                              v-bind:placeholder="$t('account.password')"
                                              required>
                                </b-form-input>
                            </b-form-group>
                            <br />
                            <b-button type="submit" variant="warning">{{ $t('account.login') }}!</b-button>
                        </b-form>
                    </b-card>
                </b-col>
                <b-col id="register-col" cols="12" lg="6">
                    <b-card v-bind:title="$t('account.register')"
                            class="mb-2">
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>

                        <b-button href="#" variant="primary">Go somewhere</b-button>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style scoped>
    #pagedesc {
        margin: 20px;
    }
</style>

<script>
    export default {
        methods: {
            loginSubmit(event) {
                event.preventDefault();
                alert("login submitted");
            }
        }
    }
</script>