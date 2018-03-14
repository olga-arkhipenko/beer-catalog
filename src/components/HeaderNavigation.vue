<template>
    <header class="header-navigation">
        <button class="header-navigation__menu-button" @click="showMainMenu"> &#9776; </button>
        <main-menu :hideMainMenu="hideMainMenu" v-if="isMainMenuShown"/>
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
        display: flex;
        align-items: center;
        padding: 10px;
        color: #ffffff;
        background-color: #36495d;
    }

    .header-navigation__menu-button {
        padding: 5px;
        background: transparent;
        color: #ffffff;
        font-size: 1.5rem;
        border: none;
        cursor: pointer;
    }

    .header-navigation__logo {
        margin-left: 20px;
    }
</style>


