<template>
    <div class="myAccount">
        <b-container fluid v-if="loggedUserId">
            <b-card bg-variant="warning"
                    border-variant="warning">
                <b-row>
                    <b-col cols="12" lg="6">
                        <h1>{{ $t('account.greeting') }}, {{ loggedUserUsername }}!</h1>
                    </b-col>
                    <b-col cols="12" lg="6">
                        <h3>{{ $t('account.logoutQuestion') }}</h3>
                        <b-button @click="logout" variant="danger">{{ $t('account.logout') }}</b-button>
                    </b-col>
                </b-row>
            </b-card>
            <hr />
            <b-row>
                <b-col>
                    <b-button v-b-toggle="'recipes'" variant="warning">{{$t('account.yourRecipes')}}</b-button>
                    <b-collapse id="recipes">
                        <AllRecipesForId v-bind:userId="loggedUserId" />
                    </b-collapse>
                </b-col>
            </b-row>
            <hr />
            <b-row>
                <b-col>
                    <b-button v-b-toggle="'comments'" variant="warning">{{$t('account.yourComments')}}</b-button>
                    <b-collapse id="comments">
                        <AllCommentsForId v-bind:userId="loggedUserId" />
                    </b-collapse>
                </b-col>
            </b-row>
            <hr />
            <b-row>
                <b-col>
                    <b-button v-b-toggle="'ratings'" variant="warning">{{$t('account.yourRatings')}}</b-button>
                    <b-collapse id="ratings">
                        <AllRatingsForId v-bind:userId="loggedUserId" />
                    </b-collapse>
                </b-col>
            </b-row>
            <hr />
        </b-container>
        <b-container fluid v-else>
            <b-card class="mb-4"
                    bg-variant="warning"
                    border-variant="warning">
                <h1>{{ $t('account.pagedesc') }}</h1>
            </b-card>
            <b-row>
                <b-col id="login-col" cols="12" lg="6">
                    <b-card v-bind:header="$t('account.login')"
                            header-bg-variant="warning"
                            header-border-variant="warning"
                            header-text-variant="dark"
                            border-variant="warning"
                            body-class="light-warning"
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
                                <b-form-input id="loginPassword"
                                              type="password"
                                              v-bind:placeholder="$t('account.password')"
                                              v-model="logPass"
                                              required>
                                </b-form-input>
                            </b-form-group>
                            <br />
                            <p class="text-danger"> {{ logError }} </p>
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
                            body-class="light-warning"
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
                            <b-form-group id="registerPassword2Group"
                                          v-bind:label="$t('account.passwordAgain')"
                                          label-for="registerPassword2">
                                <b-form-input id="registerPassword2"
                                              type="password"
                                              v-bind:placeholder="$t('account.passwordAgain')"
                                              v-model="regPass2"
                                              required>
                                </b-form-input>
                            </b-form-group>
                            <br />
                            <p class="text-danger"> {{ regError }} </p>
                            <p class="text-success"> {{ regSuccess }} </p>
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
    import AllCommentsForId from '@/components/AllCommentsForId';
    import AllRecipesForId from '@/components/AllRecipesForId';
    import AllRatingsForId from '@/components/AllRatingsForId';

    export default {
        components: {
            AllRecipesForId,
            AllCommentsForId,
            AllRatingsForId
        },
        data: function () {
            return {
                logUser: "",
                logPass: "",
                logError: "",
                regUser: "",
                regPass: "",
                regPass2: "",
                regError: "",
                regSuccess: "",
                loggedUserId: null,
                loggedUserUsername: null,
                bc_items: [
                    {
                        text: this.$t('breadcrumbs.home'),
                        to: {
                            name: 'Home'
                        }
                    },
                    {
                        text: this.$t('breadcrumbs.myAccount'),
                    },
                ]
            };
        },
        created() {
            this.loggedUserId = parseInt(localStorage.getItem('loggedUserId'));
            this.loggedUserUsername = localStorage.getItem('loggedUserUsername');
            this.$title = this.loggedUserUsername;
            this.$emit('update-breadcrumbs', this.bc_items);
        },
        methods: {
            loginSubmit(event) {
                event.preventDefault();
                let allUsers = JSON.parse(localStorage.getItem('allUsers'));

                if (allUsers == null) {
                    this.logError = this.$t('account.error.userNotFound');
                    return;
                }

                for (let i = 0; i < allUsers.length; ++i) {
                    let user = allUsers[i];
                    if (user.username.localeCompare(this.logUser) == 0) {
                        // Found the user

                        if (user.password.localeCompare(this.logPass) == 0) {
                            localStorage.setItem('loggedUserId', user.id);
                            localStorage.setItem('loggedUserUsername', user.username);

                            this.loggedUserId = user.id;
                            this.loggedUserUsername = user.username;

                            this.logError = "";
                            return;
                        }
                        else {
                            this.logError = this.$t('account.error.wrongPassword');
                            return;
                        }
                    }
                }

                this.logError = this.$t('account.error.userNotFound');
                return;
            },
            registerSubmit(event) {
                event.preventDefault();

                this.regSuccess = ""; // In case of multiple account registration

                if (this.regPass != this.regPass2) {
                    this.regError = this.$t('account.error.passwordsDontMatch');
                    return;
                }

                let allUsers = JSON.parse(localStorage.getItem('allUsers'));

                if (allUsers == null) {
                    allUsers = [];
                }

                let newId = 1;
                for (let i = 0; i < allUsers.length; ++i) {
                    let user = allUsers[i];
                    if (user.username.localeCompare(this.regUser) == 0) {
                        this.regError = this.$t('account.error.userExists');
                        return;
                    }
                    newId = Math.max(newId, user.id + 1);
                }

                this.regError = "";

                let newUser = {
                    username: this.regUser,
                    password: this.regPass,
                    id: newId,
                }

                allUsers.push(newUser);

                localStorage.setItem('allUsers', JSON.stringify(allUsers));

                this.regSuccess = this.$t('account.regSuccess') + ' ' + this.regUser;
                this.regUser = "";
                this.regPass = "";
                this.regPass2 = "";
            },
            logout() {
                this.loggedUserId = null;
                this.loggedUserUsername = null;
                localStorage.removeItem('loggedUserId');
                localStorage.removeItem('loggedUserUsername');
            }
        }
    }
</script>