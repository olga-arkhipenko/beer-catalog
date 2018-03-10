<template>
    <div id="app">
        <HeaderNavigation/>
        <router-view></router-view>
    </div>
</template>

<script>
import 'normalize.css';
import HeaderNavigation from './components/HeaderNavigation';
export default {
    name: 'App',
    components: {
        HeaderNavigation
    },
};
</script>

<style>
    .link {
        text-decoration: none;
        color: inherit;
    }
</style>