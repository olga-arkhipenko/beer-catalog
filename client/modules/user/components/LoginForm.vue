<template>
    <form
        action="post"
        class="form form--login"
        @submit.prevent="submitForm">
        <label>
            <p class="form__field">Email</p>
            <input
                v-model.trim="loginData.email"
                class="form__input"
                type="email"
                required
                placeholder="Enter your email"
                size="28">
        </label>
        <label>
            <p class="form__field">Password</p>
            <input
                v-model="loginData.password"
                class="form__input"
                type="password"
                required
                placeholder="Enter your password"
                size="28">
        </label>
        <div class="form__button-wrapper">
            <input
                type="submit"
                class="action-button login-button"
                value="Log in">
        </div>
    </form>
    <!-- <vue-form>

    </vue-form> -->
</template>

<script>
// import VueForm from 'vue-form';
import { mapActions } from 'vuex';
import notificationHelper from 'common/helpers/notification/notificationHelper';
import configs from 'common/helpers/notification/configs';
import actionTypes from 'userModule/store/actions/constants';

export default {
    data() {
        return {
            loginData: {
                email: '',
                password: ''
            }
        };
    },
    methods: {
        ...mapActions({
            submitLogin: actionTypes.SUBMIT_LOGIN
        }),

        submitForm() {
            const promise = this.submitLogin(this.loginData).then(() => this.$router.push({ path: '/' }));
            notificationHelper.showNotification(promise, configs.login);
        }
    }
};
</script>


<style>
.login-form {
    padding: 20px 0 0;
}

.login-heading {
    text-align: center;

    color: #3fbd3e;

    font-weight: 600;
}

.login-button {
    text-align: center;
    text-transform: uppercase;

    color: #3fbd3e;

    font-size: 1.8rem;
    font-weight: 600;
}

</style>
