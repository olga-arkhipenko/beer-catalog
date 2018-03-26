<template>
    <header class="header-navigation">
        <button class="header-navigation__menu-button" @click="showMainMenu"></button>
        <main-menu @hideMainMenu="hideMainMenu" v-if="isMainMenuShown"/>
        <primary-logo class="header-navigation__logo"/>
    </header>
</template>

<script>
import MainMenu from './Menu';
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
        display: flex;
        align-items: center;
        z-index: 1;
        color: #ffffff;
        background-color: #31364c;
        border-bottom: 1px solid #ffffff;
    }

    .header-navigation__menu-button {
        margin: 20px;
        padding: 20px;
        background: url(../../assets/menu-burger.png);
        background-size: contain;
        border: none;
        cursor: pointer;
    }
</style>


