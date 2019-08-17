<template>
  <div class="container">
    <div class="row mt-4 d-flex justify-content-center">
      <div class="col-4">
        <div class="d-flex justify-content-center">
          <div
            :class="{border: responseFetched, 'border-info':responseFetched, 'p-3':responseFetched}"
          >
            <div v-if="showGetResponse">
              <label class="mt-3 text-center">Name : {{ name }}</label>
              <label class="mt-3 text-center">Id : {{ id }}</label>
              <label class="mt-3 text-center">Salary : {{ salary }}</label>
              <label class="mt-3 text-center">Age : {{ age }}</label>
            </div>
            <div v-if="showPostResponse" class="text-center">
              <label>
                <span class="text-success">Post request was successful. Item created with Id</span>
                {{ postId }}
              </label>
            </div>
            <div v-if="error" class="text-center">
              <label class="text-danger">There was an error!</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  computed: {
    name() {
      return this.$store.getters.name;
    },
    age() {
      return this.$store.getters.age;
    },
    salary() {
      return this.$store.getters.salary;
    },
    id() {
      return this.$store.getters.id;
    },
    showGetResponse() {
      return this.$store.getters.getResponseSet;
    },
    responseFetched() {
      return (
        this.$store.getters.getResponseSet ||
        this.$store.getters.postResponseSet ||
        this.$store.getters.error
      );
    },
    postId() {
      return this.$store.getters.postId;
    },
    showPostResponse() {
      return this.$store.getters.postResponseSet;
    },
    error() {
      return this.$store.getters.error ? true : false;
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
  display: block;
}
#forResponseLabel {
  display: block;
  color: red;
}
</style>