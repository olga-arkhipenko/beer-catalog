<template>
    <transition name="slide">
        <nav class="main-menu">
            <primary-logo class="main-menu__title"/>
            <button class="close-sign action-button main-menu__close-button" @click="hideMainMenu">&#215;</button>
            <ul class="main-menu__list">
                <li class="main-menu__item" v-for="route in routes" :key="route.name">
                    <router-link :to="route.path" class="link">
                        <span class="main-menu__item-name">{{route.name}}</span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </transition>
</template>

<script>
import Logo from './Logo';
import routes from 'Router/routes';

export default {
    data() {
        return {
            routes
        }
    },
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
        position: fixed;
        top: 0;
        left: 0;
        width: 250px;
        height: 100%;
        background: #31374c;
        border-right: 1px solid #ffffff; 
    }

    .main-menu__title {
        margin: 30px; 
    }

    .main-menu__close-button {
        position: absolute;
        top: 5px;
        right: 10px;
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

    .main-menu__item {
        padding: 10px 0;
        font-family: 'Courier New', Courier, monospace;
        font-size: 1.3rem;
        color: #31a39f;
    }
</style>
