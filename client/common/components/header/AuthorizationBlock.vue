<template>
    <div class="authorization">
        <router-link
            to="/login"
            class="link authorization__login-button">
            Log in
        </router-link>
        <router-link
            to="/registration"
            class="link authorization__signup-button">
            Sign up
        </router-link>
    </div>
</template>

<style>
.authorization {
    margin: 0 30px 0 0;
}

.authorization__signup-button {
    color: #ffb259;
    text-shadow: #000000 1px 1px 0, #000000 -1px -1px 0, #000000 -1px 1px 0, #000000 1px -1px 0;

    font-family: "Courier New", Courier, monospace;
    font-size: 1.6rem;
}

.authorization__login-button {
    color: #40ca3a;

    font-family: "Courier New", Courier, monospace;
    font-size: 1.6rem;
}
</style>

