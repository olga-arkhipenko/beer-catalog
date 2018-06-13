<template>
    <section class="user-block">
        <p
            v-cloak
            class="user-block__name">
            {{ name }}
        </p>
        <img
            :src="profilePictureUrl"
            alt="User avatar."
            class="user-block__avatar">
        <button
            class="sigh-out-button"
            @click="submitSignOut">
            Sign out
        </button>
    </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: {
        name: {
            type: String,
            required: true
        },
        profilePictureUrl: {
            type: String,
            required: true
        }
    },
    mounted() {
        this.getCurrentUserData();
    },
    methods: mapActions('userData', ['getCurrentUserData', 'submitSignOut'])
};
</script>

<style>
.user-block {
    display: flex;
    align-items: center;
}

.user-block__avatar {
    max-height: 80px;
}
</style>

