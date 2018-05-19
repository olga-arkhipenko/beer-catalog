<template>
    <form
        action="post"
        class="form"
        @submit.prevent="submitRegistration">
        <p class="form__heading registartion-heading">Registration</p>
        <label>
            <p>Name</p>
            <input
                v-model.trim="name"
                type="text"
                required
                placeholder="Enter your full name"
                size="28">
        </label>
        <label>
            <p>Email</p>
            <input
                v-model.trim="email"
                type="email"
                required
                placeholder="Enter your contact email"
                size="28">
        </label>
        <label>
            <p>Birthdate</p>
            <input
                v-model="birthdate"
                type="date">
        </label>
        <label>
            <p>Password</p>
            <input
                v-model="password"
                type="password"
                required
                placeholder="Enter your password"
                size="28">
        </label>
        <label>
            <p>Password again
                <span
                    v-if="!isPasswordMatch"
                    class="password-notification">Password doesn't match</span>
            </p>
            <input
                v-model="passwordConfirm"
                type="password"
                required
                placeholder="Confirm your password"
                size="28">
        </label>
        <div class="form__button-wrapper">
            <button
                type="submit"
                class="action-button register-button">Sign up</button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            birthdate: null,
            email: '',
            password: '',
            passwordConfirm: ''
        };
    },
    computed: {
        isPasswordMatch() {
            return this.password === this.passwordConfirm || this.passwordConfirm === '';
        }
    },
    methods: {
        submitRegistration() {
            if (this.isPasswordMatch) {
                console.log(`registartion submitted ${this.birthdate}`);
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
