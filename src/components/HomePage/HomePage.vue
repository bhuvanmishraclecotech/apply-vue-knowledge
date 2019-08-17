<template>
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
</template>

<script>
import Post from '../Post/Post'
import Get from '../Get/Get';
import Response from '../Response/Response';

export default {
  components: {
    Post,
    Get,
    Response
  }
};
</script>