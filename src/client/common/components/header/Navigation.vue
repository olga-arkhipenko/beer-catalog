<template>
    <nav class="navigation">
        <div class="navigation__title">
            <button
                class="navigation__menu-button"
                @click="showMenu"/>
            <main-menu
                v-click-outside="hideMenu"
                v-if="isMenuShown"
                @onMenuHide="hideMenu"
            />
            <logo class="navigation__logo"/>
        </div>
        <div class="authorization">
            <router-link
                to="/login"
                class="link authorization__login-button">
                Log in
            </router-link>
            <router-link
                to="/registration"
                class="link authorization__signup-button">
                Sign up
            </router-link>
        </div>
    </nav>
</template>

<script>
import clickOutside from 'common/directives/clickOutside';
import MainMenu from './MainMenu';
import Logo from './Logo';

export default {
    components: {
        Logo,
        MainMenu
    },
    directives: {
        clickOutside
    },
    data() {
        return {
            isMenuShown: false
        };
    },
    methods: {
        showMenu() {
            this.isMenuShown = true;
        },
        hideMenu() {
            this.isMenuShown = false;
        }
    }
};
</script>

<style>
.navigation {
    position: fixed;
    z-index: 1;
    top: 0;

    display: flex;

    width: 100%;

    color: #ffffff;
    border-bottom: 1px solid #ffffff;
    background-color: #31364c;

    align-items: center;
    justify-content: space-between;
}

.navigation__title {
    display: flex;

    align-items: center;
}

.navigation__menu-button {
    margin: 20px;
    padding: 20px;

    cursor: pointer;

    border: none;
    background: url(../../assets/menu-burger.png);
    background-size: contain;
}
</style>

