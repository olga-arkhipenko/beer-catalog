<template>
    <form
        action="post"
        class="form"
        @submit.prevent="submitForm">
        <p class="form__heading registartion-heading">Registration</p>
        <label>
            <p>Name</p>
            <input
                v-model.trim="registrationData.name"
                type="text"
                required
                placeholder="Enter your full name"
                size="30"
                maxlength="255">
        </label>
        <label>
            <p>Email</p>
            <input
                v-model.trim="registrationData.email"
                type="email"
                required
                placeholder="Enter your contact email"
                size="30"
                maxlength="255">
        </label>
        <label>
            <p>Birthdate</p>
            <input
                v-model="registrationData.birthdate"
                type="date">
        </label>
        <label>
            <p>Password</p>
            <input
                v-model="registrationData.password"
                type="password"
                required
                placeholder="Enter your password"
                size="30"
                minlength="8"
                maxlength="255">
        </label>
        <label>
            <p>Password again
                <span
                    v-if="!isPasswordMatch"
                    class="password-notification">Password doesn't match</span>
            </p>
            <input
                v-model="checkedData.passwordConfirmed"
                type="password"
                required
                placeholder="Confirm your password"
                size="30"
                minlength="8"
                maxlength="255">
        </label>
        <div class="form__button-wrapper">
            <input
                type="submit"
                class="action-button register-button"
                value="Sign up">
        </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            registrationData: {
                name: '',
                birthdate: null,
                email: '',
                password: ''
            },
            checkedData: {
                passwordConfirmed: ''
            }
        };
    },
    computed: {
        isPasswordMatch() {
            return this.registrationData.password === this.checkedData.passwordConfirmed || this.checkedData.passwordConfirmed === '';
        }
    },
    methods: {
        ...mapActions('user', ['submitRegistartion']),
        submitForm() {
            if (this.isPasswordMatch) {
                this.submitRegistartion(this.registrationData);
            }
        }
    }
};
</script>


<style>
.password-notification {
    display: inline-block;

    color: #fb3224;

    font-size: 1.1rem;
}

.registartion-heading {
    text-align: center;

    color: #eda337;
    text-shadow: #bb261a 1px 1px 0, #bb261a -1px -1px 0, #bb261a -1px 1px 0, #bb261a 1px -1px 0;
}

.register-button {
    text-transform: uppercase;

    color: #38a39e;

    font-size: 1.8rem;
    font-weight: 600;
}

</style>
