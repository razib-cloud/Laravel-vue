<template>
  <div class="row">
    <!-- Update Product Form -->
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h5>Update Product</h5>
        </div>

        <div class="card-body">
          <form @submit.prevent="submitData">
            <div class="app-form">
              <div class="mb-3">
                <label for="name" class="form-label">Product Name</label>
                <input
                  v-model="formData.name"
                  type="text"
                  class="form-control"
                  placeholder="Enter Product Name"
                  id="name"
                />
              </div>

              <div class="mb-3">
                <label for="menu_id" class="form-label">Menu Category ID</label>
                <input
                  v-model="formData.menus_id"
                  type="text"
                  class="form-control"
                  placeholder="Enter Menu Category ID"
                  id="menu_id"
                />
              </div>

              <div class="mb-3">
                <label for="price" class="form-label">Price</label>
                <input
                  v-model="formData.price"
                  type="number"
                  class="form-control"
                  placeholder="Enter Price"
                  id="price"
                />
              </div>

              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <input
                  v-model="formData.description"
                  type="text"
                  class="form-control"
                  placeholder="Enter Description"
                  id="description"
                />
              </div>

              <div class="mb-3">
                <label for="photo" class="form-label">Photo</label>
                <input
                  type="file"
                  class="form-control"
                  id="photo"
                  @change="handleFileUpload"
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

<script setup>
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import api from "../../Api";

const { id } = useRoute().params;

const formData = reactive({
  id: "",
  name: "",
  menus_id: "",
  price: "",
  description: "",
  photo: "",
});

onMounted(() => {
  fetchProduct();
});

const fetchProduct = () => {
  api
    .get(`/products/${id}`)
    .then((res) => {
      const product = res.data.products;
      formData.id = product.id;
      formData.name = product.name;
      formData.menus_id = product.menus_id;
      formData.price = product.price;
      formData.description = product.description;
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
};

const handleFileUpload = (e) => {
  formData.photo = e.target.files[0];
};

const submitData = () => {
  const updatedData = new FormData();
  updatedData.append("name", formData.name);
  updatedData.append("menus_id", formData.menus_id);
  updatedData.append("price", formData.price);
  updatedData.append("description", formData.description);

  if (formData.photo) {
    updatedData.append("photo", formData.photo);
  }

  api
    .post(`/products/${formData.id}?_method=PUT`, updatedData)
    .then((res) => {
      console.log("Updated successfully:", res.data);
    })
    .catch((err) => {
      console.error("Update error:", err);
    });
};
</script>

<style scoped></style>
