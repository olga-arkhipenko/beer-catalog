<template>
    <section>
        <p class="user-name">
            hello
        </p>
        <div class="user-avatar">
            <img
                src=""
                alt="User avatar.">
        </div>
        <button class="sigh-out-button">Sign out</button>
    </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: {

    },
    mounted() {
        this.getCurrentUserData();
    },
    methods: mapActions('userData', ['getCurrentUserData'])
};
</script>

