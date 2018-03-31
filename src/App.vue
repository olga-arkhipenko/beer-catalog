<template>
    <div>
        <navigation/>
        <router-view></router-view>
    </div>
</template>

<script>
import 'normalize.css';
import Navigation from 'common/components/Navigation';

export default {
    components: {
        Navigation
    }
};
</script>
