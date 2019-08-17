<template>
  <div class="container">
    <div class="row mt-4 d-flex justify-content-center">
      <div class="col-4">
        <div class="d-flex justify-content-center">
          <ul class="nav nav-pills">
            <li @click="setActive('post')" class="nav-item">
              <router-link tag="a" class="nav-link" :class="{active: postActive}" to="/">POST</router-link>
            </li>
            <li @click="setActive('get')" class="nav-item">
              <router-link tag="a" class="nav-link" :class="{active: getActive}" to="/get">GET</router-link>
            </li>
          </ul>
        </div>
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "../Post/Post";
import Get from "../Get/Get";
import Response from "../Response/Response";

export default {
  components: {
    Post,
    Get,
    Response
  },
  data() {
    return {
      postActive: true,
      getActive: false
    };
  },
  methods: {
    setActive(component) {
      console.log("RAN");
      if (component === "post") {
        console.log("Post");
        this.postActive = true;
        this.getActive = false;
      } else if (component === "get") {
        console.log("Get");
        this.postActive = false;
        this.getActive = true;
      }
    }
  }
};
</script>