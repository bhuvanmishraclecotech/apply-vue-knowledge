<template>
  <div>
    <div id="header" class="text-center bg-primary">
      <div>Welcome to the application!</div>
      <br />
      <br />
        <router-link tag="a" class="homePageLink" to="/">HomePage.</router-link>
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
  color: white;
  text-decoration: underline;
}
</style>