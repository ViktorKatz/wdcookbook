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
                                <b-form-input id="loginUsername"
                                              type="text"
                                              v-bind:placeholder="$t('account.username')"
                                              v-model="loginUsername"
                                              required>
                                </b-form-input>
                            </b-form-group>
                            <br />
                            <b-form-group id="loginPasswordGroup"
                                          v-bind:label="$t('account.password')"
                                          label-for="loginPassword">
                                <!-- v-model="nesto" in form input -->
                                <b-form-input id="loginPassword"
                                              type="password"
                                              v-bind:placeholder="$t('account.password')"
                                              v-model="loginPassword"
                                              required>
                                </b-form-input>
                            </b-form-group>
                            <br />
                            <b-button type="submit" variant="warning">{{ $t('account.login') }}!</b-button>
                        </b-form>
                    </b-card>
                </b-col>
                <b-col id="register-col" cols="12" lg="6">
                    <b-card v-bind:header="$t('account.register')"
                            header-bg-variant="warning"
                            header-border-variant="warning"
                            header-text-variant="dark"
                            border-variant="warning"
                            class="mb-2">
                        <b-form @submit="registerSubmit">
                            <b-form-group id="registerUsernameGroup"
                                          v-bind:label="$t('account.username')"
                                          label-for="registerUsername">
                                <b-form-input id="registerUsername"
                                              type="text"
                                              v-bind:placeholder="$t('account.username')"
                                              v-model="registerUsername"
                                              required>
                                </b-form-input>
                            </b-form-group>
                            <br />
                            <b-form-group id="registerPasswordGroup"
                                          v-bind:label="$t('account.password')"
                                          label-for="registerPassword">
                                <b-form-input id="registerPassword"
                                              type="password"
                                              v-bind:placeholder="$t('account.password')"
                                              v-model="registerUsername"
                                              required>
                                </b-form-input>
                            </b-form-group>
                            <br />
                            <b-button type="submit" variant="warning">{{ $t('account.register') }}!</b-button>
                        </b-form>
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
            },
            registerSubmit(event) {
                event.preventDefault();
                alert("register submitted");
            }
        }
    }
</script>