<template>
  <div class="row">
    <!-- Baisc Form Controls start -->
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h5>Update Menus</h5>
        </div>
        <!-- {{ formData }} -->
        <div class="card-body">
          <form @submit.prevent="submitData">
            <div class="app-form">
              <div class="mb-3">
                <label for="username" class="form-label">name</label>
                <input
                  v-model="formData.name"
                  type="text"
                  class="form-control"
                  placeholder="Enter Your Username"
                  id="username"
                />
              </div>

              <div class="mb-3">
                <label for="status" class="form-label">Status</label>
                <input
                  v-model="formData.is_active"
                  type="text"
                  class="form-control"
                  placeholder="Enter Status"
                  id="status"
                />
              </div>

              <div>
                <button type="submit" class="btn btn-primary">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script  setup>

import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import api from '../../Api';
const { id } = useRoute().params;

onMounted(() => {
  fetechMenus();
});

const fetechMenus = () => {
  api
    .get(`/menus/${id}`)
    .then((result) => {
      console.log(result.data);
      formData.id = result.data.menus.id;
      formData.name = result.data.menus.name;
      formData.is_active = result.data.menus.is_active;
    })
    .catch((err) => {
      console.log(err);
    });
};

const formData = reactive({
  id: "",
  name: "",
  is_active: ""
});

const submitData = () => {
  api
    .put("/menus/" + formData.id, formData)
    .then((result) => {
      console.log(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style></style>
