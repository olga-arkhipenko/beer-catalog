<template>
    <section>
        <form
            action="post"
            enctype="multipart/form-data"
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
            <p>Upload profile picture</p>
            <input
                type="file"
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
import { mapState, mapActions } from 'vuex';

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
        ...mapState('user', ['userData']),

        isPasswordMatch() {
            return this.registrationData.password === this.checkedData.passwordConfirmed || this.checkedData.passwordConfirmed === '';
        }
    },
    methods: {
        ...mapActions('user', ['submitRegistartion']),

        uploadProfilePicture(e) {
            const files = e.target.files || e.dataTransfer.files;
            // console.log(files[0]);
            this.registrationData.profilePicture = files[0] || null;
            // const formData = new FormData();
            // formData.append('profilePicture', files[0], files[0].name);
            // console.log(formData);
            // this.createProfilePicture(files[0]);
        },
        // addProfilePicture(image) {
        //     this.registrationData.profilePicture = image;
        // },
        // createProfilePicture(file) {
        //     const formData = new FormData();
        //     formData.append('profilePicture', file, file.name);
        //     this.registrationData.profilePicture = formData;
        //     console.log();
        // const reader = new FileReader();

        // reader.onloadend = function () {
        //     callback(reader.result);
        // };

        // reader.readAsDataURL(file);
        // },
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
