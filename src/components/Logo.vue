<template>
    <div class="logo">
        <span class="logo__name">
            {{logoName}}
        </span>
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


