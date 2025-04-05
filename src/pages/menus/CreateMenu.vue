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
                    <form   @submit.prevent="formSubmit">
                    <div class="app-form">
                        <div class="mb-3">
                            <label for="username" class="form-label">name</label>
                            <input v-model="formdata.name" type="text" class="form-control" placeholder="Enter Your Username" id="username">
                        </div>
                        <div class="mb-3">
                            <label for="status" class="form-label">Status</label>
                            <input v-model="formdata.status" type="text" class="form-control"  id="status">
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

<script lang="ts" setup>

</script>

<style scoped>

</style>