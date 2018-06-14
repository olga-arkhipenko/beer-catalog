<template>
    <section class="user-block">
        <p
            v-cloak
            class="user-block__name">
            Hello, {{ name }}
        </p>
        <img
            :src="profilePictureUrl"
            alt="User avatar."
            class="user-block__avatar">
        <button @click="showDropdown">
            O
        </button>
        <transition name="popover">
            <div
                v-click-outside="hideDropdown"
                v-if="isDropdownShown"
                class="dropdown-menu">
                <button
                    class="sign-out-button"
                    @click="submitSignOut">
                    Sign out
                </button>
            </div>
        </transition>
    </section>
</template>

<script>
import { mapActions } from 'vuex';
import clickOutside from 'common/directives/clickOutside';

export default {
    directives: {
        clickOutside
    },
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
    data() {
        return {
            isDropdownShown: false
        };
    },
    mounted() {
        this.getCurrentUserData();
    },
    methods: {
        ...mapActions('userData', ['getCurrentUserData', 'submitSignOut']),

        showDropdown() {
            this.isDropdownShown = true;
        },
        hideDropdown() {
            this.isDropdownShown = false;
        }
    }
};
</script>

<style>
.user-block {
    display: flex;
    align-items: center;
    margin: 0 20px 0;
    font-family: "Courier New", Courier, monospace;
    font-size: 1.6rem;
}

.user-block__name {
    margin: 0 20px 0;
}

.user-block__avatar {
    max-height: 80px;
}

.sign-out-button {
    cursor: pointer;
    text-transform: uppercase;
    color: #38a39e;
    border: none;
    background-color: transparent;
}
</style>

