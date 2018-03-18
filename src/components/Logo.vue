<template>
    <div class="logo">
        <router-link to="/" href="/" class="link">
            <span class="logo__name">
                {{logoName}}
            </span>
        </router-link>
    </div>
</template>

<script>
export default {
  data() {
    return {
        logoName: 'Beer Catalog'
    }
  }
}
</script>

<style>
    .logo {
        /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
        font-family: 'Courier New', Courier, monospace;
        font-size: 1.5rem;
    }
</style>


