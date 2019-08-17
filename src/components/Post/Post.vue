<template>
  <div>
    <label class="text-center postLabel">POST</label>
    <div class="border border-info p-3">
      <label>Name</label>
      <input v-model="name" class="form-control" />
      <label class="mt-3">Id</label>
      <input v-model="id" class="form-control" />
      <label class="mt-3">Salary</label>
      <input v-model="salary" class="form-control" />
      <label class="mt-3">Age</label>
      <input v-model="age" class="form-control" />
      <div class="text-center">
        <button @click="sendPostRequest" class="btn btn-warning mt-3">Post</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      salary: "",
      id: ""
    };
  },
  methods: {
    sendPostRequest() {
      this.$store.dispatch('sendPostRequest', {
        name: this.name,
        age: this.age,
        id: this.id,
        salary: this.salary
      })
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
}
button {
  color: white;
}
.postLabel {
  display: block;
  color: red;
}
</style>