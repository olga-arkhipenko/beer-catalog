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
    z-index: 1;
    top: 0;

    display: flex;

    width: 100%;

    color: #ffffff;
    border-bottom: 1px solid #ffffff;
    background-color: #31364c;

    align-items: center;
}

.header-navigation__menu-button {
    margin: 20px;
    padding: 20px;

    cursor: pointer;

    border: none;
    background: url(../../assets/menu-burger.png);
    background-size: contain;
}

</style>


