<template>
    <nav class="navigation">
        <button class="navigation__menu-button" @click="showMenu"></button>
        <main-menu @hideMenu="hideMenu" v-if="isMenuShown" v-click-outside="hideMenu"/>
        <logo class="navigation__logo"/>
    </nav>
</template>

<script>
import MainMenu from './MainMenu';
import Logo from './Logo';
import clickOutside from "../directives/clickOutside";
export default {
    data() {
        return {
            isMenuShown: false
        }
    },
    components: {
        Logo,
        MainMenu
    },
    directives: {
        clickOutside
    },
    methods: {
        showMenu() {
            this.isMenuShown = true;
        },
        hideMenu() {
            this.isMenuShown = false;
        }
    }
}
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
}

.navigation__menu-button {
    margin: 20px;
    padding: 20px;

    cursor: pointer;

    border: none;
    background: url(../assets/menu-burger.png);
    background-size: contain;
}

</style>


