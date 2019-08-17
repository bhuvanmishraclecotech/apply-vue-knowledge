<template>
  <div>
    <Header />
    <div class="container">
      <div class="row mt-4">
        <div class="col-4">
          <Post />
        </div>
        <div class="col-6">
          <Response />
        </div>
        <div class="col-2">
          <Get />
        </div>
      </div>
    </div>
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
    Header,
    Post,
    Get,
    Response
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>