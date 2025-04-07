<template>
  <div class="row">
    <!-- Baisc Form Controls start -->
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h5>Create Menu</h5>
        </div>
        <!-- {{ formdata }} -->
        <div class="card-body">
          <form @submit.prevent="formSubmit">
            <div class="app-form">
              <div class="mb-3">
                <label for="username" class="form-label">name</label>
                <input
                  v-model="formdata.name"
                  type="text"
                  class="form-control"
                  placeholder="Enter Menu Name"
                  id="username"
                />
              </div>
              <div class="mb-3">
                <label for="status" class="form-label">Status</label>
                <select
                  v-model="formdata.is_active"
                  class="form-control"
                  id="status"
                >
                  <option value="">Select Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const formdata = reactive({
  name: "",
  is_active: "active",
});

const formSubmit = () => {
  axios
    .post("http://127.0.0.1:8000/api/menus", formdata)
    .then((res) => {
      console.log(res);

      router.push({ path: "/menus" });
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style scoped></style>
