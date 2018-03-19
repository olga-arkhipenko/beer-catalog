<template>
    <header class="header-navigation">
        <button class="header-navigation__menu-button" @click="showMainMenu"></button>
        <main-menu @hideMainMenu="hideMainMenu" v-if="isMainMenuShown"/>
        <primary-logo class="header-navigation__logo"/>
    </header>
</template>

<script>
import MainMenu from './MainMenu';
import Logo from './Logo';
export default {
    data() {
        return {
            isMainMenuShown: false
        }
    },
    components: {
        'primary-logo': Logo,
        'main-menu': MainMenu
    },
    methods: {
        showMainMenu() {
            this.isMainMenuShown = true;
        },
        hideMainMenu() {
            this.isMainMenuShown = false;
        }
    }
}
</script>

<style>
    .header-navigation {
        position: fixed;
        top: 0;
        width: 100%;
        color: #ffffff;
        background-color: #31364c;
        text-align: center;
    }

    .header-navigation__menu-button {
        float: left;
        margin: 20px;
        padding: 20px;
        background: url(../assets/menu-burger.png);
        background-size: contain;
        border: none;
        cursor: pointer;
    }
    .header-navigation__logo {
        margin: 10px 0 0;
    }
</style>


