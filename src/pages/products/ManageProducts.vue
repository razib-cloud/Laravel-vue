<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h3>
            <RouterLink to="/products/create">Add New Products</RouterLink>
          </h3>
          <form class="app-form app-icon-form">
            <div class="position-relative">
              <input v-model="search" @input="FetchProducts" placeholder="Search..." class="form-control"
                aria-label="Search" />
            </div>
          </form>
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
                <tr v-for="product in products.data" :key="product.id">
                  <td>{{ product.id }}</td>
                  <td>{{ product.name }}</td>
                  <td>{{ product.menu }}</td>
                  <td>{{ product.price }}</td>
                  <td>
                    <img width="80" :src="`${imgUrl}/${product.photo}`" alt="product image" />
                  </td>
                  <td>{{ product.description }}</td>
                  <td>
  <div class="btn-group" role="group">
    <RouterLink :to="`/products/edit/${product.id}`" class="btn btn-primary">
      Edit
    </RouterLink>
    <button class="btn btn-danger" @click="deleteProduct(product.id)">
      Remove
    </button>
  </div>
</td>

                </tr>
              </tbody>
            </table>
          </div>

          <div class="list-pagination">
            <ul class="pagination">
              <li v-for="page in products.links" :key="page.label"
                  :class="page.active ? 'active cursor-pointer' : 'cursor-pointer'">
                <a class="page" @click="FetchProducts(page.url)">
                  {{ formatPageLabel(page.label) }}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import api from "../../Api";

const products = ref([]);
const search = ref("");
const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

const FetchProducts = (url = "/products") => {
  if (typeof url !== "string" || url === null) {
    url = "/products";
  }

  const client = url.startsWith("http") ? axios : api;

  client
    .get(url, {
      params: { search: search.value },
    })
    
    .then((result) => {
      console.log(result.data)
      products.value = result.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const formatPageLabel = (label) => {
  if (label === "&laquo; Previous") return "Previous";
  if (label === "Next &raquo;") return "Next";
  return label;
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
img {
  border-radius: 8px;
  object-fit: cover;
}

.list-pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination {
  display: flex;
  list-style: none;
  padding-left: 0;
}

.pagination li {
  margin: 0 5px;
}

.pagination li a {
  display: block;
  padding: 8px 14px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.pagination li a:hover {
  background-color: #e9ecef;
}

.pagination li.active a {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
  cursor: default;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
