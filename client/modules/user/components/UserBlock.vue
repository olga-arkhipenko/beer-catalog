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
        <button
            class="user-block__settings-button action-button"
            @click="showDropdown">
            &#9776;
        </button>
        <transition name="popover">
            <div
                v-click-outside="hideDropdown"
                v-if="isDropdownShown"
                class="dropdown-menu">
                <button
                    class="sign-out-button"
                    @click="signOut">
                    Sign out
                </button>
            </div>
        </transition>
    </section>
</template>

<script>
import { mapActions } from 'vuex';
import clickOutside from 'common/directives/clickOutside';
import notificationHelper from 'common/helpers/notification/notificationHelper';
import configs from 'common/helpers/notification/configs';

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
        this.loadUser();
    },
    methods: {
        ...mapActions(['getCurrentUserData', 'submitSignOut']),

        loadUser() {
            const promise = this.getCurrentUserData();
            notificationHelper.showNotification(promise, configs.authorization);
        },
        signOut() {
            const promise = this.submitSignOut();
            notificationHelper.showNotification(promise, configs.signout);
        },
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

    font-family: "Courier New", Courier, monospace;
    font-size: 1.6rem;

    align-items: center;
}

.user-block__name {
    margin: 0 20px 0;
}

.user-block__avatar {
    max-height: 80px;
}

.user-block__settings-button {
    margin: 10px;
    padding: 10px;

    color: #369996;

    font-size: 2rem;
}

.dropdown-menu {
    position: absolute;
    top: 100px;
    right: 10px;

    padding: 20px;

    border: 1px solid #e9f1fb;
    background-color: #f3f9ff;
}

.sign-out-button {
    cursor: pointer;
    text-transform: uppercase;

    color: #38a39e;
    border: none;
    background-color: transparent;
}

.popover-enter-active {
    transition: all 0.15s ease;
}

.popover-enter,
.popover-leave {
    transform: translateX(100px);
}
</style>

