<script lang="ts" setup>
import { onMounted, ref } from "vue";
import api from "../../api";

const menus = ref([]);

onMounted(() => {
  fetchMenus();
});

const fetchMenus = () => {
  api
    .get("/menus")
    .then((res) => {
      console.log(res.data.menus);
      menus.value = res.data.menus;
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteMenu= (id)=>{
  api.delete(`/menus/${id}`)
  .then(res=>{
    console.log(res);
    if (res.data.menus){
      fetchMenus()
    }
  })
  .catch(err =>{
    console.log(err);
  })
  
}
</script>

<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-header">
          <h3><RouterLink to="menus/create">Add New Menu </RouterLink></h3>
        </div>

        <div class="card-body">
          <div>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="menu in menus" :key="menu.id">
                  <th>{{ menu.id }}</th>
                  <th>{{ menu.name }}</th>
                  <th class="status">
                    <span
                      class="badge bg-danger-subtle text-danger text-uppercase"
                    >
                      {{ menu.inactive === 0 ? "active" : "inactive" }}</span
                    >
                  </th>

                  <th>
                    <RouterLink
                      :to="`/menus/edit/${menu.id}`"
                      class="btn btn-primary"
                      >Edit</RouterLink
                    >

                    <a class="btn btn-danger" @click="deleteMenu(menu.id)"
                      >Delete</a
                    >
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
