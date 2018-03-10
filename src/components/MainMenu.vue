<template>
    <transition name="slide">
        <nav class="main-menu">
            <primary-logo class="main-menu__title"></primary-logo>
            <button class="main-menu__close-button" @click='hideMainMenu'>&#215;</button>
            <ul class="main-menu__list">
                <li class="main-menu__item">
                    <a href="#" class="link">
                        <span class="main-menu__item-icon">&#x2616;</span>
                        <span class="main-menu__item-name">Home</span>
                    </a>
                </li>
                <li class="main-menu__item">
                    <a href="#" class="link">
                        <span class="main-menu__item-icon">&#x2606;</span>
                        <span class="main-menu__item-name">Favorites</span>
                    </a>
                </li>
            </ul>
        </nav>
    </transition>
</template>

<script>
import Logo from './Logo';

export default {
    components: {
        'primary-logo': Logo
    },
    methods: {
        hideMainMenu() {
            this.$emit('hideMainMenu');
        }
    }
}
</script>

<style>
    .main-menu {
        position: absolute;
        top: 0;
        left: 0;
        width: 250px;
        height: 100%;
        background: #ffffff;
        border-right: 1px solid #ffffff; 
    }

    .main-menu__title {
        padding: 40px 20px;
        background-color: #36495d; 
    }

    .main-menu__close-button {
        position: absolute;
        top: 5px;
        right: 10px;
        padding: 5px;
        background: transparent;
        color: #ffffff;
        font-size: 2rem;
        border: none;
        cursor: pointer;
    }

    .main-menu__list {
        color: #36495d;
        list-style: none;
    }

    .slide-enter-active {
        transition: all .5s ease;
    }

    .slide-leave-active {
        transition: all .5s ease;
    }

    .slide-enter, .slide-leave-to {
        transform: translateX(-250px);
    }

    .link {
        text-decoration: none;
        color: inherit;
    }

    .main-menu__item {
        padding: 10px 0;
        font-family: 'Helvetica', sans-serif;
        font-size: 1.3rem;
    }

    .main-menu__item-icon {
        font-size: 1rem;
    }
</style>
