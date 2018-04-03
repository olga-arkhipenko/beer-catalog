<template>
    <transition name="slide">
        <div class="menu">
            <logo class="menu__title"/>
            <button
                class="close-sign action-button menu__close-button"
                @click="hideMenu">&#215;</button>
            <ul class="menu__list">
                <li
                    v-for="route in mainMenuRoutes"
                    :key="route.name"
                    class="menu__item"
                >
                    <router-link
                        v-cloak
                        :to="route.path"
                        class="link menu__item-name">
                        {{ route.name }}
                    </router-link>
                </li>
            </ul>
        </div>
    </transition>
</template>

<script>
import mainMenuRoutes from 'router/mainMenuRoutes';
import Logo from './Logo';

export default {
    components: {
        Logo
    },
    data() {
        return {
            mainMenuRoutes
        };
    },
    methods: {
        hideMenu() {
            this.$emit('onMenuHide');
        }
    }
};
</script>

<style>
.menu {
    position: fixed;
    top: 0;
    left: 0;

    width: 250px;
    height: 100%;

    border-right: 1px solid #ffffff;
    background: #31374c;
}

.menu__title {
    margin: 30px;
}

.menu__close-button {
    position: absolute;
    top: 5px;
    right: 10px;
}

.menu__list {
    list-style: none;

    color: #36495d;
}

.menu__item {
    padding: 10px 0;

    color: #31a39f;

    font-family: "Courier New", Courier, monospace;
    font-size: 1.3rem;
}

.slide-enter-active {
    transition: all 0.5s ease;
}

.slide-leave-active {
    transition: all 0.5s ease;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(-250px);
}
</style>
