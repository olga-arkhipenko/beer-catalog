<template>
    <div>
        <navigation/>
        <router-view/>
    </div>
</template>

<script>
import 'normalize.css';
import Navigation from 'common/components/header/Navigation';

export default {
    components: {
        Navigation
    }
};
</script>
