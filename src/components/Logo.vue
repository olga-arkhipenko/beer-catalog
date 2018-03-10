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
        font-family: 'Helvetica', sans-serif;
        font-size: 1.5rem;
    }
</style>


