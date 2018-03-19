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
        display: inline-block;
    }
    
    .logo__name {
        font-family: 'Courier New', Courier, monospace;
        font-size: 1.8rem;
    }
</style>


