<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import Get from "./components/Get/Get";
import Response from "./components/Response/Response";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>

</style>