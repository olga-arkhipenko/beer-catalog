<template>
    <div>
        <header-navigation/>
        <router-view></router-view>
    </div>
</template>

<script>
import 'normalize.css';
import HeaderNavigation from './components/header/HeaderNavigation';
export default {
    components: {
        'header-navigation': HeaderNavigation
    },
};
</script>
