<template>
    <div>
        <navigation/>
        <router-view></router-view>
    </div>
</template>

<script>
import 'normalize.css';
import Navigation from 'Components/header/Navigation';
export default {
    components: {
        'navigation': Navigation
    },
};
</script>
