<template>
  <div class="card-body p-0">
                    <div id="myTable">
                        <div class="list-table-header d-flex justify-content-sm-between mb-3">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">Add</button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">

                                <form @submit.prevent="createUser" id="add_employee_form" enctype="multipart/form-data">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Add Role
                                                </h1>
                                                {{ userData }}
                                                <button type="button" class="btn-close m-0" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">

                                                <div class="employee mb-3">
                                                    <input type="hidden" id="id-field">
                                                    <label class="form-label">Position :</label>
                                                    <input v-model="userData.position" class="form-control" type="text"
                                                        id="employee-field" placeholder="user" required="">
                                                </div>

                                                <div class="email mb-3">
                                                    <label class="form-label">Name :</label>
                                                    <input v-model="userData.name" class="form-control" type="email"
                                                        id="email-field" placeholder="email" required="">
                                                </div>

                                                

                                                <div class="date mb-3">
                                                    <label class="form-label">Photo :</label>
                                                    <input @change="onFileChange" class="form-control" type="file"
                                                        id="date-field" required="" name="photo">
                                                </div>

                                               
                                            </div>
                                            <div class="modal-footer add">
                                                <input type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                                    value="Close">
                                                <input type="submit" class="btn btn-primary" id="add-btn" value="Add">
                                                <button class="btn btn-success" id="edit-btn"
                                                    style="display: none;">Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <!-- <form class="app-form app-icon-form " action="#">
                                <div class="position-relative ">
                                    <input v-model="search" @input="fetchUsers" placeholder="Search..."
                                        class="form-control" aria-label="Search">
                                    <i class="ti ti-search text-dark"></i>
                                </div>
                            </form>
                        </div> -->

                        <div class="overflow-auto app-scroll">
                            <table class="table table-bottom-border  list-table-data align-middle mb-0">
                                <thead>
                                    <tr class="app-sort">
                                        <th>
                                            <input type="checkbox" class="form-check-input  checkAll" name="checkAll">
                                        </th>
                                        <th class="d-none">ID</th>
                                        <th class="sort" data-sort="employee" scope="col">Position</th>
                                        <th class="sort" data-sort="email" scope="col">Name</th>
                                        <th class="sort" data-sort="contact" scope="col">Photo</th>
                                        

                                        <th class="sort" data-sort="action" scope="col">Edit</th>
                                        <th class="sort" data-sort="action" scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody class="list" id="t-data">
                                    <tr v-for="role in roles.data">
                                        <th scope="row"><input class="form-check-input mt-0 ms-2" type="checkbox"
                                                name="item"></th>
                                        <td class="id d-none">{{ role.id }}</td>
                                        <td class="employee">{{ role.position }}</td>
                                        <td class="email">{{ role.name }}</td>
                                        <td class="date"><img :src="`${imgUrl}/${role.photo}`" alt="" srcset=""></td>

                                        <td class="edit"><button class="btn edit-item-btn btn-sm btn-success"
                                                data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                @click="editRole(role.id)">Edit</button>
                                        </td>
                                        <td class="remove"><button @click="deleteRole(role.id)"
                                                class="btn remove-item-btn btn-sm btn-danger">Remove</button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <!-- <div class="list-pagination">
                            <ul class="pagination">
                                <li v-for="page in users.links" :key="page.label"
                                    :class="page.active ? 'active cursor-pointer' : 'cursor-pointer'"><a class="page"
                                        @click="fetchUsers(page.url)" data-i="1" data-page="4">{{
                                        formatPageLabel(page.label) }}</a></li>
                            </ul>
                        </div> -->
                    </div>
                    </div>
  </div>
</template>

<script setup>

</script>

<style>

</style>