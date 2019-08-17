<template>
  <div>
    <div id="header" class="text-center bg-primary">
      <router-link class="homePageLink" to="/">HomePage.</router-link>
      <div>Welcome to the application!</div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
#header {
  min-height: 100px;
  color: white;
}
.homePageLink {
  color:yellow;
  position: absolute;
  left: 0;
}
</style>