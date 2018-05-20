<template>
    <form
        action="post"
        class="form"
        @submit.prevent="submitLogin">
        <label>
            <p>Email</p>
            <input
                v-model.trim="email"
                type="email"
                required
                placeholder="Enter your email"
                size="28">
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
        <div class="form__button-wrapper">
            <input
                type="submit"
                class="action-button login-button"
                value="Log in">
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        submitLogin() {
            console.log('submit login');
        }
    }
};
</script>


<style>
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
