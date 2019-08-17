<template>
  <div>
    <div class="row mt-4">
      <div class="col-12">
        <div class="border border-info p-3">
          <label>Id :</label>
          <input v-model="id" class="form-control" type="number" />
          <div class="mt-2">
            <button @click="getDetails" class="btn btn-success">Get</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: ""
    }
  },
  methods: {
    getDetails() {
      this.$store.dispatch('sendGetRequest', this.id)
    }
  }
}
</script>

<style scoped>
input {
  width: 100%;
}
button {
  width: 100%;
}
label {
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
}
.forGetLabel {
  display: block;
  color: red;
}
</style>