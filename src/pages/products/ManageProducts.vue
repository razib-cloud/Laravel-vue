<template>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h3>
              <RouterLink to="products/create">Add New Products</RouterLink>
            </h3>
            <!-- Added search input -->
            <input type="text" v-model="search" placeholder="Search..." @input="FetchProducts"class="form-control w-25"/>
          </div>
  
          <div class="card-body">
            <div>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Menu Category</th>
                    <th>Price</th>
                    <th>Photo</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in products" :key="product.id">
                    <!-- Changed <th> to <td> inside tbody -->
                    <td>{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.menus_id }}</td>
                    <td>{{ product.price }}</td>
                    <td>
                      <img
                        width="100"
                        :src="`${imgUrl}/${product.photo}`"
                        alt="product image"
                      />
                    </td>
                    <td>{{ product.description }}</td>
                    <td>
                      <RouterLink
                        :to="`/products/edit/${product.id}`"
                        class="btn btn-primary me-2"
                      >
                        Edit
                      </RouterLink>
                      <a class="btn btn-danger" @click="deleteProduct(product.id)">
                        Remove
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
  import { RouterLink } from "vue-router";
  import api from "../../api";
  
  const products = ref([]);
  const search = ref("");
  const imgUrl = import.meta.env.VITE_IMG_BASE_URL; 
  
  
  const FetchProducts = (url = "/products") => {
    if (typeof url !== "string") {
      console.log(url);
      url = "/products";
    }
  
    api
      .get(url, { params: { search: search.value } })
      .then((result) => {
        console.log(result.data.data);
        products.value = result.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  
  const deleteProduct = (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      api
        .delete(`/products/${id}`)
        .then(() => {
          FetchProducts(); // Refresh after delete
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  
  onMounted(() => {
    FetchProducts();
  });



  </script>
  
  <style scoped>
  /* Optional styling tweaks */
  img {
    border-radius: 8px;
    object-fit: cover;
  }
  </style>
  