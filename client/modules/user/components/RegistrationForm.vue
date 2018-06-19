<template>
    <section>
        <form
            action="post"
            enctype="multipart/form-data"
            class="form"
            @submit.prevent="submitForm">
            <p class="form__heading registartion-heading">Registration</p>
            <label>
                <p class="form__field">Name</p>
                <input
                    v-model.trim="registrationData.name"
                    class="form__input"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    size="30"
                    maxlength="255">
            </label>
            <label>
                <p class="form__field">Email</p>
                <input
                    v-model.trim="registrationData.email"
                    class="form__input"
                    type="email"
                    required
                    placeholder="Enter your contact email"
                    size="30"
                    maxlength="255">
            </label>
            <label>
                <p class="form__field">Birthdate</p>
                <input
                    v-model="registrationData.birthdate"
                    type="date">
            </label>
            <label>
                <p class="form__field">Password</p>
                <input
                    v-model="registrationData.password"
                    class="form__input"
                    type="password"
                    required
                    placeholder="Enter your password"
                    size="30"
                    minlength="8"
                    maxlength="255">
            </label>
            <label>
                <p class="form__field">Password again
                    <span
                        v-if="!isPasswordMatch"
                        class="password-notification">Password doesn't match</span>
                </p>
                <input
                    v-model="checkedData.passwordConfirmed"
                    class="form__input"
                    type="password"
                    required
                    placeholder="Confirm your password"
                    size="30"
                    minlength="8"
                    maxlength="255">
            </label>
            <p class="form__field">Upload profile picture</p>
            <input
                type="file"
                required
                accept="image/*"
                class="upload-button"
                @change="uploadProfilePicture">
            <div class="form__button-wrapper">
                <input
                    type="submit"
                    class="action-button register-button"
                    value="Sign up">
            </div>
        </form>
    </section>
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
                password: '',
                profilePicture: null
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
        ...mapActions('userData', ['submitRegistartion']),

        uploadProfilePicture(e) {
            const files = e.target.files || e.dataTransfer.files;
            this.registrationData.profilePicture = files[0] || null;
        },
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
}

.register-button {
    text-transform: uppercase;

    color: #38a39e;

    font-size: 1.8rem;
    font-weight: 600;
}

</style>
