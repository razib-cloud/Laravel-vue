<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h5>Create Product</h5>
        </div>
        <div class="card-body">
          <form @submit.prevent="formSubmit">
            <div class="app-form">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input
                  v-model="formdata.name"
                  type="text"
                  class="form-control"
                  placeholder="Enter Product Name"
                  id="name"
                />
              </div>

              <div class="mb-3">
                <label for="menu_id" class="form-label">Menu Category</label>
                <input v-model="formdata.menus_id"
                  type="text"
                  class="form-control"
                  placeholder="Enter Menu Category ID"
                  id="menu_id"
                />
              </div>

              <div class="mb-3">
                <label for="price" class="form-label">Price</label>
                <input
                  v-model="formdata.price"
                  type="number"
                  class="form-control"
                  placeholder="Enter Price"
                  id="price"
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

              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <input
                  v-model="formdata.description"
                  type="text"
                  class="form-control"
                  placeholder="Enter Description"
                  id="description"
                />
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
import { onMounted, reactive, ref } from "vue";
import api from "../../Api";
import { useRouter } from "vue-router";

const menus= ref([]);
const fetchMenu=()=>{
    api.get("/menus")
    .then((result) => {
      console.log(result.data);
      menus.value= result.data.menus
    }).catch((err) => {
      
    });
}

onMounted(()=>{
   fetchMenu()
})

const router = useRouter();


const formdata = reactive({
  name: "",
  menus_id: "",
  price: "",
  photo: "", 
  description: "",
});

// Handle file upload
const handleFileUpload = (event) => {
  formdata.photo = event.target.files[0];
};

// Form submit function
const formSubmit = () => {
  const formData = new FormData();
  formData.append("name", formdata.name);
  formData.append("menu_id", formdata.menus_id); 
  formData.append("price", formdata.price);
  formData.append("photo", formdata.photo);
  formData.append("description", formdata.description);

 

  // Send the form data to the backend
  api
    .post("/products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((result) => {
      console.log("Product created successfully:", result);
      router.push({path:'/products'})
    })
    .catch((err) => {
      console.log("Error creating product:", err);
    });
};
</script>

<style>
/* Optional custom styles */
</style>
