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
                <input
                  v-model="formdata.menus_id"
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

<script  setup>





</script>

<style>

</style>