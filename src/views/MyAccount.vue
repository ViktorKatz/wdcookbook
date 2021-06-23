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
                                              v-model="logUser"
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
                                              v-model="logPass"
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
                                              v-model="regUser"
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
                                              v-model="regPass"
                                              required>
                                </b-form-input>
                            </b-form-group>
                            <br />
                            <p class="text-danger"> {{ regError }} </p>
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
        data: function () {
            return {
                logUser: "",
                logPass: "",
                logError: "",
                regUser: "",
                regPass: "",
                regError: "",
            };
        },
        methods: {
            loginSubmit(event) {
                event.preventDefault();
                alert(this.logUser);
            },
            registerSubmit(event) {
                event.preventDefault();

                let allUsers = JSON.parse(localStorage.getItem('allUsers'));

                if (allUsers == null) {
                    allUsers = [];
                }

                let newId = 0;
                for (let i = 0; i < allUsers.length; ++i) {
                    let user = allUsers[i];
                    console.log(user.username);
                    if (user.username.localeCompare(this.regUser) == 0) {
                        this.regError = this.$t('account.error.userExists');
                        return;
                    }
                    newId = Math.max(newId, user.id + 1);
                }

                let newUser = {
                    username: this.regUser,
                    password: this.regPass,
                    id: newId,
                }

                allUsers.push(newUser);

                localStorage.setItem('allUsers', JSON.stringify(allUsers));
            }
        }
    }
</script>